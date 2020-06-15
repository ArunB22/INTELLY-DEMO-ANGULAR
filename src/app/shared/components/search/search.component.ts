import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() searchVariable;
  @Input() title;
  constructor() {
    this.searchVariable = new EventEmitter();

  }

  ngOnInit() {
  }


  getData(searchVar) {
    console.log(searchVar);
    this.searchVariable.emit(searchVar);
  }

}
