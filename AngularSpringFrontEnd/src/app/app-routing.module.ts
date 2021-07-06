import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewComponent } from './add-new/add-new.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { PersonComponent } from './person/person.component';
import { PhonesComponent } from './phones/phones.component';

const routes: Routes = [
  { path: '', component: PersonComponent },
  { path: 'details/:id', component: PhonesComponent },
  { path: 'edit/:id', component: EditPersonComponent },
  { path: 'edit', component: EditPersonComponent },
  { path: 'new', component: AddNewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
