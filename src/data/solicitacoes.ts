export type SolicitacaoStatus = 'em_andamento' | 'finalizada' | 'pendente' | 'interrompida' | 'cancelada';

export interface Solicitacao {
  id: string;
  protocolo: string;
  descricao: string;
  data: string;
  status: SolicitacaoStatus;
  addressId: string;
}

export const solicitacoesData: Solicitacao[] = [
  // Address 1-1 (Rua Augusta, 1500)
  {
    id: '1',
    protocolo: '2025110847293',
    descricao: 'Emissão de 2ª via de fatura',
    data: '2025-11-28',
    status: 'em_andamento',
    addressId: '1-1',
  },
  {
    id: '2',
    protocolo: '2025110632841',
    descricao: 'Alteração de titularidade',
    data: '2025-11-15',
    status: 'finalizada',
    addressId: '1-1',
  },
  {
    id: '3',
    protocolo: '2025100958274',
    descricao: 'Contestação de leitura do hidrômetro',
    data: '2025-10-22',
    status: 'pendente',
    addressId: '1-1',
  },
  // Address 1-2 (Av. Paulista, 1000)
  {
    id: '4',
    protocolo: '2025100743215',
    descricao: 'Parcelamento de débitos',
    data: '2025-10-10',
    status: 'finalizada',
    addressId: '1-2',
  },
  {
    id: '5',
    protocolo: '2025090582147',
    descricao: 'Solicitação de religação',
    data: '2025-09-18',
    status: 'em_andamento',
    addressId: '1-2',
  },
  // Address 1-3 (Rua Oscar Freire, 800)
  {
    id: '6',
    protocolo: '2025090321684',
    descricao: 'Emissão de 2ª via de fatura',
    data: '2025-09-05',
    status: 'finalizada',
    addressId: '1-3',
  },
  {
    id: '7',
    protocolo: '2025080794521',
    descricao: 'Solicitação de vistoria técnica',
    data: '2025-08-20',
    status: 'pendente',
    addressId: '1-3',
  },
  // Address 1-4 (Alameda Santos, 500)
  {
    id: '8',
    protocolo: '2025080412365',
    descricao: 'Atualização cadastral de endereço',
    data: '2025-08-08',
    status: 'finalizada',
    addressId: '1-4',
  },
  // Address 2-1 (Av. Brasil, 2000)
  {
    id: '9',
    protocolo: '2025070654321',
    descricao: 'Mudança de categoria de consumo',
    data: '2025-07-15',
    status: 'interrompida',
    addressId: '2-1',
  },
  {
    id: '10',
    protocolo: '2025070123456',
    descricao: 'Emissão de 2ª via de fatura',
    data: '2025-07-02',
    status: 'finalizada',
    addressId: '2-1',
  },
  // Address 2-2 (Avenida Principal, 250) - 31 solicitations
  {
    id: '11',
    protocolo: '2025060987654',
    descricao: 'Parcelamento de débitos',
    data: '2025-06-20',
    status: 'cancelada',
    addressId: '2-2',
  },
  {
    id: '15',
    protocolo: '2024010123456',
    descricao: 'Emissão de 2ª via de fatura',
    data: '2024-01-10',
    status: 'finalizada',
    addressId: '2-2',
  },
  {
    id: '16',
    protocolo: '2024020234567',
    descricao: 'Verificação de vazamento interno',
    data: '2024-02-15',
    status: 'finalizada',
    addressId: '2-2',
  },
  {
    id: '17',
    protocolo: '2024030345678',
    descricao: 'Contestação de leitura do hidrômetro',
    data: '2024-03-20',
    status: 'em_andamento',
    addressId: '2-2',
  },
  {
    id: '18',
    protocolo: '2024040456789',
    descricao: 'Troca de hidrômetro',
    data: '2024-04-05',
    status: 'finalizada',
    addressId: '2-2',
  },
  {
    id: '19',
    protocolo: '2024050567890',
    descricao: 'Solicitação de tarifa social',
    data: '2024-05-12',
    status: 'pendente',
    addressId: '2-2',
  },
  {
    id: '20',
    protocolo: '2024060678901',
    descricao: 'Análise de qualidade da água',
    data: '2024-06-18',
    status: 'finalizada',
    addressId: '2-2',
  },
  {
    id: '21',
    protocolo: '2024070789012',
    descricao: 'Atualização de dados cadastrais',
    data: '2024-07-25',
    status: 'finalizada',
    addressId: '2-2',
  },
  {
    id: '22',
    protocolo: '2024080890123',
    descricao: 'Reclamação de cobrança indevida',
    data: '2024-08-02',
    status: 'interrompida',
    addressId: '2-2',
  },
  {
    id: '23',
    protocolo: '2024090901234',
    descricao: 'Solicitação de religação',
    data: '2024-09-10',
    status: 'finalizada',
    addressId: '2-2',
  },
  {
    id: '24',
    protocolo: '2024100012345',
    descricao: 'Emissão de 2ª via de fatura',
    data: '2024-10-15',
    status: 'finalizada',
    addressId: '2-2',
  },
  {
    id: '25',
    protocolo: '2024110123456',
    descricao: 'Alteração de titularidade',
    data: '2024-11-20',
    status: 'pendente',
    addressId: '2-2',
  },
  {
    id: '26',
    protocolo: '2024120234567',
    descricao: 'Mudança de categoria de consumo',
    data: '2024-12-05',
    status: 'cancelada',
    addressId: '2-2',
  },
  {
    id: '27',
    protocolo: '2025010345678',
    descricao: 'Solicitação de vistoria técnica',
    data: '2025-01-08',
    status: 'finalizada',
    addressId: '2-2',
  },
  {
    id: '28',
    protocolo: '2025020456789',
    descricao: 'Ligação nova de água',
    data: '2025-02-12',
    status: 'em_andamento',
    addressId: '2-2',
  },
  {
    id: '29',
    protocolo: '2025030567890',
    descricao: 'Verificação de vazamento interno',
    data: '2025-03-18',
    status: 'finalizada',
    addressId: '2-2',
  },
  {
    id: '30',
    protocolo: '2025040678901',
    descricao: 'Atualização cadastral de endereço',
    data: '2025-04-22',
    status: 'interrompida',
    addressId: '2-2',
  },
  {
    id: '31',
    protocolo: '2025050789012',
    descricao: 'Contestação de leitura do hidrômetro',
    data: '2025-05-05',
    status: 'finalizada',
    addressId: '2-2',
  },
  {
    id: '32',
    protocolo: '2025070890123',
    descricao: 'Emissão de 2ª via de fatura',
    data: '2025-07-10',
    status: 'em_andamento',
    addressId: '2-2',
  },
  {
    id: '33',
    protocolo: '2025080901234',
    descricao: 'Troca de hidrômetro',
    data: '2025-08-15',
    status: 'pendente',
    addressId: '2-2',
  },
  {
    id: '34',
    protocolo: '2025090012345',
    descricao: 'Análise de qualidade da água',
    data: '2025-09-20',
    status: 'finalizada',
    addressId: '2-2',
  },
  {
    id: '35',
    protocolo: '2025100123456',
    descricao: 'Solicitação de tarifa social',
    data: '2025-10-02',
    status: 'interrompida',
    addressId: '2-2',
  },
  {
    id: '36',
    protocolo: '2025110234567',
    descricao: 'Reclamação de cobrança indevida',
    data: '2025-11-08',
    status: 'em_andamento',
    addressId: '2-2',
  },
  {
    id: '37',
    protocolo: '2024010111111',
    descricao: 'Solicitação de religação',
    data: '2024-01-25',
    status: 'finalizada',
    addressId: '2-2',
  },
  {
    id: '38',
    protocolo: '2024030222222',
    descricao: 'Atualização de dados cadastrais',
    data: '2024-03-08',
    status: 'finalizada',
    addressId: '2-2',
  },
  {
    id: '39',
    protocolo: '2024050333333',
    descricao: 'Ligação nova de água',
    data: '2024-05-28',
    status: 'cancelada',
    addressId: '2-2',
  },
  {
    id: '40',
    protocolo: '2024070444444',
    descricao: 'Emissão de 2ª via de fatura',
    data: '2024-07-12',
    status: 'finalizada',
    addressId: '2-2',
  },
  {
    id: '41',
    protocolo: '2024090555555',
    descricao: 'Solicitação de vistoria técnica',
    data: '2024-09-25',
    status: 'pendente',
    addressId: '2-2',
  },
  {
    id: '42',
    protocolo: '2024110666666',
    descricao: 'Mudança de categoria de consumo',
    data: '2024-11-05',
    status: 'interrompida',
    addressId: '2-2',
  },
  {
    id: '43',
    protocolo: '2025010777777',
    descricao: 'Verificação de vazamento interno',
    data: '2025-01-22',
    status: 'em_andamento',
    addressId: '2-2',
  },
  {
    id: '44',
    protocolo: '2025030888888',
    descricao: 'Alteração de titularidade',
    data: '2025-03-05',
    status: 'pendente',
    addressId: '2-2',
  },
  // Address 3-1 (Rua XV de Novembro, 100)
  {
    id: '12',
    protocolo: '2025050147258',
    descricao: 'Contestação de leitura do hidrômetro',
    data: '2025-05-10',
    status: 'finalizada',
    addressId: '3-1',
  },
  // Address 4-1 (Av. Getúlio Vargas, 500)
  {
    id: '13',
    protocolo: '2025040369258',
    descricao: 'Solicitação de vistoria técnica',
    data: '2025-04-05',
    status: 'em_andamento',
    addressId: '4-1',
  },
  // Address 5-1 (Rua Sete de Setembro, 200)
  {
    id: '14',
    protocolo: '2025030741852',
    descricao: 'Emissão de 2ª via de fatura',
    data: '2025-03-18',
    status: 'finalizada',
    addressId: '5-1',
  },
];

export const getStatusLabel = (status: SolicitacaoStatus): string => {
  const labels: Record<SolicitacaoStatus, string> = {
    em_andamento: 'Em andamento',
    finalizada: 'Finalizada',
    pendente: 'Pendente',
    interrompida: 'Interrompida',
    cancelada: 'Cancelada',
  };
  return labels[status];
};

export const getStatusClass = (status: SolicitacaoStatus): string => {
  const classes: Record<SolicitacaoStatus, string> = {
    em_andamento: 'status-pendente', // warning color
    finalizada: 'status-finalizada',
    pendente: 'status-pendente',
    interrompida: 'status-cancelada', // error color
    cancelada: 'status-cancelada',
  };
  return classes[status];
};

export const getStatusDotColor = (status: SolicitacaoStatus): string => {
  const colors: Record<SolicitacaoStatus, string> = {
    em_andamento: 'bg-pending', // warning color
    finalizada: 'bg-paid',
    pendente: 'bg-pending',
    interrompida: 'bg-[hsl(var(--overdue))]', // error color
    cancelada: 'bg-[hsl(var(--overdue))]',
  };
  return colors[status];
};
