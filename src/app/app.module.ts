import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { PersonalbudgetbuilderComponent } from './personalbudgetbuilder/personalbudgetbuilder.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    PersonalbudgetbuilderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
