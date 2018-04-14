import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {WebContainer} from "../WebContainer/WebContainer.component";

@Component({
  selector   : 'magic-customers',
  templateUrl: './customers.component.html',
  styleUrls  : ['./customers.component.scss']
})
export class CustomersComponent {
  @Input('source') screenFormGroup:FormGroup;

  constructor(public parent: WebContainer){}
}
