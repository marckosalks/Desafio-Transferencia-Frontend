# 💸 Desafio Transferência — Frontend

Interface web para agendamento e consulta de transferências bancárias, desenvolvida como desafio técnico para a **Tokio Marine**.

---

## 🚀 Tecnologias

| Tecnologia | Versão |
|---|---|
| Angular | 21.x |
| TypeScript | 5.9 |
| ngx-mask | 21.x |
| ngx-toastr | 20.x |
| RxJS | 7.8 |

---

## 📋 Pré-requisitos

- **Node.js** `>= 18`
- **npm** `>= 11`
- **Angular CLI** `>= 21`
- **Backend** rodando em `http://localhost:8080`

Instale o Angular CLI globalmente (caso não tenha):
```bash
npm install -g @angular/cli
```

---

## ⚙️ Como rodar

### 1. Instalar as dependências

```bash
npm install
```

### 2. Iniciar o servidor de desenvolvimento

```bash
npm start
# ou
ng serve
```

A aplicação estará disponível em: **http://localhost:4200**

> ⚠️ O backend precisa estar rodando em `http://localhost:8080` antes de usar a aplicação.

---

## 🗂️ Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   └── header/          # Cabeçalho global com navegação
│   ├── models/
│   │   └── transferencia.model.ts  # Interfaces TypeScript (TransferenciaDTO, AgendamentoRetorno)
│   ├── pages/
│   │   ├── home/            # Página inicial com carrossel
│   │   ├── agendar/         # Formulário de agendamento de transferência
│   │   └── consultar-agendamento/  # Tabela com todos os agendamentos
│   ├── service/
│   │   └── transferencia-service.ts  # Serviço HTTP (GET e POST)
│   ├── app.config.ts        # Providers globais (HttpClient, Toastr, Mask, Router)
│   └── app.routes.ts        # Definição de rotas
└── styles.css               # Estilos globais
```

---

## 🌐 Rotas

| Rota | Componente | Descrição |
|---|---|---|
| `/home` | `Home` | Página inicial com carrossel |
| `/agendar` | `Agendar` | Formulário para agendar nova transferência |
| `/consultar-agendamento` | `ConsultarAgendamento` | Listagem de todos os agendamentos |
| `/**` | — | Redireciona para `/home` |

---

## 📡 Integração com o Backend

Base URL: `http://localhost:8080/v1/transferencia`

### `POST /v1/transferencia` — Agendar transferência

**Body:**
```json
{
  "contaOrigem": "01038890-2",
  "contaDestino": "01038890-4",
  "valorTransferencia": 10.0,
  "dataTransferencia": "2026-07-02"
}
```

**Regras de validação (frontend):**
- Contas no formato `XXXXXXXX-X` (8 dígitos + hífen + 1 dígito = 10 caracteres)
- Valor mínimo de `R$ 0,01`
- Data de transferência obrigatória

---

### `GET /v1/transferencia` — Consultar todos os agendamentos

**Resposta esperada:**
```json
[
  {
    "id": 1,
    "contaOrigem": "22223333-3",
    "contaDestino": "33333333-3",
    "valorTransferencia": 1000.00,
    "valorTaxa": 12.00,
    "valorTotalTransferencia": 1012.00,
    "dataTransferencia": "2026-06-15",
    "dataAgendamento": "2026-06-05"
  }
]
```

---

## 📦 Scripts disponíveis

```bash
npm start        # Servidor de desenvolvimento (localhost:4200)
npm run build    # Build de produção
npm run watch    # Build em modo watch (desenvolvimento)
npm test         # Executa os testes com Vitest
```

---

## ✅ Funcionalidades

- [x] Formulário reativo de agendamento com **Reactive Forms**
- [x] Máscara de campo para contas bancárias (`XXXXXXXX-X`) via **ngx-mask**
- [x] Máscara de valor monetário (`R$ 0,00`) via **ngx-mask**
- [x] Validação de formulário com feedback visual
- [x] Notificações de sucesso e erro via **ngx-toastr**
- [x] Exibição das mensagens de erro retornadas pelo backend no toast
- [x] Listagem de todos os agendamentos com formatação de moeda e data
- [x] Layout responsivo com tema escuro (dark mode)
- [x] Header fixo com navegação entre páginas

---

## 🎨 Design

A interface utiliza um tema **dark (preto e branco/cinza)** com os seguintes destaques de cor:

- **Botão Agendar:** `#00826b` (verde)
- **Botão Extrato:** `#C5AA4D` (dourado)

Tipografia: **Inter** (Google Fonts)
