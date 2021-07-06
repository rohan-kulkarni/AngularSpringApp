import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PersonServiceService } from '../person-service.service';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {
  details:any[] = new Array();
  id: any;
  private routeSub: Subscription = new Subscription();
  constructor(private personService: PersonServiceService,private route: ActivatedRoute) { }
  ngOnInit(): void {
      this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      this.id = params['id'];
      console.log(this.id)
      this.personService.getById(this.id).subscribe((data:any)=>{
        console.log(data);
        data.phones.forEach((element: { type: String; number : BigInt;}) => {
          this.details.push(element);
        });
      })  
    });
    
  }

}
