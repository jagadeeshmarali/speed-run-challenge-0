import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './shared';
import { AllNFTSComponent } from './components/all-nfts/all-nfts.component';
import { UploadsComponent } from './components/uploads/uploads.component';

@NgModule({
  declarations: [
    AppComponent,
    AllNFTSComponent,
    UploadsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
