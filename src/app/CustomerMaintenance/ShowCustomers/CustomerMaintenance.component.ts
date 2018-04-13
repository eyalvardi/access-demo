import { Component } from "@angular/core";


import {
	MatPaginator,
	MatSort,
	MatTableDataSource,
	MatDialog
} from "@angular/material";
import { SelectionModel } from "@angular/cdk/collections";
import { ViewChild } from "@angular/core";
import { ChangeDetectorRef } from "@angular/core";
import {BaseTaskMagicComponent, TaskMagicService} from "@magic/angular";

export namespace Webtest_CustomerMaintenance_ShowCustomers_CustomerMaintenance {
	@Component({
		selector: "mga-CustomerMaintenance",
		templateUrl: "./CustomerMaintenance.component.html"
	})
	export class CustomerMaintenance extends BaseTaskMagicComponent {
		@ViewChild(MatPaginator) paginator: MatPaginator;
		@ViewChild(MatSort) sort: MatSort;
		displayedColumns = ["Account Code", "Customer Name", "TCP"];
		constructor(
			public dialog: MatDialog,
			protected ref: ChangeDetectorRef,
			public task: TaskMagicService
		) {
			super(ref, task);
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
