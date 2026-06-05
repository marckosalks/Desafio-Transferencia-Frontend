import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective } from 'ngx-mask';
import { TransferenciaService } from '../../service/transferencia-service';
import { TransferenciaDTO } from '../../models/transferencia.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agendar',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    NgxMaskDirective
  ],
  templateUrl: './agendar.html',
  styleUrl: './agendar.css',
})
export class Agendar implements OnInit {
  transferenciaForm!: FormGroup;

  taxaDescricao = 'Preencha os campos acima';
  taxaValor = '—';

  erroTaxa = false;
  mensagemErro = '';

  constructor(
    private fb: FormBuilder,
    private transferenciaService: TransferenciaService,
    private toastr: ToastrService
  ) { }


  ngOnInit(): void {
    this.transferenciaForm = this.fb.group({
      contaOrigem: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]],
      contaDestino: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]],
      valor: [null, [
        Validators.required,
        Validators.min(0.01)
      ]],
      dataTransferencia: ['', Validators.required]
    });
  }

  agendar(): void {
    if (this.transferenciaForm.valid) {
      const formValue = this.transferenciaForm.value;


      const payload: TransferenciaDTO = {
        contaOrigem: formValue.contaOrigem,
        contaDestino: formValue.contaDestino,
        valorTransferencia: Number(formValue.valor),
        dataTransferencia: formValue.dataTransferencia
      };


      this.transferenciaService.agendar(payload).subscribe({
        next: (response) => {
          this.toastr.success('Sua transferência foi agendada com sucesso!', 'Sucesso');
          this.transferenciaForm.reset();
        },
        error: (error) => {

          const msg = error?.error?.message || (typeof error?.error === 'string' ? error.error : 'Erro ao realizar agendamento.');
          this.toastr.error(msg, 'Erro');
          this.erroTaxa = true;
          this.mensagemErro = msg;
        }
      });
    }
  }
}
