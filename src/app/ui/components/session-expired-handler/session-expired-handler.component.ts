import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {Router} from '@angular/router';
import {isPlatformBrowser} from '@angular/common';
import {AppConstants} from '../../../shared/constants/app-constants';
import {BaseComponent} from '../../../abstract-components/base-component/base-component';


@Component({
  selector: 'app-session-expired-handler',
  templateUrl: './session-expired-handler.component.html',
  styleUrls: ['./session-expired-handler.component.css']
})
export class SessionExpiredHandlerComponent extends BaseComponent implements OnInit {

  constructor(router: Router,  @Inject(PLATFORM_ID) private platformId: any,
              @Inject('LOCALSTORAGE') private localStorage: any, ) {
    super();
    this.router = router;
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.localStorage.getItem(AppConstants.STORAGE_KEY_USER_ID)) {
        this.localStorage.removeItem(AppConstants.STORAGE_KEY_USER_ID);
      }
    }
  }

  toLogin() {
    this.routeNavigate('/login');
  }
}
