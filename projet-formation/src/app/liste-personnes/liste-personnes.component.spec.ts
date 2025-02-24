import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePersonnesComponent } from './liste-personnes.component';

describe('ListePersonnesComponent', () => {
  let component: ListePersonnesComponent;
  let fixture: ComponentFixture<ListePersonnesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListePersonnesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListePersonnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
