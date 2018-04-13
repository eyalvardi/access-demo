import { Component } from "@angular/core";
import {BaseTaskMagicComponent, TaskMagicService} from "@magic/angular";



export namespace Webtest_CustomerMaintenance_WorkToList {
	@Component({
		selector: "mga-WorkToList",
		providers: [TaskMagicService],
		templateUrl: "./WorkToList.component.html"
	})
	export class WorkToList extends BaseTaskMagicComponent {}
}
