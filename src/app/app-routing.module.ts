import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // {
  //   path: "", pathMatch:"full", redirectTo:"/home" 
  // },
  // {
  //   path: " ", component: AppComponent
  // },
  // {
  //   path: "register", component: RegistrationComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
