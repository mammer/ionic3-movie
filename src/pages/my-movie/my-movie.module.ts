import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyMoviePage } from './my-movie';

@NgModule({
  declarations: [
    MyMoviePage,
  ],
  imports: [
    IonicPageModule.forChild(MyMoviePage),
  ],
})
export class MyMoviePageModule {}
