import { Injectable } from "@angular/core";
import { ethers } from "ethers";
import Identicon from "identicon.js";
import { User } from "./interfaces";

declare const window: any;


@Injectable({
  providedIn: "root"
})
export class SessionService {
  accounts: string[] = [];
  currentUser: User = null;
  provider = new ethers.providers.Web3Provider(window.ethereum);
  constructor() { }
  async getAccounts() {
    this.accounts = await this.provider.listAccounts();
  }
  async getBalance(address: string) {
    let balanceObj = await this.provider.getBalance(address)
    return Number(parseFloat(ethers.utils.formatEther(balanceObj)).toFixed(3))
  }
  async fetchCurrentUser(address: string) {
    this.currentUser = {
      account: address,
      balance: await this.getBalance(address),
      identicon: "data:image/png;base64," + new Identicon(this.accounts[0], 30).toString()
    }
    console.log(this.currentUser);
  }
}