import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeExtraComponent } from './home-extra.component';

describe('HomeExtraComponent', () => {
  let component: HomeExtraComponent;
  let fixture: ComponentFixture<HomeExtraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeExtraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
