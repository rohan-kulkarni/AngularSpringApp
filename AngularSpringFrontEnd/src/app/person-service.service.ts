import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from './person/person';

@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {

  constructor(private httpClient: HttpClient) { }
  public editPerson(person:Person){
    return this.httpClient.put("phones/edit",person,{responseType: 'text'});
  }
  public deletePerson(id:any){
    return this.httpClient.delete("phones/delete/id?id="+id,{responseType: 'text'});
  }
  public deletePhone(id:any){
    console.log(id)
    return this.httpClient.delete("phones/delete/phone/id?id="+id,{responseType: 'text'});
  }
  public getAll(){
    return this.httpClient.get("phones/");
  }
  public getById(id:any){
    console.log(id)
    return this.httpClient.get("phones/id?id="+id);
  }
}
