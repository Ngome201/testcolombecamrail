import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamrailHomeComponent } from './camrail-home.component';

describe('CamrailHomeComponent', () => {
  let component: CamrailHomeComponent;
  let fixture: ComponentFixture<CamrailHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamrailHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamrailHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
