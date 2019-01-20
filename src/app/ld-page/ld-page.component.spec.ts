import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LdPageComponent } from './ld-page.component';

describe('LdPageComponent', () => {
  let component: LdPageComponent;
  let fixture: ComponentFixture<LdPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LdPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
