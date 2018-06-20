import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validator, Validators} from '@angular/forms';
import { student } from '../data-model';
import { states} from '../data-model';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent  {
  //name= new FormControl()  (we  will use this when there is no group while 
  //grouping the control we havet o use the below syntax)
  //student = new FormGroup ({
    //name : new FormControl()
  //})
  
  student1 : FormGroup; // <--- student1 is of type FormGroup

  constructor(private fb: FormBuilder) { // <--- inject FormBuilder
    this.createForm();
  }

  createForm() {
    this.student1= this.fb.group({   //parent form group
      name: ['', Validators.required, Validators.name ],// <--- the FormControl called "name"
      address : this.fb.group // nested form group (child)
      ({street: '',
      city: '',
      state: '',
      zip: '',  }), 
      extraSubject: '',
      check: '',

    });
  }
}

/*FormBuilder.group is a factory method that creates a FormGroup.   FormBuilder.group takes an object whose keys and values are FormControl names and their definitions. In this example, the name control is defined by its initial data value, an empty string.
Defining a group of controls in a single object makes your code more compact and readable because you don't have to write repeated new FormControl(...) statements. */