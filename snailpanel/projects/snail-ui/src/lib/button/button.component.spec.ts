import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnailButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: SnailButtonComponent;
  let fixture: ComponentFixture<SnailButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnailButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnailButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
