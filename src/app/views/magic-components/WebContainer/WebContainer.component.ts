import { Component } from "@angular/core";

import { BaseTaskMagicComponent } from "@magic/angular";
import { TaskMagicService } from "@magic/angular";

//export namespace Webtest_WebContainer_WebContainer {
	@Component({
		selector: "mga-WebContainer",
		providers: [TaskMagicService],
		template: `
      <form [formGroup]="screenFormGroup">
        <magic-customers [source]="screenFormGroup"></magic-customers>
      </form>    
  `})
	export class WebContainer extends BaseTaskMagicComponent {}
//}
