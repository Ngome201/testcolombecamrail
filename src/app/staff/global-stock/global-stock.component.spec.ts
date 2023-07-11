import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalStockComponent } from './global-stock.component';

describe('GlobalStockComponent', () => {
  let component: GlobalStockComponent;
  let fixture: ComponentFixture<GlobalStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
