import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZooiPage } from './zooi.page';

describe('ZooiPage', () => {
  let component: ZooiPage;
  let fixture: ComponentFixture<ZooiPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZooiPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZooiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
