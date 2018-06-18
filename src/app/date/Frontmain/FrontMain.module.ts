import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {RouterModule, Routes} from '@angular/router';
import {FrontMainComponent} from './FrontMain.component';
import {DateComponent} from '../containers/date.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {DateService} from '../date.service';


export const ROUTES: Routes = [
  { path: '', component:FrontMainComponent},
  { path: 'date', component: DateComponent },
];

@NgModule({
  declarations: [
    FrontMainComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)

  ],
  providers: [DateService],

})
export class FrontMainModule { }
