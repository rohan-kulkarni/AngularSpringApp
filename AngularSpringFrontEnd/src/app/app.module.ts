import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PhonesComponent } from './phones/phones.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { FormsModule } from '@angular/forms';
import { AddNewComponent } from './add-new/add-new.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PhonesComponent,
    EditPersonComponent,
    AddNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
