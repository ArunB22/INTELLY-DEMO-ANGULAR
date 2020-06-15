import { Component, OnInit } from '@angular/core';
import {BaseComponent} from '../../../abstract-components/base-component/base-component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bad-api-request',
  templateUrl: './bad-api-request.component.html',
  styleUrls: ['./bad-api-request.component.css']
})
export class BadApiRequestComponent extends BaseComponent implements OnInit {

  constructor(router: Router) {
    super();
    this.router = router;
  }

  ngOnInit() {
  }

}
