import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditApartComponent } from './edit-apart.component';

describe('EditApartComponent', () => {
  let component: EditApartComponent;
  let fixture: ComponentFixture<EditApartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditApartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditApartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
