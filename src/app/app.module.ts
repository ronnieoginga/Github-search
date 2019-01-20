import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { LdPageComponent } from './ld-page/ld-page.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { SchComponent } from './sch/sch.component';
import { ServiceComponent } from './service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    LdPageComponent,
    RepositoriesComponent,
    SchComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
