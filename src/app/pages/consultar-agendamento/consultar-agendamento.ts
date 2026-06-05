import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TransferenciaService } from '../../service/transferencia-service';
import { AgendamentoRetorno } from '../../models/transferencia.model';

@Component({
  standalone: true,
  selector: 'app-consultar-agendamento',
  imports: [CommonModule, RouterLink],
  templateUrl: './consultar-agendamento.html',
  styleUrl: './consultar-agendamento.css',
})
export class ConsultarAgendamento implements OnInit {
  agendamentos: AgendamentoRetorno[] = [];

  constructor(
    private transferenciaService: TransferenciaService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.carregarAgendamentos();
  }

  carregarAgendamentos(): void {
    this.transferenciaService.consultarAgendamento().subscribe({
      next: (dados) => {
        this.agendamentos = [...dados];
        this.cdr.detectChanges();
      },
      error: (erro) => {
        console.error('Erro ao buscar agendamentos:', erro);
      }
    });
  }
}
