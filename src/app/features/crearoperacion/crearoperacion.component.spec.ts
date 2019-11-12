import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearoperacionComponent } from './crearoperacion.component';

describe('CrearoperacionComponent', () => {
  let component: CrearoperacionComponent;
  let fixture: ComponentFixture<CrearoperacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearoperacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearoperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
