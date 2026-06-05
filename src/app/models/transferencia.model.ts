export interface TransferenciaDTO {
  contaOrigem: string;
  contaDestino: string;
  valorTransferencia: number;
  dataTransferencia: string;
}

export interface AgendamentoRetorno {
  id: number;
  contaOrigem: string;
  contaDestino: string;
  valorTransferencia: number;
  valorTaxa: number;
  valorTotalTransferencia: number;
  dataTransferencia: string;
  dataAgendamento: string;
}
