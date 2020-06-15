import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionExpiredHandlerComponent } from './session-expired-handler.component';

describe('SessionExpiredHandlerComponent', () => {
  let component: SessionExpiredHandlerComponent;
  let fixture: ComponentFixture<SessionExpiredHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionExpiredHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionExpiredHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
