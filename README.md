# Sistema de Gestão de Condomínio

Levantamento de Requisitos

1. Gestão de Usuários
2. Gestão de Unidades
3. Gestão de ativos da unidade(moradores,veículos, pets...) 
4. Mural de Avisos
5. Documentos
6. Reserva das areas comuns(piscina, churrasqueira, salão de festas, lista negra de datas, horários disponíveis)
7. Achados e perdidos
8. Livro de ocorrências
9. Boletos

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
