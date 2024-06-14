import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPersonneComponent } from './form-personne.component';

describe('FormPersonneComponent', () => {
  let component: FormPersonneComponent;
  let fixture: ComponentFixture<FormPersonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPersonneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
