import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {FormGroup} from '@angular/forms';
import {isPlatformBrowser} from '@angular/common';
import {AppConstants} from '../../../shared/constants/app-constants';
import {RegisterAction} from './register-action';
import {DataManagerService} from '../../../shared/services/dataManger/data-manager.service';
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent extends RegisterAction implements OnInit {
  email = null;
  passwordStr: string;
  password = null;
  pwdErrorFLag: boolean;
  name = null;
  confirmPass = null;
  registerForm: FormGroup;
  errorMsg: string;
  errorMsgFlag: boolean;
  pwdErrorMsg: string;
  validationErrorMsg: string;
  errorFlag: number;
  validationFlag: boolean;

  constructor(dataManager: DataManagerService, router: Router, snackBar: MatSnackBar,
              @Inject(PLATFORM_ID) private platformId: any,
              @Inject('LOCALSTORAGE') private localStorage: any, ) {
    super();
    this.pwdErrorFLag = false;
    this.errorMsgFlag = false;
    this.dataManager = dataManager;
    this.router = router;
    this.snackBar = snackBar;
    this.validationFlag = false;
    this._registerUrl = AppConstants.BASE_URL + AppConstants.SERVICE_NAME_REGISTER;

  }

  ngOnInit() { }

  onRegister(form) {
    const registerCreds = {};
    registerCreds['email'] = isNullOrUndefined(this.email) ? null : this.email.trim();
    registerCreds['password'] = this.password;
    registerCreds['name'] = isNullOrUndefined(this.name) ? null : this.name.trim();
    if (!form.invalid && this.checkConfirmPass()) {
      this.registerUser(registerCreds);
      // this.validatePostBody(registerCreds);
      console.log('validation call', registerCreds);
    }
  }

  protected passResponse(res) {
    console.log('Register response', res);
    if (isPlatformBrowser(this.platformId)) {
      this.localStorage.setItem(AppConstants.STORAGE_KEY_USER_EMAIL, this.email.trim());
      this.dataManager.user_email = this.email.trim();
}
    this.routeNavigate('landing');
    this.showSnackBar('Registered Successfully', 'OK', 3000, AppConstants.SNACK_BAR_SUCESS_CLASS);
  }

  protected passError(error) {
    this.showSnackBar('Registered Failed', 'Error', 3000, AppConstants.SNACK_BAR_ERROR_CLASS);
    this.errorMsg = error.error.errors.email[0];
    console.log('error message', error.error.errors.email[0]);
    this.errorMsgFlag = true;
  }
  redirectToLogin() {
    this.routeNavigate('/login');
  }

  checkConfirmPass() {
    return (this.password === this.confirmPass );
  }

}
