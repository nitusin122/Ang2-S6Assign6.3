import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Person } from './Models/Person';

@Component({
    selector: 'person-root',
    templateUrl: './Views/person-app.component.html',
    styleUrls: ['./person-app.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})

export class PersonComponent implements OnInit{
    //Binding Logic
    personObj: Person = new Person();
    submitted:boolean = false;

    ngOnInit() {
        /** Assign values to the variable after OnInit */
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        
        this.personObj.title = "";
        this.personObj.firstName = "Anupama";
        this.personObj.lastName = "Sen";
        
    }
    
    /**Get Person Name */
   getName(title,first,last)
   {
        this.submitted = true;
        this.personObj = {
            firstName: first,
            lastName: last,
            title: title
        }
        console.log(`Hi My name is ${title} ${first} ${last}`)
  }
}