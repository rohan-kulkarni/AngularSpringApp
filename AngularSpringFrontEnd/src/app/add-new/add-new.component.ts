import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PersonServiceService } from '../person-service.service';
import { Person } from '../person/person';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {
  person:Person = {} as Person;
  editedperson:Person= {} as Person
  phones:any = [];
  constructor(private personService: PersonServiceService,private route: ActivatedRoute) { }
  id: any;
  private routeSub: Subscription = new Subscription();
  newAttribute: any = {};

  addFieldValue() {
    this.phones.push(this.newAttribute);
    this.newAttribute = {}; 
  }
  doSave(){
    this.person.phones=this.phones;
    this.personService.editPerson(this.person).subscribe((data)=>{
      alert("Data saved");
    })  
  }
  deleteFieldValue(index:any) {
      this.personService.deletePhone(this.person.phones[index].id).subscribe((data)=>{
        this.person.phones.splice(index, 1);
        alert("Data saved");
      })  
  }

  ngOnInit(): void {
  }

}
