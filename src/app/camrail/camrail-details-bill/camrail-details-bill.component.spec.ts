import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamrailDetailsBillComponent } from './camrail-details-bill.component';

describe('CamrailDetailsBillComponent', () => {
  let component: CamrailDetailsBillComponent;
  let fixture: ComponentFixture<CamrailDetailsBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamrailDetailsBillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamrailDetailsBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
