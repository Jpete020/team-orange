import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverablesComponent } from './deliverables.component';

describe('DeliverablesComponent', () => {
  let component: DeliverablesComponent;
  let fixture: ComponentFixture<DeliverablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliverablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliverablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
