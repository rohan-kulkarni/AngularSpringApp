import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { isConstructSignatureDeclaration, isElementAccessChain } from 'typescript';
import { PersonServiceService } from '../person-service.service';
import { Person } from '../person/person';
import { PhonesComponent } from '../phones/phones.component';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})

export class EditPersonComponent implements OnInit {
  person:Person = {} as Person;
  editedperson:Person= {} as Person
  constructor(private personService: PersonServiceService,private route: ActivatedRoute) { }
  id: any;
  private routeSub: Subscription = new Subscription();
  newAttribute: any = {};

  addFieldValue() {
    this.newAttribute["id"] = this.person.phones.length ;
    this.person.phones.push(this.newAttribute);
    this.newAttribute = {};
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
  onKey(event: any) {
    var x = event.target.id;
    if(!isNaN(x)){
      this.person.phones[x].number = event.target.value;
    }else{
      if(x==="fname")
        this.person.fname = event.target.value;
      else 
      this.person.lname = event.target.value;
    }
  }


  public doEdit(){
    this.personService.editPerson(this.person).subscribe((data)=>{
      alert("Data saved");
    })  
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      this.id = params['id'];
      this.personService.getById(this.id).subscribe((data:any)=>{
        console.log(data)
        this.person=new Person(data["fname"],data["lname"],this.id,data["phones"]);
      })  
    });
  }

}
