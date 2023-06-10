import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../service/common.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  sidebarMenuHeight = 0;
  sideBarType = '';
  showSideBar = false;
  menu: any = [
    {
      sectionName: 'Your Modules',
      menu: [
        {
          icon: null,
          image: '../../../assets/icons/tool.svg',
          menuName: 'Buisness Intelligence',
          isSelected: false,
          permission: 'viewBuisenseeIntelligence',
          route: ['/', 'buiseness-intelligance', 'account'],
          child: [],
        },
        {
          icon: null,
          image: '../../../assets/icons/Account_Outline.svg',
          menuName: 'Accounts',
          isSelected: false,
          permission: 'viewAccount',
          route: ['/', 'accounts', 'view-accounts'],
          child: [],
        },
        {
          icon: null,
          image: '../../../assets/icons/Inventory_Outline.svg',
          menuName: 'Inventory',
          isSelected: false,
          permission: 'viewProducts',
          route: ['/', 'inventory-management', 'view-products'],
          child: [],
        },
        {
          icon: null,
          image: '../../../assets/icons/Quotation-Outline.svg',
          menuName: 'Quotation',
          isSelected: false,
          permission: 'viewQuotation',
          route: ['/', 'quotation-management', 'view-quotation'],
          child: [],
        },
        {
          icon: null,
          image: '../../../assets/icons/enquiry.svg',
          menuName: 'Enquiry',
          isSelected: false,
          permission: 'viewQuotation',
          route: ['/', 'enquiry', 'view-enquiry'],
          child: [],
        },
        {
          icon: null,
          image: '../../../assets/icons/lead_icon.png',
          menuName: 'Lead',
          isSelected: false,
          permission: 'viewQuotation',
          route: ['/', 'lead', 'view-lead'],
          child: [],
        },
        {
          icon: null,
          image: '../../../assets/icons/Purchase_outline.svg',
          menuName: 'Purchase Order',
          isSelected: false,
          permission: 'viewPurchaseOrder',
          route: ['/', 'purchase-management', 'view-orders'],
          child: [],
        },
        {
          icon: null,
          image: '../../../assets/icons/material-req.svg',
          menuName: 'Material Requisition',
          isSelected: false,
          permission: 'viewProduction',
          route: ['/', 'material-requisition', 'view-materialRequisition'],
          child: [],
        },
        {
          icon: null,
          image: '../../../assets/icons/Account_Outline.svg',
          menuName: 'Dispatch',
          isSelected: false,
          permission: 'viewDispatch',
          route: ['/', 'dispatch', 'view-dispatch'],
          child: [],
        },

        // {
        //   icon: null,
        //   image: '../../../assets/icons/tool.svg',
        //   menuName: 'Production',
        //   isSelected: false,
        //   permission: 'viewProduction',
        //   route: ['/', 'production-management', 'production'],
        //   child: [],
        // },
        // {
        //   icon: null,
        //   image: '../../../assets/icons/tool.svg',

        //   menuName: 'Resource Planning',
        //   isSelected: false,
        //   permission: 'viewResourcePlanning',
        //   route: ['/', 'client-management', 'view-clients'],
        //   child: [],
        // },

        {
          icon: null,
          image: '../../../assets/icons/Buyer_Supplier_Outline.svg',
          menuName: 'Buyers & Suppliers',
          isSelected: false,
          permission: 'viewClients',
          route: ['/', 'client-management', 'view-clients'],
          child: [],
        },

        {
          icon: null,
          image: '../../../assets/icons/Reports_Outline.svg',
          menuName: 'Reports',
          isSelected: false,
          permission: 'viewReports',
          route: ['/', 'report', 'view-report'],
          child: [],
        },
        {
          icon: null,
          image: '../../../assets/icons/expenses.svg',
          menuName: 'Expenses',
          isSelected: false,
          permission: 'viewExpence',
          route: ['/', 'expenses', 'view-expence'],
          child: [],
        },
        {
          icon: null,
          image: '../../../assets/icons/it_support.svg',
          menuName: 'IT-Support',
          isSelected: false,
          permission: 'viewExpence',
          route: ['/', 'it-support', 'view-it-support'],
          child: [],
        },
        {
          icon: null,
          image: '../../../assets/icons/dmr.svg',
          menuName: 'DMR',
          isSelected: false,
          permission: 'viewDMR',
          route: ['/', 'dmr', 'view-dmr'],
          child: [],
        },
        {
          icon: null,
          image: '../../../assets/icons/accounting-integration.svg',
          menuName: 'Account-Integration',
          isSelected: false,
          permission: 'Account-Integration',
          route: ['/', 'account-integration', 'tally-report'],
          child: [],
        },

        // {
        //   icon: null,
        //   image: '../../../assets/icons/E-Way_Bill_Outline.svg',
        //   menuName: 'E-Way Bill',
        //   isSelected: false,
        //   permission: 'viewEWayBill',
        //   route: ['/', 'client-management', 'view-clients'],
        //   child: [],
        // },
        // {
        //   icon: null,
        //   image: '../../../assets/icons/E-Invoice_Outline.svg',
        //   menuName: 'E-Invoice',
        //   isSelected: false,
        //   permission: 'viewEInvoice',
        //   route: ['/', 'client-management', 'view-clients'],
        //   child: [],
        // },

        {
          icon: null,
          image: '../../../assets/icons/Settings_Outline.svg',
          menuName: 'Settings',
          isSelected: false,
          permission: 'viewSettings',
          route: ['/', 'setting', 'users'],
          child: [],
        },
        // {
        //   icon: null,
        //   image: '../../../assets/icons/tool.svg',

        //   menuName: 'CRM',
        //   isSelected: false,
        //   permission: 'viewProduction',
        //   route: ['/', 'crm', 'customer-details'],
        //   child: [],
        // },
      ],
    },
  ];
  currentMenuName = 'Dashboard';

  constructor(private commonService: CommonService, private router: Router) {
    router.events.subscribe((val) => {
      // see also

      if (val instanceof NavigationEnd) {
        if (val.urlAfterRedirects == '/') {
          this.currentMenuName = 'Dashboard';
        } else {
          let urlEndPoint: any = val.urlAfterRedirects.split('/');
          urlEndPoint = urlEndPoint[urlEndPoint.length - 1];

          let menuFlag = false;
          for (let eachSection of this.menu) {
            for (let eachMenu of eachSection.menu) {
              if (eachMenu.child.length == 0) {
                if (eachMenu.route.indexOf(urlEndPoint) > -1) {
                  this.currentMenuName = eachMenu.menuName;
                  menuFlag = true;
                }
              } else {
                for (let eachChild of eachMenu.child) {
                  if (eachChild.route.indexOf(urlEndPoint) > -1) {
                    this.currentMenuName = eachMenu.menuName;
                    eachMenu.isSelected = true;
                    menuFlag = true;
                  }
                  if (menuFlag) {
                    break;
                  }
                }
              }
              if (menuFlag) {
                break;
              }
            }
            if (menuFlag) {
              break;
            }
          }
        }
      }
    });
  }

  ngOnInit() {
    this.sidebarMenuHeight = this.commonService.getSideBarHeight();
    this.sideBarType = this.commonService.getSideBarType();
  }

  onDropDownClick(item: any) {
    item.isSelected = !item.isSelected;
    if (item.isSelected) {
      for (let eachSection of this.menu) {
        for (let eachMenu of eachSection.menu) {
          if (
            item.menuName !== eachMenu.menuName &&
            this.currentMenuName != eachMenu.menuName
          ) {
            eachMenu.isSelected = false;
          }
        }
      }
    }
  }
}
