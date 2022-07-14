import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllNFTSComponent } from './components/all-nfts/all-nfts.component';
import { UploadsComponent } from './components/uploads/uploads.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "all-nfts",
    pathMatch: "full"
  },
  {
    path: "all-nfts",
    component: AllNFTSComponent,
    pathMatch: "full"
  },
  {
    path: "uploads",
    component: UploadsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
