import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToysFactoryComponent } from './toys-factory.component';

describe('ToysFactoryComponent', () => {
  let component: ToysFactoryComponent;
  let fixture: ComponentFixture<ToysFactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToysFactoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToysFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
