import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnailUiComponent } from './snail-ui.component';

describe('SnailUiComponent', () => {
  let component: SnailUiComponent;
  let fixture: ComponentFixture<SnailUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnailUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnailUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
