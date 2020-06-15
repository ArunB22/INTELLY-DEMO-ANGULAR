import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {MatIconModule} from '@angular/material';
import {MaterialModule} from '../material/material.module';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataManagerService} from './services/dataManger/data-manager.service';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {NavigationBarComponent} from './components/navigation-bar/navigation-bar.component';
import {SearchComponent} from './components/search/search.component';
import {LoadingButtonComponent} from './components/loading-button/loading-button.component';
import {BsDropdownModule} from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
  ],
  declarations: [ToolbarComponent, NavigationBarComponent, SearchComponent, LoadingButtonComponent],
  exports: [
    ToolbarComponent,
    NavigationBarComponent,
    SearchComponent,
    LoadingButtonComponent,
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [DataManagerService]
    };
  }
}
