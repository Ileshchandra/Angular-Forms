import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  template: '<div>'
  +'<span class="icon" *ngFor = "let s of maxItem">'
     +'<i [ngClass]=" s <= this.ratedCount ? \'filled\' :\'\'\ " class="fa fa-star"' 
        +'aria-hidden="true" (click)="toggleRating(s)"></i>'
  +'</span>'
+'</div>',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  @Input() max: number;
  @Output() onRating = new EventEmitter<Number>();
  
  maxItem : any[];
  ratedCount : number;
  
  constructor(){
      this.ratedCount = 0;
  }
  
  ngOnInit(){
      this.maxItem = [];
      for(var i=0;i<this.max;i++){
          this.maxItem.push(i+1);
      }
  }
  toggleRating(s:number){
       this.ratedCount = s;
       this.onRating.emit(this.ratedCount);
  }
 
 }
 
