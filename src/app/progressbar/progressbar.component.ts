import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({

  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']

})
export class ProgressbarComponent implements OnInit {
  @Input() from: number = 0;
  @Input() to: number = 100;
  @Input() backgroundColor: string = '#ddd';
  @Input() value: number = 0;

  @Output() valueChange = new EventEmitter();



  constructor() {

  }

  ngOnInit(): void {

  }

  //document:click to bind with click outside component.
  @HostListener("document:click")
  onClickEvent() {
    if (this.value + this.from <= this.to - 10) {
      this.value = this.value + 10;
    } else {
      this.value = this.to - this.from;
    }
  }

  onValueChange(newValue: number) {
    this.value = newValue;
    this.valueChange.emit(newValue);
  }

  onMouseOver() {
    let interval = setInterval(() => {
      this.value = this.value + 10;
      if (this.value + this.from >= this.to) {
        clearInterval(interval);
        this.value = this.to - this.from;
      }
    }, 50);
  }
}

