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

export namespace Webtest_CustomerMaintenance_ShowCustomers_Show_Addresses_ShowAddresses {
	@Component({
		selector: "mga-ShowAddresses",
		providers: [TaskMagicService],
		templateUrl: "./ShowAddresses.component.html"
	})
	export class ShowAddresses extends BaseTaskMagicComponent {
		@ViewChild(MatPaginator) paginator: MatPaginator;
		@ViewChild(MatSort) sort: MatSort;
		displayedColumns = [
			"Address Code &gt;",

			"Description [click to view full address]",

			"Default Address For",

			"Address Line 1",

			"Address Line 2",

			"Address Line 3",

			"Address Line 4",

			"Address Line 5",

			"Post Code",

			"Telephone",

			"Fax",

			"Email"
		];
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
