
export class ApiResponseWrapper<T> {
  data?: T[] = [];
  meta?: ResponseMetaData = new ResponseMetaData();
}

export class ResponseMetaData {
  include?: any[];
  custom?: any[];
  pagination?: ApiPagination = new ApiPagination();
}


export class ApiPagination {
  total?: number;
  count?: number;
  per_page?: number;
  page_num?: number;
  current_page?: number;
  total_pages?: number;
  links?: PaginationLinks = new PaginationLinks();
}

export class PaginationLinks {
  next?: string;
  previous?: string;
}
