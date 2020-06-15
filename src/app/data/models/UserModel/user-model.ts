export class UserModel {
  id?: number;
  user_id?: number;
  organization?: string;
  pincode?: number;
  phone_1?: number;
  phone_2?: number;
  address_1?: string;
  address_2?: string;
  is_active?: boolean;
  is_enabled?: boolean;
  in_house?: boolean;
  is_preferred?: boolean;
  created_at?: Date;
  updated_at?: Date;
}
