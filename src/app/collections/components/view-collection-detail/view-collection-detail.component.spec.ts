import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCollectionDetailComponent } from './view-collection-detail.component';

describe('ViewCollectionDetailComponent', () => {
  let component: ViewCollectionDetailComponent;
  let fixture: ComponentFixture<ViewCollectionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCollectionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCollectionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
