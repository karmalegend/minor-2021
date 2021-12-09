import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormsPage } from './dynamic-forms.page';

describe('DynamicFormsPage', () => {
  let component: DynamicFormsPage;
  let fixture: ComponentFixture<DynamicFormsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFormsPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
