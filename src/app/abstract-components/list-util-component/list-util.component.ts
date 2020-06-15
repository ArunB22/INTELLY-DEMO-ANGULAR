

import {BaseComponent} from '../base-component/base-component';
import {SearchFilters} from '../../data/models/Filters/searchFilters/search-filter.model';

export abstract class ListUtil extends BaseComponent {
  protected orderBy: string;
  sortedBy: string;
  protected searchFilterList: SearchFilters[];
  searchText: string;
  page_count_api_call: number;
  disablePrev: boolean;
  disableNext: boolean;
  disableLast: boolean;
  disableFirst: boolean;
  perPage: number;
  pageNo: number;
  totalNoOfRecords: number;
  current_status: string;

}
