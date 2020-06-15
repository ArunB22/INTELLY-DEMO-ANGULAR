import {BaseComponent} from '../../../abstract-components/base-component/base-component';

export abstract class RegisterAction extends BaseComponent {
  protected _registerUrl: string;
  protected abstract passResponse(res);
  protected abstract passError(error);
  registerUser(postBody) {
    this.loadFlag = true;
    this.dataManager.auth(this._registerUrl, postBody)
      .subscribe(
        response => {
          this.loadFlag = false;
          this.passResponse(response);
        },
        error => {
          this.loadFlag = false;
          this.networkErrorHandler(error);
        }
      );
  }
}
