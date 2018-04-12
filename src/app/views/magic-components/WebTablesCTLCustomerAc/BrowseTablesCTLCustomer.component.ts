import { Component } from "@angular/core";

import { BaseTaskMagicComponent } from "@magic/angular";
import { TaskMagicService } from "@magic/angular";

import {
	MatPaginator,
	MatSort,
	MatTableDataSource,
	MatDialog
} from "@angular/material";
import { SelectionModel } from "@angular/cdk/collections";
import { ViewChild } from "@angular/core";
import { ChangeDetectorRef } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

export namespace Webtest_WebTablesCTLCustomerAc_BrowseTablesCTLCustomer {
	@Component({
		selector: "magic-customers-table",
		providers: [TaskMagicService],
		styleUrls: ["./BrowseTablesCTLCustomer.component.css"],
		templateUrl: "./BrowseTablesCTLCustomer.component.html"
	})
	export class BrowseTablesCTLCustomer extends BaseTaskMagicComponent {
		@ViewChild(MatPaginator) paginator: MatPaginator;
		@ViewChild(MatSort) sort: MatSort;
		displayedColumns = [
			"cGroupCode",
			"cCompanyCode",
			"cDivisionCode",
			"cCustomerAccountCode"
		];
		constructor(
			public dialog: MatDialog,
			protected ref: ChangeDetectorRef,
      public task: TaskMagicService,
			protected router: Router,
			protected activatedRoute: ActivatedRoute
		) {
			super(ref, task/*, router, activatedRoute*/);
		}
		dataSource = new MatTableDataSource<Element>(this.task.Records.list);
		selection = new SelectionModel<Element>(false, []);

		refreshDataSource() {
			this.dataSource.data = this.task.Records.list;
			this.dataSource.paginator = this.paginator;
		}

		getPageSize(): number {
			return this.paginator.pageSize;
		}

		selectRow(rowId: string): void {
			this.selection.select(this.task.Records.list[rowId]);
		}

		GetDialog(): any {
			return this.dialog;
		}
	}
}
