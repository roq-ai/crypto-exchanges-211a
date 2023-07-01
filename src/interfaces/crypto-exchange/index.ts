import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface CryptoExchangeInterface {
  id?: string;
  name: string;
  country: string;
  fees: string;
  spot_availability: boolean;
  derivatives_availability: boolean;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface CryptoExchangeGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  country?: string;
  fees?: string;
  organization_id?: string;
}
