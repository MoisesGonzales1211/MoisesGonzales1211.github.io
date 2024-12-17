import { ComponentFixture, TestBed } from '@angular/core/testing';

import  LoGinComponent  from './lo-gin.component';

describe('LoGinComponent', () => {
  let component: LoGinComponent;
  let fixture: ComponentFixture<LoGinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoGinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoGinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
