import { Component } from "@angular/core";

import { WindowType, WindowPosition } from "@magic/utils";
import {BaseTaskMagicComponent, TaskMagicService} from "@magic/angular";


export namespace Webtest_CustomerMaintenance_ShowCustomers_Not_Implemeted_Not_Implemeted {
	@Component({
		selector: "mga-Not_Implemeted",
		providers: [TaskMagicService],
		templateUrl: "./Not_Implemeted.component.html"
	})
	export class Not_Implemeted extends BaseTaskMagicComponent {

	  private static readonly formName: string = "Not_Implemeted";
		private static readonly showTitleBar: boolean = true;
		private static readonly x: number = 1;
		private static readonly y: number = 1;
		private static readonly windowPosition: WindowPosition = 5;

		get X() {
			return Not_Implemeted.x;
		}

		get Y() {
			return Not_Implemeted.y;
		}

		get WindowPosition() {
			return Not_Implemeted.windowPosition;
		}

		get FormName() {
			return Not_Implemeted.formName;
		}

		get ShowTitleBar() {
			return Not_Implemeted.showTitleBar;
		}
	}
}
