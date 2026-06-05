import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarAgendamento } from './consultar-agendamento';

describe('ConsultarAgendamento', () => {
  let component: ConsultarAgendamento;
  let fixture: ComponentFixture<ConsultarAgendamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarAgendamento],
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultarAgendamento);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
