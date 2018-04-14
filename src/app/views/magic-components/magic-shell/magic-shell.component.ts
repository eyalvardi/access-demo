import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";

import {filter} from "rxjs/operators";
import {Subscription} from "rxjs/Subscription";

import {CommandType, GuiCommand} from "@magic/gui";
import {BaseTaskMagicComponent, GuiInteractiveExecutor, MagicEngine, ModalFormDefinition} from "@magic/angular";

import {componentsList} from "../../../components-list";


@Component({
  selector: 'app-magic-shell',
  template:`
    <div>
      <mga-WebContainer
        *ngIf            ="MainCompParameters"
        [myTaskId]       ="MainCompParameters.myTaskId"
        [taskDescription]="MainCompParameters.taskDescription">
      </mga-WebContainer>

      <app-magic-modal
        *ngIf="ModalFormDefinition.comp !== null"
        [ModalComp]="ModalFormDefinition.comp"
        [ModalCompParameters]="ModalFormDefinition.parameters">
      </app-magic-modal>
    </div>
    
`})
export class MagicShellComponent implements OnInit,OnDestroy {

  constructor(
    private router: Router,
    protected magic: MagicEngine,
    protected changeDetectorRef: ChangeDetectorRef,
    private   titleService: Title) {
      this.initializeMagic();
      BaseTaskMagicComponent.componentList = componentsList;
      this.setTitle();
  }

  ngOnInit() {
    this.magic.startMagic();
  }

  /* magic start*/
  private debugSub: Subscription;
  public MainComp: Component;
  public MainCompParameters: any;
  public ModalFormDefinition: ModalFormDefinition = new ModalFormDefinition();

  initializeMagic() {
    this.magic.registerOpenFormCallback((formName: string, taskId: string, taskDescription: string) => {
      this.InjectComponent(formName, taskId, taskDescription);
    });
    this.regUpdatesUI();
    this.debugLog();
  }

  setTitle() {
    this.titleService.setTitle(BaseTaskMagicComponent.componentList.title);
  }

  private InjectComponent(formName: string, taskId: string, taskDescription: string) {
    this.MainComp = BaseTaskMagicComponent.componentList.getComponents(formName);
    this.MainCompParameters = {myTaskId: taskId, taskDescription: taskDescription};

    this.changeDetectorRef.detectChanges();
  }

  regUpdatesUI() {
    this.magic.refreshDom.pipe(
        filter(command => command.TaskTag === '0')
      )
      .subscribe(command => {
        this.executeCommand(command);
      });

    this.magic.interactiveCommands.pipe(
        filter(command => command.TaskTag === '0')
      )
      .subscribe(command => {
        let executor = new GuiInteractiveExecutor();
        executor.command = command;
        executor.Run();
      });
  }

  debugLog(){
    this.debugSub = this.magic.refreshDom.subscribe(console.log);
    this.debugSub.add(this.magic.interactiveCommands.subscribe(console.log));
  }

  executeCommand(command: GuiCommand): void {
    console.log('AppComponent.executeCommand()');
    switch (command.CommandType) {
      case CommandType.OPEN_FORM:
        this.ModalFormDefinition.taskId     = command.stringList[0];
        this.ModalFormDefinition.comp       = BaseTaskMagicComponent.componentList.getComponents(command.str);
        this.ModalFormDefinition.parameters = {myTaskId: command.stringList[0], taskDescription: command.stringList[1]};
        this.changeDetectorRef.detectChanges();
        break;

      case CommandType.CLOSE_FORM:
        if (command.str === this.ModalFormDefinition.taskId) {
          this.ModalFormDefinition = new ModalFormDefinition();
        }
        break;
    }
  }

  ngOnDestroy(): void {
    this.debugSub.unsubscribe();
  }

  /* magic end*/
}
