export class Person {
    fname:String;
    lname:String;
    id:BigInt;
    phones:any[]
    constructor(fname:String,lname:String,id:BigInt,phones:any[]) {
        this.fname =fname;
        this.lname =lname;
        this.id =id;
        this.phones = phones;
    }
  }