import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StreamingComponent } from './streaming/streaming.component';

const routes: Routes = [

  { path: "", redirectTo: "home", pathMatch: "full" },

  { path: "live", component: StreamingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
