import { environment } from './../../../environments/environment';
import { Component } from "@angular/core";
import { SessionService } from "../../session.service";
import { IpfsService } from "../../services/ipfs.service";
import { BigNumber, ethers } from "ethers";
import { abi } from '../../abi/abi';

@Component({
  selector: "uploads",
  templateUrl: "./uploads.component.html"
})
export class UploadsComponent {
  displayStyle = "none";
  description = "";
  public fileBuffer: any;
  myFiles = [];
  constructor(private ipfsService: IpfsService, private sessionService: SessionService) {
    this.getUploads();
  }
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

  async getUploads() {
    let signer = this.sessionService.provider.getSigner(this.sessionService.currentUser.account);
    let contract = new ethers.Contract(environment.contract_address, abi.abi, signer);
    contract.functions.getMyFiles().then(data => {
      this.myFiles = data[0];
      console.log(this.myFiles)
      this.myFiles.forEach(e => {
        console.log(e[0].toNumber())
      })
    })

  }
  mint(uri) {
    let signer = this.sessionService.provider.getSigner(this.sessionService.currentUser.account);
    let contract = new ethers.Contract(environment.contract_address, abi.abi, signer);
    contract.mintItem(this.sessionService.currentUser.account, uri).then(data => {
      console.log(data);
    })
  }
  burn(tokenId) { }
}