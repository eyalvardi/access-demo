import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BaseTaskMagicComponent, GuiInteractiveExecutor, MagicEngine, ModalFormDefinition} from "@magic/angular";
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {filter} from "rxjs/operators";
import {CommandType, GuiCommand} from "@magic/gui";
import {componentsList} from "../../../components-list";

@Component({
  selector: 'app-magic-shell',
  templateUrl: './magic-shell.component.html',
  styleUrls: ['./magic-shell.component.scss']
})
export class MagicShellComponent implements OnInit {
  constructor(
    private router: Router,
    /* magic start*/
    protected magic: MagicEngine,
    protected changeDetectorRef: ChangeDetectorRef,
    private   titleService: Title
    /* magic end*/
  ) {
    this.initializeMagic();
    BaseTaskMagicComponent.componentListBase = componentsList;
    this.setTitle();
  }

  ngOnInit() {
    this.magic.startMagic();
  }

  /* magic start*/
  public MainComp: Component;
  public MainCompParameters: any;
  public ModalFormDefinition: ModalFormDefinition = new ModalFormDefinition();

  initializeMagic() {
    this.magic.registerOpenFormCallback((formName: string, taskId: string, taskDescription: string) => {
      this.InjectComponent(formName, taskId, taskDescription);
    });
    this.regUpdatesUI();
  }

  public setTitle() {
    const newTitle: string = BaseTaskMagicComponent.componentListBase.title;
    this.titleService.setTitle(newTitle);
  }

  private InjectComponent(formName: string, taskId: string, taskDescription: string) {
    this.MainComp = BaseTaskMagicComponent.componentListBase.getComponents(formName);
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

    this.magic
      .interactiveCommands.pipe(
      filter(command => command.TaskTag === '0')
    )
      .subscribe(command => {
        let executor = new GuiInteractiveExecutor();
        executor.command = command;
        executor.Run();
      });
  }

  executeCommand(command: GuiCommand): void {
    console.log('AppComponent.executeCommand()');
    switch (command.CommandType) {
      case CommandType.OPEN_FORM:
        this.ModalFormDefinition.taskId = command.stringList[0];
        this.ModalFormDefinition.comp = BaseTaskMagicComponent.componentListBase.getComponents(command.str);
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

  /* magic end*/
}
