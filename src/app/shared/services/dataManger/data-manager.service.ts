import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AppConstants} from '../../constants/app-constants';
import {Subject} from "rxjs/Subject";

@Injectable()
export class DataManagerService {

  protected httpClient: HttpClient;
  httpHeaders: HttpHeaders;
  protected httpHeaders2: HttpHeaders;
  public is_new_notification: boolean;
  user_id: string;
  user_email: string;
  constructor(httpClient: HttpClient, @Inject(PLATFORM_ID) private platformId: any,
              @Inject('LOCALSTORAGE') private localStorage: any) {
    this.httpClient = httpClient;
    this.is_new_notification = false;
    this.httpHeaders = new HttpHeaders().set('Accept', 'application/json');
    this.httpHeaders2 = this.httpHeaders.append('Content-Type', 'application/json');
  }
  /**
   * func to cal api using get Request
   * with HttpClient class
   * @param url api address
   * @returns {Observable<ArrayBuffer>} response returned
   */
  getRequest(url: string): Observable<any> {
    console.log({headers: this.httpHeaders});
    console.log(url);
    return this.httpClient.get(url, {headers: this.httpHeaders});
  }

  /**
   * func for login/register without headers
   * @param url
   * @param creds
   * @returns {Observable<Object>}
   */
  auth(url, creds): Observable<any> {
    console.log('in post call url : ', url);
    return this.httpClient.post(url, creds, {headers: this.httpHeaders2});
  }



  /**
   * func for logout
   * deletes all local-storage items
   */
  logout() {
    this.localStorage.removeItem(AppConstants.STORAGE_KEY_USER_EMAIL);
    this.localStorage.removeItem(AppConstants.STORAGE_KEY_USER_ID);
    this.user_id = null;
  }


}
