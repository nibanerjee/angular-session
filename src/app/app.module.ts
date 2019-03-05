import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AppComponent } from './app.component';
import {NilanjanAppComponent} from './nilanjan.component';
import {ChildComponent} from './child.component';
import {SiblingComponent} from './sibling.component';
import {AnotherChildComponent} from './another-child.component';
import {DataService} from './data.service';

const appRoutes: Routes = [
  {path: 'sibling', component: SiblingComponent},
  {path: '**', component: NilanjanAppComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NilanjanAppComponent,
    ChildComponent,
    SiblingComponent,
    AnotherChildComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
