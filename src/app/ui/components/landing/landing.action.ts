import {ListUtil} from '../../../abstract-components/list-util-component/list-util.component';
import {isNullOrUndefined} from "util";
import {AppConstants} from "../../../shared/constants/app-constants";


export abstract class BoardsAction extends ListUtil {
  protected _getRepairsUrl: string;
  btngroup = [
    {
      'filterbtn': 0,
      'btnstatus': 'Denied',
      'status': '&status[eq]=rejected'
    },

    {
      'filterbtn': 1,
      'btnstatus': 'Approved',
      'status': '&status[eq]=approved'
    },
    {
      'filterbtn': 2,
      'btnstatus': 'Pending',
      'status': '&status[eq]=unapproved'
    },
    {
      'filterbtn': 3,
      'btnstatus': 'Draft',
      'status': '&status[eq]=draft'
    },
    {
      'filterbtn': 4,
      'btnstatus': 'All',
      'status': ''
    },
  ];
  orderByList = [
    {
      'name': 'Name',
      'key': 'name'
    }
  ];



  /**
   * func to call data list
   * for first page sets the page no
   * to degfault 1
   */
  firstPageCall() {
    this.showSnackBar("Action not allowed", "Ok", 3000, AppConstants.SNACK_BAR_WARNING_CLASS);
  }

  /**
   * func to call creative
   * list api based on input
   */
  listApi() {
    this.loadFlag = true;
    this.dataManager.getRequest(this._getRepairsUrl)
      .subscribe(
        (response) => {
          if (response) {
            if (response.data.length > 0) {
              this.loadFlag = false;
              this.errMsg = '';
            } else {
              this.errMsg = 'No records found';
              this.loadFlag = true;
            }
            console.log('data', response.data);
            this.passList(response);

              this.totalNoOfRecords = 2;
              // to retain the page no in case of next/prev pagination calls
              this.pageNo = 1;
              this.page_count_api_call = 2;
              this.disableFirst = true ;
              this.disableLast = false;
              this.disableNext = false;
              this.disablePrev = false;
          }
        },
        error => {
          this.loadFlag = false;
          this.networkErrorHandler(error.error);
        }
      );
  }

  /**
   * func to pass creative list data to
   * Creative List Component
   * @param response
   */
  protected abstract passList(response);

  /**
   * func to pass error to
   * Creative list Component
   * @param error
   */
  protected abstract passError(error);

}
