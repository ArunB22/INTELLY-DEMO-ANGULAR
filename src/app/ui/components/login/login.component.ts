import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {AppConstants} from '../../../shared/constants/app-constants';
import {LoginAction} from './login-action';
import {FormBuilder} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {isNull} from 'util';
import {UserModel} from '../../../data/models/UserModel/user-model';
import {DataManagerService} from '../../../shared/services/dataManger/data-manager.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends LoginAction implements OnInit {

  email = null;
  password = null;
  errorFlag: number;
  validationErrorMsg: string;
  validationFlag: boolean;
  errorMsgFlag: boolean;
  errorMsg: string;
  passMsgFlag: boolean;
  passwordMsg: string;
  publisher: UserModel;

  constructor(snackBar: MatSnackBar, router: Router, dataManager: DataManagerService, @Inject(PLATFORM_ID) private platformId: any,
    @Inject('LOCALSTORAGE') private localStorage: any) {
    super();
    this.dataManager = dataManager;
    this.router = router;
    this.snackBar = snackBar;
    this._sigInUrl = AppConstants.BASE_URL +  AppConstants.SERVICE_NAME_LOGIN;
    this.publisher = new UserModel();
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.localStorage.getItem(AppConstants.STORAGE_KEY_USER_ID)) {
        this.routeNavigate('/landing');
      }
    }
  }

  onLogin() {
    const loginBody = {};
    loginBody['email'] = this.email;
    loginBody['password'] = this.password;
    if (this.validatePostBody(loginBody)) {
      this.userLoginIn(loginBody);
      console.log('validation call', loginBody);
    }
  }



  redirectToRegister() {
    this.routeNavigate('registration');
  }

  validatePostBody(postBody) {
    const error = true;
    if (isNull(this.email) || this.email === '') {
      this.errorFlag = 1;
      this.validationErrorMsg = 'Email is required';
      this.validationFlag = true;
      return false;
    }
    if (!this.email.match('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')) {
      this.errorFlag = 1;
      this.validationErrorMsg = 'Please enter a valid Email';
      this.validationFlag = true;
      return false;
    }
    if (isNull(this.password) || this.password === '' && (this.password.dirty || this.password.touched)) {
      this.errorFlag = 2;
      this.validationErrorMsg = 'Password is required';
      return false;
    }
    return error;
  }

  protected passLoginResponse(res: any) {
    console.log('sign_in response', res);
    if (isPlatformBrowser(this.platformId)) {
      this.localStorage.setItem(AppConstants.STORAGE_KEY_USER_EMAIL, res.data.email);
      this.localStorage.setItem(AppConstants.STORAGE_KEY_USER_ID, res.data.id);
      this.dataManager.user_email = res.data.email;
      this.dataManager.user_id = res.data.id;
    }
    this.showSnackBar('Successfully Logged In', 'Ok', 3000, AppConstants.SNACK_BAR_SUCESS_CLASS);
    this.routeNavigate('landing');
  }

  protected passLoginInError(error) {
    console.log(error);
    this.showSnackBar(this.apiValidationErrorCheck(error), 'Ok', 3000, AppConstants.SNACK_BAR_ERROR_CLASS);
    // this.errorMsg = this.apiValidationErrorCheck(error);
    this.errorMsgFlag = true;
  }

  forgotPassword() {
    console.log('forgot pwd called');
    this.routeNavigate('/forgot-password');
  }
}
