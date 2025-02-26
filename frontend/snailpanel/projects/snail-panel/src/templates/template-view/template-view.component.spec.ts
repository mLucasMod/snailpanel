import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateViewComponent } from './template-view.component';

describe('TemplateViewComponent', () => {
  let component: TemplateViewComponent;
  let fixture: ComponentFixture<TemplateViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
