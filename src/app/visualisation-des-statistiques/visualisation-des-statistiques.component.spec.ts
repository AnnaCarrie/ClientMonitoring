import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualisationDesStatistiquesComponent } from './visualisation-des-statistiques.component';

describe('VisualisationDesStatistiquesComponent', () => {
  let component: VisualisationDesStatistiquesComponent;
  let fixture: ComponentFixture<VisualisationDesStatistiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualisationDesStatistiquesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualisationDesStatistiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
