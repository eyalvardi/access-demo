import { ComponentList } from "@magic/angular";
import {Webtest_WebContainer_WebContainer} from "./views/magic-components/WebContainer/WebContainer.component";
import {Webtest_WebTablesCTLCustomerAc_BrowseTablesCTLCustomer} from "./views/magic-components/WebTablesCTLCustomerAc/BrowseTablesCTLCustomer.component";

export const componetsHash = {
  WebContainer_WebContainer: Webtest_WebContainer_WebContainer.WebContainer,
  WebTablesCTLCustomerAc_BrowseTablesCTLCustomer: Webtest_WebTablesCTLCustomerAc_BrowseTablesCTLCustomer.BrowseTablesCTLCustomer
};

export const componentArray = [
  Webtest_WebContainer_WebContainer.WebContainer,
  Webtest_WebTablesCTLCustomerAc_BrowseTablesCTLCustomer.BrowseTablesCTLCustomer
];

export const componentsList = new ComponentList(componetsHash,componentArray,"Access");

