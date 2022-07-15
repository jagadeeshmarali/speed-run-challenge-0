import { environment } from './../../../environments/environment';
import { Component } from "@angular/core";
import { SessionService } from "../../session.service";
import { IpfsService } from "../../services/ipfs.service";
import { ethers } from "ethers";
import { abi } from '../../abi/abi';

@Component({
  selector: "uploads",
  templateUrl: "./uploads.component.html"
})
export class UploadsComponent {
  displayStyle = "none";
  description = "";
  public fileBuffer: any;
  constructor(private ipfsService: IpfsService, private sessionService: SessionService) { }
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
  async handleFileInput(files: FileList) {
    const reader = new FileReader();
    reader.readAsArrayBuffer(files[0]);
    reader.onload = (e) => {
      this.fileBuffer = Buffer.from(reader.result);
    }
  }
  async upload() {
    let ipfsData = await this.ipfsService.upload(this.fileBuffer);
    console.log(ipfsData);
    console.log(this.sessionService.currentUser.account);
    let signer = this.sessionService.provider.getSigner(this.sessionService.currentUser.account);
    let contract = new ethers.Contract(environment.contract_address, abi.abi, signer);
    contract.functions.uploadFile(ipfsData.cid.toString(), "text.txt", ipfsData.size, "text/plain", this.description).then(data => {
      console.log(data);
    });

  }
}