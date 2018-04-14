import {ComponentList} from "@magic/angular";
import {WebContainer} from "./WebContainer/WebContainer.component";
import {BrowseTablesCTLCustomer} from "./WebTablesCTLCustomerAc/BrowseTablesCTLCustomer.component";
import {Webtest_CustomerMaintenance_ShowCustomers_CustomerMaintenance} from "../../CustomerMaintenance/ShowCustomers/CustomerMaintenance.component";
import {Webtest_CustomerMaintenance_ShowCustomers_Release_Note_Details_ReleaseNoteDetails} from "../../CustomerMaintenance/ShowCustomers/Release Note Details/ReleaseNoteDetails.component";
import {Webtest_CustomerMaintenance_ShowCustomers_Show_Addresses_ShowAddresses} from "../../CustomerMaintenance/ShowCustomers/Show Addresses/ShowAddresses.component";
import {Webtest_CustomerMaintenance_ShowCustomers_Show_Addresses_Show_Address_Show_Address} from "../../CustomerMaintenance/ShowCustomers/Show Addresses/Show Address/Show_Address.component";
import {Webtest_CustomerMaintenance_ShowCustomers_Show_Addresses_Show_Address_Release_Note_Details_Release_Note_Details} from "../../CustomerMaintenance/ShowCustomers/Show Addresses/Show Address/Release Note Details/Release_Note_Details.component";
import {Webtest_CustomerMaintenance_ShowCustomers_Customer_Output_Settings_Customer_Output_Settings} from "../../CustomerMaintenance/ShowCustomers/Customer Output Settings/Customer_Output_Settings.component";
import {Webtest_CustomerMaintenance_ShowCustomers_Not_Implemeted_Not_Implemeted} from "../../CustomerMaintenance/ShowCustomers/Not Implemeted/Not_Implemeted.component";
import {Webtest_CustomerMaintenance_WorkToList} from "../../CustomerMaintenance/WorkToList.component";

export const componetsHash = {
  WebContainer_WebContainer:
  WebContainer,

  WebTablesCTLCustomerAc_BrowseTablesCTLCustomer:
  BrowseTablesCTLCustomer,


  CustomerMaintenance_ShowCustomers_CustomerMaintenance:
  Webtest_CustomerMaintenance_ShowCustomers_CustomerMaintenance.CustomerMaintenance,

  CustomerMaintenance_ShowCustomers_Release_Note_Details_ReleaseNoteDetails:
  Webtest_CustomerMaintenance_ShowCustomers_Release_Note_Details_ReleaseNoteDetails.ReleaseNoteDetails,

  CustomerMaintenance_ShowCustomers_Show_Addresses_ShowAddresses:
  Webtest_CustomerMaintenance_ShowCustomers_Show_Addresses_ShowAddresses.ShowAddresses,

  CustomerMaintenance_ShowCustomers_Show_Addresses_Show_Address_Show_Address:
  Webtest_CustomerMaintenance_ShowCustomers_Show_Addresses_Show_Address_Show_Address.Show_Address,

  CustomerMaintenance_ShowCustomers_Show_Addresses_Show_Address_Release_Note_Details_Release_Note_Details:
  Webtest_CustomerMaintenance_ShowCustomers_Show_Addresses_Show_Address_Release_Note_Details_Release_Note_Details.Release_Note_Details,

  CustomerMaintenance_ShowCustomers_Customer_Output_Settings_Customer_Output_Settings:
  Webtest_CustomerMaintenance_ShowCustomers_Customer_Output_Settings_Customer_Output_Settings.Customer_Output_Settings,

  CustomerMaintenance_ShowCustomers_Not_Implemeted_Not_Implemeted:
  Webtest_CustomerMaintenance_ShowCustomers_Not_Implemeted_Not_Implemeted.Not_Implemeted,


  CustomerMaintenance_WorkToList:
  Webtest_CustomerMaintenance_WorkToList.WorkToList
};

export const magicComponents = [
  WebContainer,
  BrowseTablesCTLCustomer
];

export const componentsList = new ComponentList(componetsHash, "Access");

