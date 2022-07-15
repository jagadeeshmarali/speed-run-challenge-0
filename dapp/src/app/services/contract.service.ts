import { Injectable } from "@angular/core";
import { ethers } from "ethers";

declare const window: any;

@Injectable({
  providedIn: "root"
})
export class ContractService {

  provider = new ethers.providers.Web3Provider(window.ethereum);

}