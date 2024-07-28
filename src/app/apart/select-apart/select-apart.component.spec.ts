import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectApartComponent } from './select-apart.component';

describe('SelectApartComponent', () => {
  let component: SelectApartComponent;
  let fixture: ComponentFixture<SelectApartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectApartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectApartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
