import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyseDesSecuritesComponent } from './analyse-des-securites.component';

describe('AnalyseDesSecuritesComponent', () => {
  let component: AnalyseDesSecuritesComponent;
  let fixture: ComponentFixture<AnalyseDesSecuritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyseDesSecuritesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalyseDesSecuritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
