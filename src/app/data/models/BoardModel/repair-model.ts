import {BaseModel} from '../BaseModel/base.model';

export class RepairModel extends BaseModel {
  id?: string;
  mName?: string;
  description?: string;
  status?:String;
}
