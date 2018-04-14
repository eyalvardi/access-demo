import { Component } from "@angular/core";

import { WindowType, WindowPosition } from "@magic/utils";
import {BaseTaskMagicComponent, TaskMagicService} from "@magic/angular";


export namespace Webtest_CustomerMaintenance_ShowCustomers_Release_Note_Details_ReleaseNoteDetails {
	@Component({
		selector: "mga-ReleaseNoteDetails",
		providers: [TaskMagicService],
		templateUrl: "./ReleaseNoteDetails.component.html"
	})
	export class ReleaseNoteDetails extends BaseTaskMagicComponent {
		private static readonly formName: string = "ReleaseNoteDetails";
		private static readonly showTitleBar: boolean = true;
		private static readonly x: number = 0;
		private static readonly y: number = 0;
		private static readonly windowPosition: WindowPosition = 4;

		get X() {
			return ReleaseNoteDetails.x;
		}

		get Y() {
			return ReleaseNoteDetails.y;
		}

		get WindowPosition() {
			return ReleaseNoteDetails.windowPosition;
		}

		get FormName() {
			return ReleaseNoteDetails.formName;
		}

		get ShowTitleBar() {
			return ReleaseNoteDetails.showTitleBar;
		}
	}
}
