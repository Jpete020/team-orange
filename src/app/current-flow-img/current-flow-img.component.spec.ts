import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentFlowImgComponent } from './current-flow-img.component';

describe('CurrentFlowImgComponent', () => {
  let component: CurrentFlowImgComponent;
  let fixture: ComponentFixture<CurrentFlowImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentFlowImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentFlowImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
