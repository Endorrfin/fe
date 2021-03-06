import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MaterialTableComponent} from "./pages/material-table/material-table.component";

const routes: Routes = [
  {
    path: 'materialtable',
    component: MaterialTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
