import {Component, OnInit} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {BoardsAction} from './landing.action';
import {DataManagerService} from '../../../shared/services/dataManger/data-manager.service';
import {AppConstants} from '../../../shared/constants/app-constants';
import {ApiResponseWrapper, ResponseMetaData} from '../../../data/models/ApiResponseWrapper/api-response-wrapper';
import {RepairModel} from '../../../data/models/BoardModel/repair-model';
import {MatDialog, MatSnackBar} from '@angular/material';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-boards',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('true', style({
        opacity: '1',
        display: 'block'
      })),
      state('false', style({
        opacity: '0',
        display: 'none'
      })),
      transition('true => false', animate('400ms ease-in-out')),
      transition('false => true', animate('400ms ease-in-out'))
    ]),
  ]
})
export class BoardsComponent extends BoardsAction implements OnInit {

  IsHidden = true;
  orderByName: string;
  bbList: ApiResponseWrapper<RepairModel> = new ApiResponseWrapper();

  constructor(router: Router, dataManager: DataManagerService, snackBar: MatSnackBar, dialogRef: MatDialog) {
    super();
    this.dialogRef = dialogRef;
    this.dataManager = dataManager;
    this.router = router;
    this.snackBar = snackBar;
    this._getRepairsUrl = AppConstants.BASE_URL + AppConstants.SERVICE_NAME_REPAIRS + '?id=' + this.dataManager.user_id;
    this.perPage = 4;
    this.pageNo = 1;
    this.orderBy = 'created_at';
    this.orderByName = 'Created';
    this.sortedBy = 'desc';
    this.current_status = '';
    this.searchFilterList = AppConstants.getSearchFilter('board');
    console.log('this.searchFilterList', this.searchFilterList);
    this.listApi();
  }

  ngOnInit() {
  }

  classChange(status) {
    this.current_status = status;
    this.actionNotAllowed();
  }

  onSelect() {
    this.IsHidden = !this.IsHidden;
    this.sortedBy = this.sortedBy === 'desc' ? 'asc' : 'desc';
    this.showSnackBar("API Call not allowed in Demo", 'Ok', 3000, AppConstants.SNACK_BAR_WARNING_CLASS);
  }

  actionNotAllowed() {
    this.showSnackBar("Action not allowed in Demo", 'Ok', 3000, AppConstants.SNACK_BAR_WARNING_CLASS);
  }

  protected passList(response: ApiResponseWrapper<RepairModel>) {
    this.bbList = response;
    console.log('this.bbList', this.bbList);
    this.bbList.meta = new ResponseMetaData();
    this.bbList.meta.pagination.total = 6;
    this.bbList.meta.pagination.count = 3;
    this.bbList.meta.pagination.page_num = 1;
    this.bbList.meta.pagination.current_page = 1;
    this.bbList.meta.pagination.total_pages = 2;
  }

  protected passError(error) {
  }
}
