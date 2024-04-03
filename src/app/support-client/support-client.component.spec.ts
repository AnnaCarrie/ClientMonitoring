import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportClientComponent } from './support-client.component';

describe('SupportClientComponent', () => {
  let component: SupportClientComponent;
  let fixture: ComponentFixture<SupportClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupportClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
