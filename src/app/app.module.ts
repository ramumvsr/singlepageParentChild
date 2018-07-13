import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopNav } from './topnav/topnavcomponent';
import { ListComponent } from './list/listnav.component';
import { TitleBar } from './titlebar/titlebar.component'
import { AppComponent } from './app.component';
import { AppService } from './app.service';
const appRoutes: Routes = [
  { path: '', redirectTo: '/pages/page2', pathMatch: 'full' },
  { path: 'pages', loadChildren: './pages/pages.module#PagesModule' }

];
@NgModule({
  declarations: [
    AppComponent, ListComponent, TopNav, TitleBar
  ],
  imports: [

    BrowserModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
