import {AfterViewInit, Component, Inject, OnDestroy, OnInit, PLATFORM_ID} from '@angular/core';
import {BaseComponent} from './abstract-components/base-component/base-component';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {isPlatformBrowser} from '@angular/common';
import {AppConstants} from './shared/constants/app-constants';
import {DataManagerService} from './shared/services/dataManger/data-manager.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent implements OnInit, AfterViewInit, OnDestroy {

  title = 'app';

  constructor(router: Router, dataManager: DataManagerService,
              @Inject(PLATFORM_ID) private platformId: any,
              @Inject('LOCALSTORAGE') private localStorage: any, snackBar: MatSnackBar,
               titleService: Title) {
    super();
    this.dataManager = dataManager;
    this.router = router;
    this.snackBar = snackBar;
    titleService.setTitle('INTELLY LABS DEMO');
  }

  ngOnInit(): void {
    console.log('called appcomponent');
    if (isPlatformBrowser(this.platformId)) {
      this.dataManager.user_email = this.localStorage.getItem(AppConstants.STORAGE_KEY_USER_EMAIL);
      this.dataManager.user_id = this.localStorage.getItem(AppConstants.STORAGE_KEY_USER_ID);
      this.dataManager.user_id ? console.log("logged in succesfully") : this.routeNavigate('/login');
    }
  }

  ngAfterViewInit() {
    // call made on this event for reload in case toolbar view is not rendered
    if (isPlatformBrowser(this.platformId)) {
    }
  }

  ngOnDestroy() {
  }
}

