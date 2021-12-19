import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivOverviewComponent } from './civ-overview.component';

describe('CivOverviewComponent', () => {
  let component: CivOverviewComponent;
  let fixture: ComponentFixture<CivOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CivOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
