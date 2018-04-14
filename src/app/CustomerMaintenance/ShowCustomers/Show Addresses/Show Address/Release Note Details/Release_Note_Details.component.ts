import { Component } from "@angular/core";

import { WindowType, WindowPosition } from "@magic/utils";
import {BaseTaskMagicComponent, TaskMagicService} from "@magic/angular";


export namespace Webtest_CustomerMaintenance_ShowCustomers_Show_Addresses_Show_Address_Release_Note_Details_Release_Note_Details {
	@Component({
		selector: "mga-Release_Note_Details",
		providers: [TaskMagicService],
		templateUrl: "./Release_Note_Details.component.html"
	})
	export class Release_Note_Details extends BaseTaskMagicComponent {
		private static readonly formName: string = "Release_Note_Details";
		private static readonly showTitleBar: boolean = true;
		private static readonly x: number = 0;
		private static readonly y: number = 0;
		private static readonly windowPosition: WindowPosition = 4;

		get X() {
			return Release_Note_Details.x;
		}

		get Y() {
			return Release_Note_Details.y;
		}

		get WindowPosition() {
			return Release_Note_Details.windowPosition;
		}

		get FormName() {
			return Release_Note_Details.formName;
		}

		get ShowTitleBar() {
			return Release_Note_Details.showTitleBar;
		}
	}
}
