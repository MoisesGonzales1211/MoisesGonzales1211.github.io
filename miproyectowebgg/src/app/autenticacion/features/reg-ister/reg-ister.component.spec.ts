import { ComponentFixture, TestBed } from '@angular/core/testing';

import  RegIsterComponent  from './reg-ister.component';

describe('RegIsterComponent', () => {
  let component: RegIsterComponent;
  let fixture: ComponentFixture<RegIsterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegIsterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegIsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
