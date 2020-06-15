import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadApiRequestComponent } from './bad-api-request.component';

describe('BadApiRequestComponent', () => {
  let component: BadApiRequestComponent;
  let fixture: ComponentFixture<BadApiRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadApiRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadApiRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
