import { Component } from "@angular/core";

import { WindowType, WindowPosition } from "@magic/utils";
import {BaseTaskMagicComponent, TaskMagicService} from "@magic/angular";


export namespace Webtest_CustomerMaintenance_ShowCustomers_Show_Addresses_Show_Address_Show_Address {
	@Component({
		selector: "mga-Show_Address",
		providers: [TaskMagicService],
		templateUrl: "./Show_Address.component.html"
	})
	export class Show_Address extends BaseTaskMagicComponent {
		private static readonly formName: string = "Show_Address";
		private static readonly showTitleBar: boolean = false;
		private static readonly x: number = 0;
		private static readonly y: number = 0;
		private static readonly windowPosition: WindowPosition = 1;

		get X() {
			return Show_Address.x;
		}

		get Y() {
			return Show_Address.y;
		}

		get WindowPosition() {
			return Show_Address.windowPosition;
		}

		get FormName() {
			return Show_Address.formName;
		}

		get ShowTitleBar() {
			return Show_Address.showTitleBar;
		}
	}
}
