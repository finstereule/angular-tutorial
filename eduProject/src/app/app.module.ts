import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HttpModule } from '@angular/http';
import { HoverDirective } from './hover.directive'
import {FormsModule} from "@angular/forms";
import {SearchPipe} from "./search.pipe";
import { HomepageComponent } from './homepage/homepage.component';
import { SetuppageComponent } from './setuppage/setuppage.component';
import {RouterModule} from "@angular/router";

const routes =[
{path: '', component: HomepageComponent},
{path: 'setup', component: SetuppageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HoverDirective,
    SearchPipe,
    HomepageComponent,
    SetuppageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
