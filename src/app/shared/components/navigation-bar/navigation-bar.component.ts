import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../../../abstract-components/base-component/base-component';
import {Router} from '@angular/router';
import {AppConstants} from '../../constants/app-constants';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent extends BaseComponent{
}
