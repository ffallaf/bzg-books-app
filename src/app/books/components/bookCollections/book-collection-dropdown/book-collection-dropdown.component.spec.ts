import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCollectionDropdownComponent } from './book-collection-dropdown.component';

describe('BookCollectionDropdownComponent', () => {
  let component: BookCollectionDropdownComponent;
  let fixture: ComponentFixture<BookCollectionDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCollectionDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCollectionDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
