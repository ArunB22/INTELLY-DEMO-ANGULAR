import {environment} from '../../../environments/environment';
import {SearchFilters} from '../../data/models/Filters/searchFilters/search-filter.model';

export class AppConstants {
  /*base urls for backend services*/
  public static namePattern = '^[a-zA-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$';
  public static BASE_URL = environment.base_url;
  /*service name for backend services*/
  public static SERVICE_NAME_REGISTER = '/register';
  public static SERVICE_NAME_LOGIN = '/login';
  public static SERVICE_NAME_REPAIRS = '/getRepairs';

  /*snackbar classes*/
  public static SNACK_BAR_SUCESS_CLASS = 'snackbar-success';
  public static SNACK_BAR_ERROR_CLASS = 'snackbar-error';
  public static SNACK_BAR_WARNING_CLASS = 'snackbar-warning';
  public static STORAGE_KEY_USER_EMAIL = 'current_user_email';
  public static STORAGE_KEY_USER_ID = 'current_user_id';
  public static boardSearchFilters: SearchFilters[] = [{name: 'Name', filter: 'name:', id: 'name'}];

  public static getSearchFilter(type: string): SearchFilters[] {
    let filter = [];
    switch (type) {
      case 'board':
        filter = this.boardSearchFilters;
        break;
    }
    return filter;
  }

}

