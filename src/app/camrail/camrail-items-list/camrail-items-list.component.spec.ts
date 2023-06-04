import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamrailItemsListComponent } from './camrail-items-list.component';

describe('CamrailItemsListComponent', () => {
  let component: CamrailItemsListComponent;
  let fixture: ComponentFixture<CamrailItemsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamrailItemsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamrailItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
