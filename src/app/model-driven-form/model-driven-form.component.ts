import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {
  orderSheet: FormGroup;
  weirdRequestsControls: FormArray;
  showWelcomeMessage = false;
  customerNameControl;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }
  buildForm() {
    this.orderSheet = this.formBuilder.group({
      customerName: this.formBuilder.control(null, [Validators.required, Validators.minLength(2)]),

      // size and bread radiobuttons
      size: this.formBuilder.control(null),
      bread: this.formBuilder.control(null),

      // weirdRequest Array builder
      weirdRequests: this.formBuilder.array([
        this.formBuilder.control(null)
      ]),

      specialitySandwiches: this.formBuilder.control(null),
      otherNotes: this.formBuilder.control(null),

      // Meat Section with checkbox
      meats: this.formBuilder.group({
        meatHam: this.formBuilder.control(null),
        meatTurkey: this.formBuilder.control(null),
        meatRoastBeef: this.formBuilder.control(null)
      }),

      //Cheese Section with checkbox
      cheeses: this.formBuilder.group({
        cheeseProvolone: this.formBuilder.control(null),
        cheeseCheddar: this.formBuilder.control(null),
        cheeseSwiss: this.formBuilder.control(null)
      }),

      // Veggie n Such Section with checkbox
      veggiesAndSuch: this.formBuilder.group({
        veggieLettuce: this.formBuilder.control(null),
        veggieTomato: this.formBuilder.control(null),
        veggieMustard: this.formBuilder.control(null)
      })
    });
    this.weirdRequestsControls = this.orderSheet.get('weirdRequests') as FormArray;

    // A cold observables that valueChanges hold to make use of showWelcome Message
    this.customerNameControl = this.orderSheet.get('customerName');
    this.customerNameControl.valueChanges
      .subscribe(value => {
        this.showWelcomeMessage = value && value.toLowerCase().trim() === 'ilesh';
      });
  }

  ngOnInit() {
  }
  onAddWeirdRequest() {
    this.weirdRequestsControls.push(this.formBuilder.control(null));
  }
  onRemoveWeirdRequest(index) {
    this.weirdRequestsControls.removeAt(index);
  }
  onResetForm() {
    this.orderSheet.reset();
  }
  onSubmitForm() {
    console.log(this.orderSheet.value);
  }

}
