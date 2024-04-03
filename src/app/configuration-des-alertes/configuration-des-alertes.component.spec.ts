import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationDesAlertesComponent } from './configuration-des-alertes.component';

describe('ConfigurationDesAlertesComponent', () => {
  let component: ConfigurationDesAlertesComponent;
  let fixture: ComponentFixture<ConfigurationDesAlertesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigurationDesAlertesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfigurationDesAlertesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
