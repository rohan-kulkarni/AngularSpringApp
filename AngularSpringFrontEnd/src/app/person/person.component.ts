import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PersonServiceService } from '../person-service.service';
import { Person } from './person';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  person:Person[] = new Array();
  filter = new FormControl('');
  constructor(private personService: PersonServiceService,private route: ActivatedRoute) { }
  id: any;
  private routeSub: Subscription = new Subscription();
  delete(id:any){
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      this.personService.deletePerson(id).subscribe((data:any)=>{

        alert("deleted");
        window.location.reload();
      })  
    });
  }
  ngOnInit(): void {
    this.personService.getAll().subscribe((data:any)=>{
      data.forEach((element: { fname: String; lname: String; id: BigInt; phones:any[] }) => {
        var p = new Person(element.fname,element.lname,element.id,element.phones);
        this.person.push(p);
      });
    })  
  }

}
