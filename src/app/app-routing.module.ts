import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadAllComponent } from './components/read-all/read-all.component';
import { FinishedComponent } from './components/finished/finished.component';
import { CreateComponent } from './components/create/create.component';

const routes: Routes = [
  {
    path: '',
    component: ReadAllComponent
  },
  {
    path: 'finished',
    component: FinishedComponent
  },
  {
    path: 'create',
    component: CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
