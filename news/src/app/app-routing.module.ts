import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentpageComponent } from './contentpage/contentpage.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'content/:contimg/:contpara/:contheading/:contlike/:contdislike/:conttime',
    component:ContentpageComponent
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'**',
    redirectTo:'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
