# Transformar em Portal Imobiliário de Volume

## Visão geral

Hoje o app gerencia **UM fornecimento por vez**. A proposta do portal imobiliário é inverter isso: a imobiliária vê **todos os imóveis** num só lugar, entende o panorama financeiro do portfólio e paga várias contas de uma só vez, sem ter que entrar em cada endereço.

A mudança vai partir dos dados de demo já existentes. Conceito:

- **Empresa / cliente** → imobiliária ou administradora de condomínios.
- **Endereço / fornecimento** → imóvel / unidade alugada / condomínio.
- **Faturas** → contas de água/luz/condomínio vinculadas a cada imóvel.

## Etapas propostas

### 1. Ajustar a navegação e a identidade

- Renomear o menu lateral e cabeçalho para linguagem imobiliária.
- Adicionar nova página **"Imóveis"** entre Início e Faturas.

### 2. Criar o modelo mental de portfólio

- Manter a estrutura atual de `Company` e `Address` no contexto de demonstração.
- Adaptar `SelectionContext` para além de um único endereço selecionado:
  - manter `selectedAddress` (para drill-down);
  - adicionar `selectedAddresses` / `allAddressesSelected` para ações em lote;
  - adicionar helpers: `getAllAddresses`, `getAddressesByCompany`, `getAddressById`.
- Atualizar os dados de demo para refletir imobiliária: condomínios, prédios, casas, apartamentos, status de inquilino/vazio, etc.

### 3. Redesenhar o Início (dashboard de portfólio)

Objetivo: chegar na página e enxergar a situação de **todos** os imóveis, não só do atual selecionado.

- Cards de resumo do portfólio:
  - Total de imóveis.
  - Imóveis com contas em atraso.
  - Valor total em aberto no portfólio.
  - Valor a vencer nos próximos 30 dias.
- Manter o gráfico de consumo, mas agregando por mês ou permitindo alternar por imóvel. Melhorar visual do consumo e deixá-lo mais adequado ao contexto.
- Substituir a lista de "últimas faturas" por uma lista de **imóveis com pendências** (destacando os piores casos).
- Manter ações rápidas: "Solicitações de serviços" e "Preços e prazos".

### 4. Página de Imóveis (novo)

- Listar todos os imóveis da imobiliária em uma tabela/cards.
- Colunas: endereço, status, inquilino, contas em aberto, próximo vencimento, ações.
- Filtros: cidade, status, com/sem atraso, valor de aluguel, etc.
- Permitir favoritar e selecionar múltiplos imóveis para ações em lote (pagar contas de todos selecionados, exportar relatório).
- Clicar em um imóvel leva ao drill-down antigo (Início / Faturas filtrado por aquele imóvel).

### 5. Transformar a página de Faturas para volume

- Por padrão, mostrar **faturas de todos os imóveis** do cliente, não só do endereço selecionado.
- Manter os filtros já existentes (data, situação) e adicionar:
  - filtro por imóvel / endereço (multi-select);
  - busca por endereço ou número de contrato.
- Manter a seleção em lote e a barra inferior de ações, mas agora:
  - botão principal: **"Pagar selecionadas"**;
  - exportar relatório consolidado.
- Ajustar o fluxo de pagamento (PaymentFlow / Checkout) para receber faturas de vários imóveis e mostrar um resumo por imóvel.

### 6. Ajustar Solicitações e Serviços

- Página de Solicitações passa a mostrar solicitações de **todos os imóveis** por padrão, com filtro por imóvel.
- Página de Serviços ganha ações voltadas à imobiliária (ex: serviços listados no website [https://www.sabesp.com.br/servicos/para-empresa/imobiliarias](https://www.sabesp.com.br/servicos/para-empresa/imobiliarias)).

### 7. Ajustar o cabeçalho e seletores

- No topo, manter o seletor de empresa/imobiliária.
- Substituir o seletor de "endereço" por um seletor de **imóvel atual** com opção "Todos os imóveis".
- Quando "Todos os imóveis" estiver ativo, o dashboard mostra dados agregados.
- Quando um imóvel específico estiver ativo, o comportamento vira o atual (single view).

## Cronograma sugerido (do menor para o maior impacto)

1. Rebrand e novos labels.
2. Criar a página "Imóveis" com listagem e filtros.
3. Adaptar o contexto para trabalhar com todos os imóveis.
4. Redesenhar o Início para dashboard de portfólio.
5. Ajustar Faturas para mostrar todas as contas e pagamento em lote.
6. Ajustar Solicitações e Serviços.

## O que não será feito agora (sem dados reais)

- Integração com banco ou API externa. Tudo continua com os dados de demonstração, adaptados para a nova linguagem.
- Autenticação de múltiplos usuários. Trabalharemos com o cliente/empresa atual.

## Decisão imediata

Por onde quer começar? Recomendo a **Etapa 2 + Etapa 3**: abrir o dashboard para portfólio primeiro. Assim o valor central ("ver todos os imóveis de uma vez") fica visível imediatamente, e depois refinamos as páginas de Faturas e Imóveis.