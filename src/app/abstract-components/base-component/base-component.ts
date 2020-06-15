import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {MatDialog, MatDialogConfig, MatDialogRef, MatSnackBar} from '@angular/material';
import {DataManagerService} from '../../shared/services/dataManger/data-manager.service';
import {DomSanitizer} from '@angular/platform-browser';
import {MessageDialogComponent} from '../../ui/dialogs/message-dialog/message-dialog.component';
import {AppConstants} from '../../shared/constants/app-constants';

export abstract class BaseComponent {
  protected dataManager: DataManagerService;
  protected router: Router;
  protected route: ActivatedRoute;
  protected dialogRef: MatDialog;
  protected snackBar: MatSnackBar;
  public loadFlag: boolean;
  public errMsg: string;
  public entity_name;
  id: string;
  protected appDialogs: MatDialog;
  /**
   * func to route
   * @param route route to navigate to
   * @param options extra params sent with route
   */
  protected routeTo(route: string, options: NavigationExtras) {
    if (options !== null) {
      this.router.navigate([route], options);
    } else {
      this.router.navigate([route]);
    }
  }

  fetchNameandIdFomRoute() {
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
      this.entity_name = params['entity_name'];
    });
    return (this.id ? true : false);
  }
  /**
   * func to route with id
   * @param route string route as per routing
   * @param id id for record to be oped on navigation
   */
  routeWithId(route: string, id: string): void {
    const navigationExtra: NavigationExtras = {queryParams: {'id': id}};
    this.router.navigate([route], navigationExtra);
  }

  /**
   * func to route with navigation extra's
   * @param route string route as per routing
   * @param queryParams object of extra data
   */
  routeWithQueryParams(route: string, queryParams: {}) {
    const navigationExtra: NavigationExtras = {queryParams: queryParams};
    this.router.navigate([route], navigationExtra);
  }

  /**
   * func to route to given url
   * @param route url to route to
   */
  routeNavigate(route): void {
    this.router.navigate([route]);
  }

  /**
   * func to hanlde toast messages  on
   * sncakBar to show error message or action
   * @param message message to show
   * @param action Suggested Acttion Result
   * @param duration time duration the message should be shown
   */
  showSnackBar(message, actionText, duration, css) {
    this.snackBar.open(message, actionText, {
      duration: duration,
      extraClasses: [css]
    });
  }

  protected fetchIdFromRouteQueryParams(): boolean {
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
    });
    return (this.id ? true : false);
  }

  /**
   * func to
   * @param id
   */
  setId(id): void {
    console.log('Inside SetId method');
    if (id !== 'None') {
      this.id = id;
      console.log('record id ', this.id);
    }
  }

  /**
   * func to logout from app in
   * case of expiry token or
   * user action`
   */
  logOut() {
    this.dataManager.logout();
    this.routeNavigate('/login');
  }

  /**
   * func to handle api
   * errors for app network call
   * @param error
   */
  networkErrorHandler(error) {
    console.log(error);
    if (typeof error === 'string') {
      console.log('instance of string', JSON.parse(error));
      error = JSON.parse(error);
    }
    if (error.status_code === 401 || error.status_code === 403) {
      this.routeNavigate('/session-expire');
      this.redirectAfterClose();
    } else if (error.status_code === 404) {
      this.routeNavigate('/error-redirect');
      this.redirectAfterClose();
      // this.showSnackBar(error.message, error.status, 3000);
    } /*else if (error.status_code >= 400 || error.status_code < 500) {
      this.routeNavigate('/bad-request');
      this.redirectAfterClose();
    }*/ else if (error.status_code >= 500 && error.status_code < 600) {
      this.routeNavigate('/server-error');
      this.redirectAfterClose();
    }
  }

  redirectAfterClose() {
    if (this.appDialogs) {
      this.appDialogs.closeAll();
    }
  }

  /**
   * func to handle api
   * errors for image api call
   * @param error
   */
  imageGetCall(error) {
    console.log(error);
    if (typeof error === 'string') {
      console.log('instance of string', JSON.parse(error));
      error = JSON.parse(error);
    }
    if (error.status_code === 401 || error.status_code === 403) {
      this.routeNavigate('/session-expire');
      // this.redirectAfterClose();
      if (this.dialogRef) {
        this.dialogRef.closeAll();
      }
    }
  }

  /**
   * func to handle api validation errors
   * returns message filed in case of exceptions
   * accepts only error object not with http error wrapper
   * @param error
   */
  apiValidationErrorCheck(error) {
    console.log('apiValidationErrorCheck', error);
    if (error.errors) {
      console.log(error.errors[Object.keys(error.errors)[0]]);
      return error.errors[Object.keys(error.errors)[0]];
    } else {
      return error.message;
    }
  }


}
