import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalDesAccesComponent } from './journal-des-acces.component';

describe('JournalDesAccesComponent', () => {
  let component: JournalDesAccesComponent;
  let fixture: ComponentFixture<JournalDesAccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JournalDesAccesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JournalDesAccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
