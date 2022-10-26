import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLibComponent } from './main-lib.component';

describe('MainLibComponent', () => {
  let component: MainLibComponent;
  let fixture: ComponentFixture<MainLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
