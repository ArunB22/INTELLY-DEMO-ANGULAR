import {Component, Inject, OnInit, PLATFORM_ID, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {DataManagerService} from '../../services/dataManger/data-manager.service';
import {AppConstants} from '../../constants/app-constants';
import {ToolBarAction} from './tool-bar.action';
import {ApiResponseWrapper} from '../../../data/models/ApiResponseWrapper/api-response-wrapper';
import {isNullOrUndefined} from 'util';
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent extends ToolBarAction implements OnInit {

  @ViewChild('dropdown2') dropDown2;
  @ViewChild('dropdown1') dropDown1;
  showPulsationIcon: boolean;
  isNotificationDropDownOpen: boolean;
  perPage: number;
  pageNo: number;
  sortedBy: string;
  orderBy: string;
  showOlderFlag: boolean;
  notificationList: ApiResponseWrapper<{}>;
  dataManagerUI: DataManagerService;

  constructor(snackBar: MatSnackBar, router: Router, dataManager: DataManagerService,
              @Inject(PLATFORM_ID) private platformId: any,
              @Inject('LOCALSTORAGE') private localStorage: any) {
    super();
    this.router = router;
    this.snackBar = snackBar;
    this.dataManager = dataManager;
    this.dataManagerUI = dataManager;
    this.isNotificationDropDownOpen = false;
    this.notificationList = new ApiResponseWrapper();
    this.showPulsationIcon = false;
    this.perPage = 5;
    this.pageNo = 1;
    this.orderBy = 'created_at';
    this.sortedBy = 'desc';
    this.showOlderFlag = true;
  }

  ngOnInit() {
  }


  settings() {
    this.showSnackBar("Action not Available in Demo", "Ok", 3000, AppConstants.SNACK_BAR_WARNING_CLASS);
  }

  profile() {
    this.showSnackBar("Action not Available in Demo", "Ok", 3000, AppConstants.SNACK_BAR_WARNING_CLASS);
  }

  reDirectToLandingPage() {
    this.showSnackBar("Action not Available in Demo", "Ok", 3000, AppConstants.SNACK_BAR_WARNING_CLASS);
  }

  logOut() {
    this.notificationList = new ApiResponseWrapper();
    this.showOlderFlag = true;
    this.dataManager.logout();
    this.router.navigate(['/login']);
  }

  onShown1() {
    console.log('onShown');
    this.dropDown2.hide();
  }

  onHidden2() {
    console.log('notification hidden');
    this.isNotificationDropDownOpen = true;
  }

  onShown2() {
    console.log('onShown');
    this.isNotificationDropDownOpen = false;
    this.dropDown1.hide();
    if (this.dataManager.is_new_notification || this.showPulsationIcon) {
      this.notificationList.data = [];
      this.showOlderFlag = true;
      this.removeIsNewNotification();
    }
    this.showPulsationIcon = false;
  }

  pulsClick() {
    this.dropDown2.toggle(true);
  }

  removeIsNewNotification() {
    if (this.dataManager.is_new_notification) {
      this.dataManager.is_new_notification = false;
    }
  }


}
