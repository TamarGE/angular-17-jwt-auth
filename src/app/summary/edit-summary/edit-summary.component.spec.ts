import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSummaryComponent } from './edit-summary.component';

describe('EditSummaryComponent', () => {
  let component: EditSummaryComponent;
  let fixture: ComponentFixture<EditSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
