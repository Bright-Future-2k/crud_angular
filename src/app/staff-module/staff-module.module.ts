import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CreateComponent} from '../staff/create/create.component';
import {ListComponent} from '../staff/list/list.component';
import {EditComponent} from '../staff/edit/edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchComponent} from '../staff/search/search.component';

const routes: Routes = [
  {path: 'list', component: ListComponent},
  {path: 'create', component: CreateComponent},
  {path: 'edit/:id', component: EditComponent},
];

@NgModule({
  declarations: [CreateComponent, ListComponent, EditComponent, SearchComponent],
  exports: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class StaffModuleModule {
}
