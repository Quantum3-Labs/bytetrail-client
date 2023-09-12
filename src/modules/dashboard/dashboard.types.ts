import { AddressLike } from "ethers";

export interface AccountData {
  address: AddressLike;
  exchangeName: string; // Name of the exchange
  exchangeLink: string; // Link to the exchange
  frequency: number; // how many times was this account a final node in the search, despite of the layer depth
  link: string; // link to the account on explorer
}
