import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      customerName: this.fb.control('', Validators.required),
      OrderNumber: this.fb.control('', Validators.required),
      OrderDate: this.fb.control('', Validators.required),
      itemRow: this.fb.array([this.builditem()])
    })
  }

  builditem(): FormGroup {
    return this.fb.group({
      itemName: this.fb.control(null),
      quantity: this.fb.control(0),
      price: this.fb.control(0),
      amount: this.fb.control(0)
    });
  }




  additem(): void {
    this.itemRow.push(this.builditem());
  }

  removeitem(index): void {
    this.itemRow.removeAt(index);
  }

  ngOnInit() {
  }
  get itemRow(): FormArray {
    return this.form.get('itemRow') as FormArray;
  }
  get customerName() {
    return this.form.get('customerName');
  }

  get OrderNumber() {
    return this.form.get('OrderNumber');
  }

  get OrderDate() {
    return this.form.get('OrderDate');
  }
}
