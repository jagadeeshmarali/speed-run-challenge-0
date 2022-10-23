import { Injectable } from "@angular/core";
import { NFTStorage, File } from 'nft.storage/dist/bundle.esm.min.js'
import { environment } from "src/environments/environment";
const client = new NFTStorage({ token: environment.nft_storage_api_key })

@Injectable({
  providedIn: "root"
})
export class NFTStorageService {
  constructor() { }
  async upload(fileBuffer) {
    const metadata = await client.store({
      name: 'Pinpie',
      description: 'Pin is not delicious beef!',
      image: new File(
        [
          fileBuffer
        ],
        'pinpie.jpg',
        { type: 'image/jpg' }
      ),
    })
    // const client = create({ url: "https://ipfs.infura.io:5001/api/v0" });
    return metadata;
  }
}