import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamrailNewBillComponent } from './camrail-new-bill.component';

describe('CamrailNewBillComponent', () => {
  let component: CamrailNewBillComponent;
  let fixture: ComponentFixture<CamrailNewBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamrailNewBillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamrailNewBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
