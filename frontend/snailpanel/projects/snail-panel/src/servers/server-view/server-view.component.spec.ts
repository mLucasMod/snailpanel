import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerViewComponent } from './server-view.component';

describe('ServerViewComponent', () => {
  let component: ServerViewComponent;
  let fixture: ComponentFixture<ServerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServerViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
