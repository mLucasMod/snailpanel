import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnailApiComponent } from './snail-api.component';

describe('SnailApiComponent', () => {
  let component: SnailApiComponent;
  let fixture: ComponentFixture<SnailApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnailApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnailApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
