import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {DateComponent} from './date/containers/date.component';
import {RouterModule, Routes} from '@angular/router';
//import {FrontMainModule} from './Frontmain/FrontMain.module';
import {FrontMainComponent} from './date/Frontmain/FrontMain.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {DateService} from './date/date.service';


export const ROUTES: Routes = [
  { path: '', component:FrontMainComponent},
  { path: 'date', component: DateComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    FrontMainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)

  ],
  providers: [DateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
