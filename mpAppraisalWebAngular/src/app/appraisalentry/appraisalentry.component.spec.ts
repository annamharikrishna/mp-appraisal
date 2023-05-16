import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppraisalentryComponent } from './appraisalentry.component';

describe('AppraisalentryComponent', () => {
  let component: AppraisalentryComponent;
  let fixture: ComponentFixture<AppraisalentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppraisalentryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppraisalentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
