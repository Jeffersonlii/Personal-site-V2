import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageExpComponent } from './page-exp/page-exp.component';

const routes: Routes = [
  {
    path: '',
   component: PageAboutComponent,
   children: [
      {
        path: 'about',
        component: PageAboutComponent
      }
    ]
  },
  {
    path: 'exp',
    component: PageExpComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const pageComponents = [PageAboutComponent, PageExpComponent] 