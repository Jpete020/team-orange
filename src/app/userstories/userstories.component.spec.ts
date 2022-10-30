import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserstoriesComponent } from './userstories.component';

describe('UserstoriesComponent', () => {
  let component: UserstoriesComponent;
  let fixture: ComponentFixture<UserstoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserstoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserstoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
