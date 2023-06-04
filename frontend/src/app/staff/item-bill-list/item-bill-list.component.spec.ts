import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBillListComponent } from './item-bill-list.component';

describe('ItemBillListComponent', () => {
  let component: ItemBillListComponent;
  let fixture: ComponentFixture<ItemBillListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemBillListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemBillListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
