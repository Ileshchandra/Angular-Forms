import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  form: FormGroup;
  constructor(fb: FormBuilder) { 
    this.form = fb.group({
      productName:['',Validators.required],
      productId:['',Validators.compose([Validators.required,Validators.minLength(5)]) ],
      price:['',Validators.compose([Validators.required,Validators.min(0)])],
    })
  }

  ngOnInit() {
  }

  submitForm(){
    console.log(this.form.value);
  }
  get productName(){
    return this.form.get('productName');
  }

  get productId(){
    return this.form.get('productId');
  }

  get price(){
    return this.form.get('price');
  }

}
