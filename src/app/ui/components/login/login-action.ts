import {BaseComponent} from '../../../abstract-components/base-component/base-component';

export abstract class LoginAction extends BaseComponent {
  protected _sigInUrl: string;

  protected abstract passLoginResponse(res);

  protected abstract passLoginInError(error);

  userLoginIn(postBody) {
    this.loadFlag = true;
    this.dataManager.auth(this._sigInUrl, postBody)
      .subscribe(
        res => {
          this.loadFlag = false;
          this.passLoginResponse(res);
        },
        error => {
          this.loadFlag = false;
          this.passLoginInError(error.error);
        }
      );
  }
}
