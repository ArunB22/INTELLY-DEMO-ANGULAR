import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-loading-button',
  templateUrl: './loading-button.component.html',
  styleUrls: ['./loading-button.component.css']
})
export class LoadingButtonComponent implements OnInit {
@Input()class: string;
@Input()text: string;
@Input() disable: boolean;
@Input() Loadingflag: boolean;
@Output() buttonClick: EventEmitter<void> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
