import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSectionExampleComponent } from './list-section-example.component';

describe('ListSectionExampleComponent', () => {
  let component: ListSectionExampleComponent;
  let fixture: ComponentFixture<ListSectionExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSectionExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSectionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
