import {NgModule} from "@angular/core";
import {DynamicModule} from "ng-dynamic-component";
import {MagicModule, ThemeModule} from "@magic/angular";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {magicComponents} from "./components-list";
import {CalendarModule} from "primeng/primeng";
import {CommonModule} from "@angular/common";
import {
  MatDialogModule,
  MatInputModule,
  MatPaginatorModule,
  MatTableModule,
  MatTabsModule,
  MatTooltipModule
} from "@angular/material";
import {LoginComponent} from "../login/login.component";
import {AddressComponent} from "./customers/tabs/address/address.component";
import {ContactsComponent} from "./customers/tabs/contacts/contacts.component";
import {MagicShellComponent} from "./magic-shell/magic-shell.component";
import {CustomersComponent} from "./customers/customers.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations:[
    //LoginComponent,
    CustomersComponent,
    AddressComponent,
    ContactsComponent,
    MagicShellComponent,
    ...magicComponents
  ],
  imports:[
    CommonModule,
    RouterModule.forChild([
      { path: '' , component : MagicShellComponent ,
        data: { title: 'Customers' }
      }
    ]),

    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatInputModule,
    MatTooltipModule,

    MagicModule.forRoot(),
    ThemeModule,
    DynamicModule.withComponents(magicComponents),

    CalendarModule,
    InfiniteScrollModule,
  ]
})
export class MagicComponentsModule {

}
