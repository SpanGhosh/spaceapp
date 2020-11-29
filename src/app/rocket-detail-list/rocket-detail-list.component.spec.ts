import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketDetailListComponent } from './rocket-detail-list.component';

describe('RocketDetailListComponent', () => {
  let component: RocketDetailListComponent;
  let fixture: ComponentFixture<RocketDetailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocketDetailListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
