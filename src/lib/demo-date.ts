// Data de referência do protótipo.
// As faturas mockadas vão até dez/2025 e o status (em aberto / vencendo / em atraso)
// é calculado comparando com "hoje". Para o demo mostrar uma mistura realista
// independentemente da data real, fixamos "hoje" no período dos dados (10/11/2025).
//
// Para voltar ao comportamento real, troque por:
//   export const getDemoToday = () => new Date();
export const DEMO_TODAY = new Date(2025, 10, 10); // mês 10 = novembro
export const getDemoToday = () => new Date(DEMO_TODAY);
