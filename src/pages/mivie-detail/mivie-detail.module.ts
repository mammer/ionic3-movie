import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MivieDetailPage } from './mivie-detail';

@NgModule({
  declarations: [
    MivieDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MivieDetailPage),
  ],
})
export class MivieDetailPageModule {}
