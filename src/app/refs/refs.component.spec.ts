import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefsComponent } from './refs.component';

describe('RefsComponent', () => {
  let component: RefsComponent;
  let fixture: ComponentFixture<RefsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});