import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamrailsListComponent } from './camrails-list.component';

describe('CamrailsListComponent', () => {
  let component: CamrailsListComponent;
  let fixture: ComponentFixture<CamrailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamrailsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamrailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
