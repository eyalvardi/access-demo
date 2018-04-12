import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';

// Import containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';

const APP_CONTAINERS = [
  FullLayoutComponent,
  SimpleLayoutComponent
]

// Import components
import {
  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  AppSidebarMinimizerComponent,
  APP_SIDEBAR_NAV
} from './components';

const APP_COMPONENTS = [
  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  AppSidebarMinimizerComponent,
  APP_SIDEBAR_NAV
]

// Import directives
import {
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
} from './directives';

const APP_DIRECTIVES = [
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
]

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { LoginComponent } from './views/login/login.component';
import { CustomersComponent } from './views/magic-components/customers/customers.component';
import { AddressComponent } from './views/magic-components/customers/tabs/address/address.component';
import { ContactsComponent } from './views/magic-components/customers/tabs/contacts/contacts.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule, MatInputModule, MatPaginatorModule, MatTooltipModule} from "@angular/material";
import {MagicModule, ThemeModule} from "@magic/angular";
import {CalendarModule} from "primeng/primeng";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {DynamicModule} from "ng-dynamic-component";
import {ReactiveFormsModule} from "@angular/forms";
import { MagicShellComponent } from './views/magic-components/magic-shell/magic-shell.component';
import {componentsList} from "./components-list";

const magicComponents = componentsList.componentsArray ;//.getAllComponents();

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,

    BrowserAnimationsModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatInputModule,
    MatTooltipModule,

    /* magic start */
    MagicModule.forRoot(),
    ThemeModule,
    DynamicModule.withComponents(magicComponents),

    CalendarModule,
    InfiniteScrollModule,

    /* magic end*/

    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule
  ],
  declarations: [
    ...magicComponents,
    AppComponent,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES,
    LoginComponent,
    CustomersComponent,
    AddressComponent,
    ContactsComponent,
    MagicShellComponent
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
