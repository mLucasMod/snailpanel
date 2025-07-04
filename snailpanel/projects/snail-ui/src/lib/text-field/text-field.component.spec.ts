import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnailInputComponent } from './input.component';

describe('InputComponent', () => {
  let component: SnailInputComponent;
  let fixture: ComponentFixture<SnailInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnailInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnailInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
