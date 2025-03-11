import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnailToastComponent } from './toast.component';

describe('ToastComponent', () => {
  let component: SnailToastComponent;
  let fixture: ComponentFixture<SnailToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnailToastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnailToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
