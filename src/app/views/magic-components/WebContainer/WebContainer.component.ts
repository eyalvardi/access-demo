import { Component } from "@angular/core";

import { BaseTaskMagicComponent } from "@magic/angular";
import { TaskMagicService } from "@magic/angular";

//export namespace Webtest_WebContainer_WebContainer {
	@Component({
		selector: "mga-WebContainer",
		providers: [TaskMagicService],
		//styleUrls: ["./WebContainer.component.css"],
		templateUrl: "./WebContainer.component.html"
	})
	export class WebContainer extends BaseTaskMagicComponent {}
//}
