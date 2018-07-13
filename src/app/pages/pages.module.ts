import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Page1 } from './page1/page1component';
import { Page2 } from './page2/page2component';
import { SubPage1 } from './page1/subPage1'
import { Page3 } from './page3/page3component';
import { WelcomPage } from './page2/welcomepage/welcomepage.component';

import { Page4 } from './page4/page4component';
import { AuthService } from './page2/auth.service';

import { Page5 } from './page5/page5component';
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
 
  { path: 'login', component: WelcomPage },
  { path: 'page1', component: Page1 },
  { path: 'page2', component: Page2 },
  { path: 'page3', component: Page3 },
  { path: 'page4', component: Page4 },
  { path: 'page5', component: Page5 },
   { path: '', redirectTo:'pages/page2' , pathMatch: 'full'},

];
@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(appRoutes)

  ],
  declarations: [
    Page1, Page2, Page3, Page4, Page5, SubPage1, WelcomPage
  ],
  providers: [AuthService]
})
export class PagesModule { }
