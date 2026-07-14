export type PropertyType = "apartamento" | "casa" | "comercial" | "condominio" | "galpao";

export interface Property { id: string; street: string; city: string; fornecimento: string; }

export interface Company { id: string; name: string; cnpj: string; tipo: PropertyType; fornecimentosCount: number; isFavorite: boolean; properties: Property[]; }

export const companiesData: Company[] = [
  {
    "id": "1",
    "name": "Residencial Alto da Lapa",
    "cnpj": "92.824.001/0001-35",
    "tipo": "apartamento",
    "fornecimentosCount": 2,
    "isFavorite": false,
    "properties": [
      {
        "id": "1-1",
        "street": "Rua Estevão Pedroso, 545 - Apto 117",
        "city": "São Paulo/SP",
        "fornecimento": "72505567"
      },
      {
        "id": "1-2",
        "street": "Rua Estevão Pedroso, 489 - Apto 79",
        "city": "São Paulo/SP",
        "fornecimento": "67586602"
      }
    ]
  },
  {
    "id": "2",
    "name": "Edifício Villa Lobos",
    "cnpj": "14.093.750/0001-05",
    "tipo": "apartamento",
    "fornecimentosCount": 2,
    "isFavorite": false,
    "properties": [
      {
        "id": "2-1",
        "street": "Alameda Santos, 765 - Apto 85",
        "city": "São Paulo/SP",
        "fornecimento": "64074816"
      },
      {
        "id": "2-2",
        "street": "Alameda Santos, 1907 - Apto 133",
        "city": "São Paulo/SP",
        "fornecimento": "51086476"
      }
    ]
  },
  {
    "id": "3",
    "name": "Condomínio Parque dos Ipês",
    "cnpj": "46.686.608/0001-53",
    "tipo": "condominio",
    "fornecimentosCount": 5,
    "isFavorite": false,
    "properties": [
      {
        "id": "3-1",
        "street": "Avenida Brigadeiro, 68 - Bloco C",
        "city": "São Paulo/SP",
        "fornecimento": "96654522"
      },
      {
        "id": "3-2",
        "street": "Avenida Brigadeiro, 490 - Bloco C",
        "city": "São Paulo/SP",
        "fornecimento": "91021427"
      },
      {
        "id": "3-3",
        "street": "Avenida Brigadeiro, 407 - Bloco B",
        "city": "São Paulo/SP",
        "fornecimento": "08080717"
      },
      {
        "id": "3-4",
        "street": "Avenida Brigadeiro, 1103 - Bloco B",
        "city": "São Paulo/SP",
        "fornecimento": "67643679"
      },
      {
        "id": "3-5",
        "street": "Avenida Brigadeiro, 155 - Bloco C",
        "city": "São Paulo/SP",
        "fornecimento": "55888803"
      }
    ]
  },
  {
    "id": "4",
    "name": "Conjunto Comercial Berrini",
    "cnpj": "51.763.024/0001-71",
    "tipo": "comercial",
    "fornecimentosCount": 1,
    "isFavorite": false,
    "properties": [
      {
        "id": "4-1",
        "street": "Rua da Liberdade, 46 - Sala 15",
        "city": "São Paulo/SP",
        "fornecimento": "70161101"
      }
    ]
  },
  {
    "id": "5",
    "name": "Residencial Jardim das Acácias",
    "cnpj": "63.096.926/0001-49",
    "tipo": "apartamento",
    "fornecimentosCount": 2,
    "isFavorite": false,
    "properties": [
      {
        "id": "5-1",
        "street": "Avenida Ibirapuera, 888 - Apto 195",
        "city": "São Paulo/SP",
        "fornecimento": "16195735"
      },
      {
        "id": "5-2",
        "street": "Avenida Ibirapuera, 484 - Apto 108",
        "city": "São Paulo/SP",
        "fornecimento": "41678088"
      }
    ]
  },
  {
    "id": "6",
    "name": "Edifício Monte Azul",
    "cnpj": "33.343.042/0001-77",
    "tipo": "apartamento",
    "fornecimentosCount": 2,
    "isFavorite": false,
    "properties": [
      {
        "id": "6-1",
        "street": "Rua Haddock Lobo, 130 - Apto 145",
        "city": "São Paulo/SP",
        "fornecimento": "90160926"
      },
      {
        "id": "6-2",
        "street": "Rua Haddock Lobo, 1868 - Apto 48",
        "city": "São Paulo/SP",
        "fornecimento": "91832035"
      }
    ]
  },
  {
    "id": "7",
    "name": "Condomínio Vista Verde",
    "cnpj": "79.309.739/0001-85",
    "tipo": "condominio",
    "fornecimentosCount": 8,
    "isFavorite": false,
    "properties": [
      {
        "id": "7-1",
        "street": "Rua da Liberdade, 604 - Bloco A",
        "city": "São Paulo/SP",
        "fornecimento": "28129238"
      },
      {
        "id": "7-2",
        "street": "Rua da Liberdade, 1642 - Bloco C",
        "city": "São Paulo/SP",
        "fornecimento": "09366334"
      },
      {
        "id": "7-3",
        "street": "Rua da Liberdade, 1857 - Bloco C",
        "city": "São Paulo/SP",
        "fornecimento": "05317367"
      },
      {
        "id": "7-4",
        "street": "Rua da Liberdade, 1271 - Bloco C",
        "city": "São Paulo/SP",
        "fornecimento": "94810333"
      },
      {
        "id": "7-5",
        "street": "Rua da Liberdade, 1548 - Bloco B",
        "city": "São Paulo/SP",
        "fornecimento": "88780397"
      },
      {
        "id": "7-6",
        "street": "Rua da Liberdade, 1772 - Bloco B",
        "city": "São Paulo/SP",
        "fornecimento": "44067367"
      },
      {
        "id": "7-7",
        "street": "Rua da Liberdade, 244 - Bloco B",
        "city": "São Paulo/SP",
        "fornecimento": "58209986"
      },
      {
        "id": "7-8",
        "street": "Rua da Liberdade, 736 - Bloco A",
        "city": "São Paulo/SP",
        "fornecimento": "99963231"
      }
    ]
  },
  {
    "id": "8",
    "name": "Vila Madalena Lofts",
    "cnpj": "20.180.294/0001-84",
    "tipo": "apartamento",
    "fornecimentosCount": 1,
    "isFavorite": false,
    "properties": [
      {
        "id": "8-1",
        "street": "Rua Oscar Freire, 369 - Apto 46",
        "city": "São Paulo/SP",
        "fornecimento": "92429966"
      }
    ]
  },
  {
    "id": "9",
    "name": "Galpão Logístico Anhanguera",
    "cnpj": "54.576.797/0001-79",
    "tipo": "galpao",
    "fornecimentosCount": 3,
    "isFavorite": false,
    "properties": [
      {
        "id": "9-1",
        "street": "Rua Cardeal Arcoverde, 528 - Galpão",
        "city": "São Paulo/SP",
        "fornecimento": "98756587"
      },
      {
        "id": "9-2",
        "street": "Rua Cardeal Arcoverde, 1363 - Galpão",
        "city": "São Paulo/SP",
        "fornecimento": "87701097"
      },
      {
        "id": "9-3",
        "street": "Rua Cardeal Arcoverde, 1859 - Galpão",
        "city": "São Paulo/SP",
        "fornecimento": "85390877"
      }
    ]
  },
  {
    "id": "10",
    "name": "Residencial Portal do Sol",
    "cnpj": "77.555.573/0001-67",
    "tipo": "apartamento",
    "fornecimentosCount": 2,
    "isFavorite": false,
    "properties": [
      {
        "id": "10-1",
        "street": "Rua da Liberdade, 1279 - Apto 86",
        "city": "São Paulo/SP",
        "fornecimento": "95903936"
      },
      {
        "id": "10-2",
        "street": "Rua da Liberdade, 442 - Apto 41",
        "city": "São Paulo/SP",
        "fornecimento": "86685811"
      }
    ]
  },
  {
    "id": "11",
    "name": "Edifício Aurora",
    "cnpj": "56.575.119/0001-16",
    "tipo": "apartamento",
    "fornecimentosCount": 1,
    "isFavorite": false,
    "properties": [
      {
        "id": "11-1",
        "street": "Rua Augusta, 578 - Apto 167",
        "city": "São Paulo/SP",
        "fornecimento": "42240401"
      }
    ]
  },
  {
    "id": "12",
    "name": "Condomínio Bosque Real",
    "cnpj": "32.993.948/0001-13",
    "tipo": "condominio",
    "fornecimentosCount": 5,
    "isFavorite": false,
    "properties": [
      {
        "id": "12-1",
        "street": "Avenida Ibirapuera, 1351 - Bloco A",
        "city": "São Paulo/SP",
        "fornecimento": "31558425"
      },
      {
        "id": "12-2",
        "street": "Avenida Ibirapuera, 1364 - Bloco A",
        "city": "São Paulo/SP",
        "fornecimento": "06005314"
      },
      {
        "id": "12-3",
        "street": "Avenida Ibirapuera, 937 - Bloco C",
        "city": "São Paulo/SP",
        "fornecimento": "84274191"
      },
      {
        "id": "12-4",
        "street": "Avenida Ibirapuera, 1214 - Bloco B",
        "city": "São Paulo/SP",
        "fornecimento": "28358991"
      },
      {
        "id": "12-5",
        "street": "Avenida Ibirapuera, 882 - Bloco A",
        "city": "São Paulo/SP",
        "fornecimento": "74972549"
      }
    ]
  },
  {
    "id": "13",
    "name": "Conjunto Comercial Faria Lima",
    "cnpj": "77.368.178/0001-18",
    "tipo": "comercial",
    "fornecimentosCount": 3,
    "isFavorite": false,
    "properties": [
      {
        "id": "13-1",
        "street": "Rua da Liberdade, 725 - Sala 9",
        "city": "São Paulo/SP",
        "fornecimento": "74671781"
      },
      {
        "id": "13-2",
        "street": "Rua da Liberdade, 23 - Sala 36",
        "city": "São Paulo/SP",
        "fornecimento": "02373857"
      },
      {
        "id": "13-3",
        "street": "Rua da Liberdade, 1609 - Sala 17",
        "city": "São Paulo/SP",
        "fornecimento": "43004900"
      }
    ]
  },
  {
    "id": "14",
    "name": "Residencial Bem Viver",
    "cnpj": "75.104.809/0001-12",
    "tipo": "apartamento",
    "fornecimentosCount": 1,
    "isFavorite": false,
    "properties": [
      {
        "id": "14-1",
        "street": "Avenida Rebouças, 1606 - Apto 203",
        "city": "São Paulo/SP",
        "fornecimento": "27749964"
      }
    ]
  },
  {
    "id": "15",
    "name": "Edifício Horizonte",
    "cnpj": "48.988.551/0001-99",
    "tipo": "apartamento",
    "fornecimentosCount": 2,
    "isFavorite": false,
    "properties": [
      {
        "id": "15-1",
        "street": "Alameda Santos, 50 - Apto 92",
        "city": "São Paulo/SP",
        "fornecimento": "90703975"
      },
      {
        "id": "15-2",
        "street": "Alameda Santos, 1893 - Apto 214",
        "city": "São Paulo/SP",
        "fornecimento": "32076904"
      }
    ]
  },
  {
    "id": "16",
    "name": "Condomínio Águas Claras",
    "cnpj": "22.107.417/0001-39",
    "tipo": "condominio",
    "fornecimentosCount": 7,
    "isFavorite": false,
    "properties": [
      {
        "id": "16-1",
        "street": "Avenida Faria Lima, 1895 - Bloco C",
        "city": "São Paulo/SP",
        "fornecimento": "69708513"
      },
      {
        "id": "16-2",
        "street": "Avenida Faria Lima, 445 - Bloco A",
        "city": "São Paulo/SP",
        "fornecimento": "31025801"
      },
      {
        "id": "16-3",
        "street": "Avenida Faria Lima, 251 - Bloco B",
        "city": "São Paulo/SP",
        "fornecimento": "24229431"
      },
      {
        "id": "16-4",
        "street": "Avenida Faria Lima, 420 - Bloco A",
        "city": "São Paulo/SP",
        "fornecimento": "04191602"
      },
      {
        "id": "16-5",
        "street": "Avenida Faria Lima, 614 - Bloco A",
        "city": "São Paulo/SP",
        "fornecimento": "06623851"
      },
      {
        "id": "16-6",
        "street": "Avenida Faria Lima, 101 - Bloco B",
        "city": "São Paulo/SP",
        "fornecimento": "08937078"
      },
      {
        "id": "16-7",
        "street": "Avenida Faria Lima, 1066 - Bloco A",
        "city": "São Paulo/SP",
        "fornecimento": "48207993"
      }
    ]
  },
  {
    "id": "17",
    "name": "Vila dos Pássaros",
    "cnpj": "57.452.534/0001-45",
    "tipo": "casa",
    "fornecimentosCount": 1,
    "isFavorite": false,
    "properties": [
      {
        "id": "17-1",
        "street": "Avenida Brigadeiro, 1142",
        "city": "São Paulo/SP",
        "fornecimento": "92381872"
      }
    ]
  },
  {
    "id": "18",
    "name": "Galpão Industrial Interlagos",
    "cnpj": "10.603.190/0001-76",
    "tipo": "galpao",
    "fornecimentosCount": 1,
    "isFavorite": false,
    "properties": [
      {
        "id": "18-1",
        "street": "Rua das Flores, 1005 - Galpão",
        "city": "São Paulo/SP",
        "fornecimento": "96255107"
      }
    ]
  },
  {
    "id": "19",
    "name": "Residencial Novo Horizonte",
    "cnpj": "74.234.744/0001-57",
    "tipo": "apartamento",
    "fornecimentosCount": 2,
    "isFavorite": false,
    "properties": [
      {
        "id": "19-1",
        "street": "Avenida Rebouças, 1432 - Apto 142",
        "city": "São Paulo/SP",
        "fornecimento": "34150311"
      },
      {
        "id": "19-2",
        "street": "Avenida Rebouças, 714 - Apto 97",
        "city": "São Paulo/SP",
        "fornecimento": "07166537"
      }
    ]
  },
  {
    "id": "20",
    "name": "Edifício Central Park",
    "cnpj": "02.838.750/0001-36",
    "tipo": "apartamento",
    "fornecimentosCount": 1,
    "isFavorite": false,
    "properties": [
      {
        "id": "20-1",
        "street": "Avenida Brigadeiro, 1186 - Apto 104",
        "city": "São Paulo/SP",
        "fornecimento": "28168146"
      }
    ]
  },
  {
    "id": "21",
    "name": "Condomínio Terra Nova",
    "cnpj": "91.479.686/0001-20",
    "tipo": "condominio",
    "fornecimentosCount": 2,
    "isFavorite": false,
    "properties": [
      {
        "id": "21-1",
        "street": "Rua das Flores, 1581 - Bloco A",
        "city": "São Paulo/SP",
        "fornecimento": "46271255"
      },
      {
        "id": "21-2",
        "street": "Rua das Flores, 423 - Bloco C",
        "city": "São Paulo/SP",
        "fornecimento": "03337607"
      }
    ]
  },
  {
    "id": "22",
    "name": "Conjunto Comercial Paulista",
    "cnpj": "96.808.316/0001-90",
    "tipo": "comercial",
    "fornecimentosCount": 2,
    "isFavorite": false,
    "properties": [
      {
        "id": "22-1",
        "street": "Rua Augusta, 64 - Sala 12",
        "city": "São Paulo/SP",
        "fornecimento": "53063292"
      },
      {
        "id": "22-2",
        "street": "Rua Augusta, 1645 - Sala 71",
        "city": "São Paulo/SP",
        "fornecimento": "61416195"
      }
    ]
  },
  {
    "id": "23",
    "name": "Residencial das Palmeiras",
    "cnpj": "84.751.516/0001-71",
    "tipo": "apartamento",
    "fornecimentosCount": 1,
    "isFavorite": false,
    "properties": [
      {
        "id": "23-1",
        "street": "Alameda Santos, 992 - Apto 122",
        "city": "São Paulo/SP",
        "fornecimento": "37471077"
      }
    ]
  },
  {
    "id": "24",
    "name": "Edifício Solar das Flores",
    "cnpj": "11.526.638/0001-47",
    "tipo": "apartamento",
    "fornecimentosCount": 2,
    "isFavorite": false,
    "properties": [
      {
        "id": "24-1",
        "street": "Rua das Flores, 490 - Apto 18",
        "city": "São Paulo/SP",
        "fornecimento": "60932131"
      },
      {
        "id": "24-2",
        "street": "Rua das Flores, 854 - Apto 15",
        "city": "São Paulo/SP",
        "fornecimento": "50662998"
      }
    ]
  },
  {
    "id": "25",
    "name": "Condomínio Nova Esperança",
    "cnpj": "79.576.044/0001-45",
    "tipo": "condominio",
    "fornecimentosCount": 7,
    "isFavorite": false,
    "properties": [
      {
        "id": "25-1",
        "street": "Avenida Paulista, 212 - Bloco C",
        "city": "São Paulo/SP",
        "fornecimento": "33102893"
      },
      {
        "id": "25-2",
        "street": "Avenida Paulista, 1500 - Bloco A",
        "city": "São Paulo/SP",
        "fornecimento": "23611110"
      },
      {
        "id": "25-3",
        "street": "Avenida Paulista, 1436 - Bloco B",
        "city": "São Paulo/SP",
        "fornecimento": "78012971"
      },
      {
        "id": "25-4",
        "street": "Avenida Paulista, 901 - Bloco A",
        "city": "São Paulo/SP",
        "fornecimento": "63114642"
      },
      {
        "id": "25-5",
        "street": "Avenida Paulista, 649 - Bloco C",
        "city": "São Paulo/SP",
        "fornecimento": "83895277"
      },
      {
        "id": "25-6",
        "street": "Avenida Paulista, 1765 - Bloco B",
        "city": "São Paulo/SP",
        "fornecimento": "78561092"
      },
      {
        "id": "25-7",
        "street": "Avenida Paulista, 1802 - Bloco B",
        "city": "São Paulo/SP",
        "fornecimento": "04004430"
      }
    ]
  },
  {
    "id": "26",
    "name": "Vila Prudente Residence",
    "cnpj": "77.256.081/0001-09",
    "tipo": "casa",
    "fornecimentosCount": 1,
    "isFavorite": false,
    "properties": [
      {
        "id": "26-1",
        "street": "Rua das Flores, 695",
        "city": "São Paulo/SP",
        "fornecimento": "36058583"
      }
    ]
  },
  {
    "id": "27",
    "name": "Galpão Comercial Marginal",
    "cnpj": "28.689.386/0001-17",
    "tipo": "galpao",
    "fornecimentosCount": 3,
    "isFavorite": false,
    "properties": [
      {
        "id": "27-1",
        "street": "Rua das Flores, 1178 - Galpão",
        "city": "São Paulo/SP",
        "fornecimento": "58290072"
      },
      {
        "id": "27-2",
        "street": "Rua das Flores, 452 - Galpão",
        "city": "São Paulo/SP",
        "fornecimento": "56741923"
      },
      {
        "id": "27-3",
        "street": "Rua das Flores, 57 - Galpão",
        "city": "São Paulo/SP",
        "fornecimento": "34886824"
      }
    ]
  },
  {
    "id": "28",
    "name": "Residencial Recanto Verde",
    "cnpj": "94.050.937/0001-78",
    "tipo": "apartamento",
    "fornecimentosCount": 1,
    "isFavorite": false,
    "properties": [
      {
        "id": "28-1",
        "street": "Rua das Flores, 1535 - Apto 35",
        "city": "São Paulo/SP",
        "fornecimento": "43143267"
      }
    ]
  },
  {
    "id": "29",
    "name": "Edifício Mirante",
    "cnpj": "82.348.748/0001-35",
    "tipo": "apartamento",
    "fornecimentosCount": 2,
    "isFavorite": false,
    "properties": [
      {
        "id": "29-1",
        "street": "Rua da Liberdade, 139 - Apto 144",
        "city": "São Paulo/SP",
        "fornecimento": "32710625"
      },
      {
        "id": "29-2",
        "street": "Rua da Liberdade, 591 - Apto 191",
        "city": "São Paulo/SP",
        "fornecimento": "44312932"
      }
    ]
  },
  {
    "id": "30",
    "name": "Conjunto Habitacional Enseada IV",
    "cnpj": "46.183.703/0001-18",
    "tipo": "condominio",
    "fornecimentosCount": 3,
    "isFavorite": false,
    "properties": [
      {
        "id": "30-1",
        "street": "Rua Oscar Freire, 1661 - Bloco A",
        "city": "São Paulo/SP",
        "fornecimento": "97212095"
      },
      {
        "id": "30-2",
        "street": "Rua Oscar Freire, 110 - Bloco C",
        "city": "São Paulo/SP",
        "fornecimento": "40302150"
      },
      {
        "id": "30-3",
        "street": "Rua Oscar Freire, 785 - Bloco B",
        "city": "São Paulo/SP",
        "fornecimento": "34696219"
      }
    ]
  }
];

export type Address = Property;

export const getPropertyTypeLabel = (type?: PropertyType): string => {
  const labels: Record<PropertyType, string> = { apartamento: "Apartamento", casa: "Casa", comercial: "Comercial", condominio: "Condomínio", galpao: "Galpão" };
  return type ? labels[type] : "Imóvel";
};
