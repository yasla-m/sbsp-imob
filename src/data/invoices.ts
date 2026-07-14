export interface Invoice { id: string; month: string; year: string; dueDate: string; issueDate?: string; status: "open" | "paid" | "overdue"; amount: number; addressId: string; }

export const invoicesData: Invoice[] = [
  {
    "id": "1",
    "month": "Outubro",
    "year": "2024",
    "dueDate": "09/11/2024",
    "status": "paid",
    "amount": 1255.02,
    "addressId": "1-1"
  },
  {
    "id": "2",
    "month": "Novembro",
    "year": "2024",
    "dueDate": "05/12/2024",
    "status": "paid",
    "amount": 1006.05,
    "addressId": "1-1"
  },
  {
    "id": "3",
    "month": "Dezembro",
    "year": "2024",
    "dueDate": "15/01/2025",
    "status": "paid",
    "amount": 1264.91,
    "addressId": "1-1"
  },
  {
    "id": "4",
    "month": "Janeiro",
    "year": "2025",
    "dueDate": "15/02/2025",
    "status": "paid",
    "amount": 1090.61,
    "addressId": "1-1"
  },
  {
    "id": "5",
    "month": "Fevereiro",
    "year": "2025",
    "dueDate": "15/03/2025",
    "status": "paid",
    "amount": 1299.88,
    "addressId": "1-1"
  },
  {
    "id": "6",
    "month": "Março",
    "year": "2025",
    "dueDate": "15/04/2025",
    "status": "paid",
    "amount": 967.38,
    "addressId": "1-1"
  },
  {
    "id": "7",
    "month": "Abril",
    "year": "2025",
    "dueDate": "15/05/2025",
    "status": "paid",
    "amount": 1269.41,
    "addressId": "1-1"
  },
  {
    "id": "8",
    "month": "Maio",
    "year": "2025",
    "dueDate": "15/06/2025",
    "status": "paid",
    "amount": 1031.65,
    "addressId": "1-1"
  },
  {
    "id": "9",
    "month": "Junho",
    "year": "2025",
    "dueDate": "15/07/2025",
    "status": "paid",
    "amount": 915.32,
    "addressId": "1-1"
  },
  {
    "id": "10",
    "month": "Julho",
    "year": "2025",
    "dueDate": "15/08/2025",
    "status": "paid",
    "amount": 1116.58,
    "addressId": "1-1"
  },
  {
    "id": "11",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "15/09/2025",
    "status": "paid",
    "amount": 918.77,
    "addressId": "1-1"
  },
  {
    "id": "12",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "15/10/2025",
    "status": "paid",
    "amount": 973.63,
    "addressId": "1-1"
  },
  {
    "id": "13",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "20/12/2025",
    "status": "open",
    "amount": 1089.36,
    "addressId": "1-1"
  },
  {
    "id": "14",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "20/12/2025",
    "status": "open",
    "amount": 378.42,
    "addressId": "1-2"
  },
  {
    "id": "15",
    "month": "Outubro",
    "year": "2024",
    "dueDate": "09/11/2024",
    "status": "paid",
    "amount": 896.73,
    "addressId": "2-1"
  },
  {
    "id": "16",
    "month": "Novembro",
    "year": "2024",
    "dueDate": "05/12/2024",
    "status": "paid",
    "amount": 854.75,
    "addressId": "2-1"
  },
  {
    "id": "17",
    "month": "Dezembro",
    "year": "2024",
    "dueDate": "15/01/2025",
    "status": "paid",
    "amount": 810.54,
    "addressId": "2-1"
  },
  {
    "id": "18",
    "month": "Janeiro",
    "year": "2025",
    "dueDate": "15/02/2025",
    "status": "paid",
    "amount": 789.2,
    "addressId": "2-1"
  },
  {
    "id": "19",
    "month": "Fevereiro",
    "year": "2025",
    "dueDate": "15/03/2025",
    "status": "paid",
    "amount": 732.37,
    "addressId": "2-1"
  },
  {
    "id": "20",
    "month": "Março",
    "year": "2025",
    "dueDate": "15/04/2025",
    "status": "paid",
    "amount": 663.11,
    "addressId": "2-1"
  },
  {
    "id": "21",
    "month": "Abril",
    "year": "2025",
    "dueDate": "15/05/2025",
    "status": "paid",
    "amount": 761.81,
    "addressId": "2-1"
  },
  {
    "id": "22",
    "month": "Maio",
    "year": "2025",
    "dueDate": "15/06/2025",
    "status": "paid",
    "amount": 827.31,
    "addressId": "2-1"
  },
  {
    "id": "23",
    "month": "Junho",
    "year": "2025",
    "dueDate": "15/07/2025",
    "status": "paid",
    "amount": 749.4,
    "addressId": "2-1"
  },
  {
    "id": "24",
    "month": "Julho",
    "year": "2025",
    "dueDate": "15/08/2025",
    "status": "paid",
    "amount": 966.26,
    "addressId": "2-1"
  },
  {
    "id": "25",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "15/09/2025",
    "status": "paid",
    "amount": 915.35,
    "addressId": "2-1"
  },
  {
    "id": "26",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "15/10/2025",
    "status": "paid",
    "amount": 844.53,
    "addressId": "2-1"
  },
  {
    "id": "27",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "12/11/2025",
    "status": "open",
    "amount": 791.52,
    "addressId": "2-1"
  },
  {
    "id": "28",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "14/11/2025",
    "status": "open",
    "amount": 1101.6,
    "addressId": "2-2"
  },
  {
    "id": "29",
    "month": "Outubro",
    "year": "2024",
    "dueDate": "09/11/2024",
    "status": "paid",
    "amount": 377.36,
    "addressId": "3-1"
  },
  {
    "id": "30",
    "month": "Novembro",
    "year": "2024",
    "dueDate": "05/12/2024",
    "status": "paid",
    "amount": 478.58,
    "addressId": "3-1"
  },
  {
    "id": "31",
    "month": "Dezembro",
    "year": "2024",
    "dueDate": "15/01/2025",
    "status": "paid",
    "amount": 423.84,
    "addressId": "3-1"
  },
  {
    "id": "32",
    "month": "Janeiro",
    "year": "2025",
    "dueDate": "15/02/2025",
    "status": "paid",
    "amount": 361.91,
    "addressId": "3-1"
  },
  {
    "id": "33",
    "month": "Fevereiro",
    "year": "2025",
    "dueDate": "15/03/2025",
    "status": "paid",
    "amount": 434.23,
    "addressId": "3-1"
  },
  {
    "id": "34",
    "month": "Março",
    "year": "2025",
    "dueDate": "15/04/2025",
    "status": "paid",
    "amount": 370.68,
    "addressId": "3-1"
  },
  {
    "id": "35",
    "month": "Abril",
    "year": "2025",
    "dueDate": "15/05/2025",
    "status": "paid",
    "amount": 435.05,
    "addressId": "3-1"
  },
  {
    "id": "36",
    "month": "Maio",
    "year": "2025",
    "dueDate": "15/06/2025",
    "status": "paid",
    "amount": 462.36,
    "addressId": "3-1"
  },
  {
    "id": "37",
    "month": "Junho",
    "year": "2025",
    "dueDate": "15/07/2025",
    "status": "paid",
    "amount": 365.91,
    "addressId": "3-1"
  },
  {
    "id": "38",
    "month": "Julho",
    "year": "2025",
    "dueDate": "15/08/2025",
    "status": "paid",
    "amount": 336.25,
    "addressId": "3-1"
  },
  {
    "id": "39",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "15/09/2025",
    "status": "paid",
    "amount": 410.29,
    "addressId": "3-1"
  },
  {
    "id": "40",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "15/10/2025",
    "status": "paid",
    "amount": 444.29,
    "addressId": "3-1"
  },
  {
    "id": "41",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "16/11/2025",
    "status": "open",
    "amount": 391.68,
    "addressId": "3-1"
  },
  {
    "id": "42",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "12/11/2025",
    "status": "open",
    "amount": 545.7,
    "addressId": "3-2"
  },
  {
    "id": "43",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "14/11/2025",
    "status": "open",
    "amount": 597.72,
    "addressId": "3-3"
  },
  {
    "id": "44",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "12/11/2025",
    "status": "open",
    "amount": 666.06,
    "addressId": "3-4"
  },
  {
    "id": "45",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "12/11/2025",
    "status": "open",
    "amount": 673.2,
    "addressId": "3-5"
  },
  {
    "id": "46",
    "month": "Outubro",
    "year": "2024",
    "dueDate": "09/11/2024",
    "status": "paid",
    "amount": 1216.75,
    "addressId": "4-1"
  },
  {
    "id": "47",
    "month": "Novembro",
    "year": "2024",
    "dueDate": "05/12/2024",
    "status": "paid",
    "amount": 1048.16,
    "addressId": "4-1"
  },
  {
    "id": "48",
    "month": "Dezembro",
    "year": "2024",
    "dueDate": "15/01/2025",
    "status": "paid",
    "amount": 1061.32,
    "addressId": "4-1"
  },
  {
    "id": "49",
    "month": "Janeiro",
    "year": "2025",
    "dueDate": "15/02/2025",
    "status": "paid",
    "amount": 1191.21,
    "addressId": "4-1"
  },
  {
    "id": "50",
    "month": "Fevereiro",
    "year": "2025",
    "dueDate": "15/03/2025",
    "status": "paid",
    "amount": 1061.61,
    "addressId": "4-1"
  },
  {
    "id": "51",
    "month": "Março",
    "year": "2025",
    "dueDate": "15/04/2025",
    "status": "paid",
    "amount": 1165.35,
    "addressId": "4-1"
  },
  {
    "id": "52",
    "month": "Abril",
    "year": "2025",
    "dueDate": "15/05/2025",
    "status": "paid",
    "amount": 1249.69,
    "addressId": "4-1"
  },
  {
    "id": "53",
    "month": "Maio",
    "year": "2025",
    "dueDate": "15/06/2025",
    "status": "paid",
    "amount": 1182.18,
    "addressId": "4-1"
  },
  {
    "id": "54",
    "month": "Junho",
    "year": "2025",
    "dueDate": "15/07/2025",
    "status": "paid",
    "amount": 1073.5,
    "addressId": "4-1"
  },
  {
    "id": "55",
    "month": "Julho",
    "year": "2025",
    "dueDate": "15/08/2025",
    "status": "paid",
    "amount": 902.27,
    "addressId": "4-1"
  },
  {
    "id": "56",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "15/09/2025",
    "status": "paid",
    "amount": 919.21,
    "addressId": "4-1"
  },
  {
    "id": "57",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "15/10/2025",
    "status": "paid",
    "amount": 915.75,
    "addressId": "4-1"
  },
  {
    "id": "58",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "14/11/2025",
    "status": "open",
    "amount": 1080.18,
    "addressId": "4-1"
  },
  {
    "id": "59",
    "month": "Outubro",
    "year": "2024",
    "dueDate": "09/11/2024",
    "status": "paid",
    "amount": 1152.47,
    "addressId": "5-1"
  },
  {
    "id": "60",
    "month": "Novembro",
    "year": "2024",
    "dueDate": "05/12/2024",
    "status": "paid",
    "amount": 819.06,
    "addressId": "5-1"
  },
  {
    "id": "61",
    "month": "Dezembro",
    "year": "2024",
    "dueDate": "15/01/2025",
    "status": "paid",
    "amount": 818.62,
    "addressId": "5-1"
  },
  {
    "id": "62",
    "month": "Janeiro",
    "year": "2025",
    "dueDate": "15/02/2025",
    "status": "paid",
    "amount": 992.76,
    "addressId": "5-1"
  },
  {
    "id": "63",
    "month": "Fevereiro",
    "year": "2025",
    "dueDate": "15/03/2025",
    "status": "paid",
    "amount": 906.37,
    "addressId": "5-1"
  },
  {
    "id": "64",
    "month": "Março",
    "year": "2025",
    "dueDate": "15/04/2025",
    "status": "paid",
    "amount": 923.64,
    "addressId": "5-1"
  },
  {
    "id": "65",
    "month": "Abril",
    "year": "2025",
    "dueDate": "15/05/2025",
    "status": "paid",
    "amount": 867.04,
    "addressId": "5-1"
  },
  {
    "id": "66",
    "month": "Maio",
    "year": "2025",
    "dueDate": "15/06/2025",
    "status": "paid",
    "amount": 1026.29,
    "addressId": "5-1"
  },
  {
    "id": "67",
    "month": "Junho",
    "year": "2025",
    "dueDate": "15/07/2025",
    "status": "paid",
    "amount": 859.43,
    "addressId": "5-1"
  },
  {
    "id": "68",
    "month": "Julho",
    "year": "2025",
    "dueDate": "15/08/2025",
    "status": "paid",
    "amount": 891.92,
    "addressId": "5-1"
  },
  {
    "id": "69",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "15/09/2025",
    "status": "paid",
    "amount": 1008.74,
    "addressId": "5-1"
  },
  {
    "id": "70",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "15/10/2025",
    "status": "paid",
    "amount": 952.5,
    "addressId": "5-1"
  },
  {
    "id": "71",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "15/11/2025",
    "status": "paid",
    "amount": 934,
    "addressId": "5-1"
  },
  {
    "id": "72",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "15/11/2025",
    "status": "paid",
    "amount": 960,
    "addressId": "5-2"
  },
  {
    "id": "73",
    "month": "Outubro",
    "year": "2024",
    "dueDate": "09/11/2024",
    "status": "paid",
    "amount": 872.13,
    "addressId": "6-1"
  },
  {
    "id": "74",
    "month": "Novembro",
    "year": "2024",
    "dueDate": "05/12/2024",
    "status": "paid",
    "amount": 837.1,
    "addressId": "6-1"
  },
  {
    "id": "75",
    "month": "Dezembro",
    "year": "2024",
    "dueDate": "15/01/2025",
    "status": "paid",
    "amount": 724.98,
    "addressId": "6-1"
  },
  {
    "id": "76",
    "month": "Janeiro",
    "year": "2025",
    "dueDate": "15/02/2025",
    "status": "paid",
    "amount": 721.19,
    "addressId": "6-1"
  },
  {
    "id": "77",
    "month": "Fevereiro",
    "year": "2025",
    "dueDate": "15/03/2025",
    "status": "paid",
    "amount": 858.59,
    "addressId": "6-1"
  },
  {
    "id": "78",
    "month": "Março",
    "year": "2025",
    "dueDate": "15/04/2025",
    "status": "paid",
    "amount": 844.4,
    "addressId": "6-1"
  },
  {
    "id": "79",
    "month": "Abril",
    "year": "2025",
    "dueDate": "15/05/2025",
    "status": "paid",
    "amount": 855.25,
    "addressId": "6-1"
  },
  {
    "id": "80",
    "month": "Maio",
    "year": "2025",
    "dueDate": "15/06/2025",
    "status": "paid",
    "amount": 895.27,
    "addressId": "6-1"
  },
  {
    "id": "81",
    "month": "Junho",
    "year": "2025",
    "dueDate": "15/07/2025",
    "status": "paid",
    "amount": 888.21,
    "addressId": "6-1"
  },
  {
    "id": "82",
    "month": "Julho",
    "year": "2025",
    "dueDate": "15/08/2025",
    "status": "paid",
    "amount": 946.24,
    "addressId": "6-1"
  },
  {
    "id": "83",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "15/09/2025",
    "status": "paid",
    "amount": 960.74,
    "addressId": "6-1"
  },
  {
    "id": "84",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "15/10/2025",
    "status": "paid",
    "amount": 705.34,
    "addressId": "6-1"
  },
  {
    "id": "85",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "15/11/2025",
    "status": "paid",
    "amount": 779,
    "addressId": "6-1"
  },
  {
    "id": "86",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "15/11/2025",
    "status": "paid",
    "amount": 1139,
    "addressId": "6-2"
  },
  {
    "id": "87",
    "month": "Outubro",
    "year": "2024",
    "dueDate": "09/11/2024",
    "status": "paid",
    "amount": 863.33,
    "addressId": "7-1"
  },
  {
    "id": "88",
    "month": "Novembro",
    "year": "2024",
    "dueDate": "05/12/2024",
    "status": "paid",
    "amount": 942.43,
    "addressId": "7-1"
  },
  {
    "id": "89",
    "month": "Dezembro",
    "year": "2024",
    "dueDate": "15/01/2025",
    "status": "paid",
    "amount": 1067.15,
    "addressId": "7-1"
  },
  {
    "id": "90",
    "month": "Janeiro",
    "year": "2025",
    "dueDate": "15/02/2025",
    "status": "paid",
    "amount": 821.63,
    "addressId": "7-1"
  },
  {
    "id": "91",
    "month": "Fevereiro",
    "year": "2025",
    "dueDate": "15/03/2025",
    "status": "paid",
    "amount": 970.28,
    "addressId": "7-1"
  },
  {
    "id": "92",
    "month": "Março",
    "year": "2025",
    "dueDate": "15/04/2025",
    "status": "paid",
    "amount": 781.89,
    "addressId": "7-1"
  },
  {
    "id": "93",
    "month": "Abril",
    "year": "2025",
    "dueDate": "15/05/2025",
    "status": "paid",
    "amount": 1003.05,
    "addressId": "7-1"
  },
  {
    "id": "94",
    "month": "Maio",
    "year": "2025",
    "dueDate": "15/06/2025",
    "status": "paid",
    "amount": 936.57,
    "addressId": "7-1"
  },
  {
    "id": "95",
    "month": "Junho",
    "year": "2025",
    "dueDate": "15/07/2025",
    "status": "paid",
    "amount": 742.86,
    "addressId": "7-1"
  },
  {
    "id": "96",
    "month": "Julho",
    "year": "2025",
    "dueDate": "15/08/2025",
    "status": "paid",
    "amount": 1020,
    "addressId": "7-1"
  },
  {
    "id": "97",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "15/09/2025",
    "status": "paid",
    "amount": 776.08,
    "addressId": "7-1"
  },
  {
    "id": "98",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "15/10/2025",
    "status": "paid",
    "amount": 799.57,
    "addressId": "7-1"
  },
  {
    "id": "99",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "09/09/2025",
    "status": "open",
    "amount": 953.7,
    "addressId": "7-1"
  },
  {
    "id": "100",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "09/10/2025",
    "status": "open",
    "amount": 910.35,
    "addressId": "7-1"
  },
  {
    "id": "101",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "03/11/2025",
    "status": "open",
    "amount": 867,
    "addressId": "7-1"
  },
  {
    "id": "102",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "09/09/2025",
    "status": "open",
    "amount": 456.5,
    "addressId": "7-2"
  },
  {
    "id": "103",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "09/10/2025",
    "status": "open",
    "amount": 435.75,
    "addressId": "7-2"
  },
  {
    "id": "104",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "03/11/2025",
    "status": "open",
    "amount": 415,
    "addressId": "7-2"
  },
  {
    "id": "105",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "09/09/2025",
    "status": "open",
    "amount": 1182.5,
    "addressId": "7-3"
  },
  {
    "id": "106",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "09/10/2025",
    "status": "open",
    "amount": 1128.75,
    "addressId": "7-3"
  },
  {
    "id": "107",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "03/11/2025",
    "status": "open",
    "amount": 1075,
    "addressId": "7-3"
  },
  {
    "id": "108",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "09/09/2025",
    "status": "open",
    "amount": 404.8,
    "addressId": "7-4"
  },
  {
    "id": "109",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "09/10/2025",
    "status": "open",
    "amount": 386.4,
    "addressId": "7-4"
  },
  {
    "id": "110",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "03/11/2025",
    "status": "open",
    "amount": 368,
    "addressId": "7-4"
  },
  {
    "id": "111",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "09/09/2025",
    "status": "open",
    "amount": 613.8,
    "addressId": "7-5"
  },
  {
    "id": "112",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "09/10/2025",
    "status": "open",
    "amount": 585.9,
    "addressId": "7-5"
  },
  {
    "id": "113",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "03/11/2025",
    "status": "open",
    "amount": 558,
    "addressId": "7-5"
  },
  {
    "id": "114",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "09/09/2025",
    "status": "open",
    "amount": 1186.9,
    "addressId": "7-6"
  },
  {
    "id": "115",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "09/10/2025",
    "status": "open",
    "amount": 1132.95,
    "addressId": "7-6"
  },
  {
    "id": "116",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "03/11/2025",
    "status": "open",
    "amount": 1079,
    "addressId": "7-6"
  },
  {
    "id": "117",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "09/09/2025",
    "status": "open",
    "amount": 422.4,
    "addressId": "7-7"
  },
  {
    "id": "118",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "09/10/2025",
    "status": "open",
    "amount": 403.2,
    "addressId": "7-7"
  },
  {
    "id": "119",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "03/11/2025",
    "status": "open",
    "amount": 384,
    "addressId": "7-7"
  },
  {
    "id": "120",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "09/09/2025",
    "status": "open",
    "amount": 922.9,
    "addressId": "7-8"
  },
  {
    "id": "121",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "09/10/2025",
    "status": "open",
    "amount": 880.95,
    "addressId": "7-8"
  },
  {
    "id": "122",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "03/11/2025",
    "status": "open",
    "amount": 839,
    "addressId": "7-8"
  },
  {
    "id": "123",
    "month": "Outubro",
    "year": "2024",
    "dueDate": "09/11/2024",
    "status": "paid",
    "amount": 728.94,
    "addressId": "8-1"
  },
  {
    "id": "124",
    "month": "Novembro",
    "year": "2024",
    "dueDate": "05/12/2024",
    "status": "paid",
    "amount": 818.46,
    "addressId": "8-1"
  },
  {
    "id": "125",
    "month": "Dezembro",
    "year": "2024",
    "dueDate": "15/01/2025",
    "status": "paid",
    "amount": 682.87,
    "addressId": "8-1"
  },
  {
    "id": "126",
    "month": "Janeiro",
    "year": "2025",
    "dueDate": "15/02/2025",
    "status": "paid",
    "amount": 641,
    "addressId": "8-1"
  },
  {
    "id": "127",
    "month": "Fevereiro",
    "year": "2025",
    "dueDate": "15/03/2025",
    "status": "paid",
    "amount": 710.67,
    "addressId": "8-1"
  },
  {
    "id": "128",
    "month": "Março",
    "year": "2025",
    "dueDate": "15/04/2025",
    "status": "paid",
    "amount": 605.35,
    "addressId": "8-1"
  },
  {
    "id": "129",
    "month": "Abril",
    "year": "2025",
    "dueDate": "15/05/2025",
    "status": "paid",
    "amount": 712.7,
    "addressId": "8-1"
  },
  {
    "id": "130",
    "month": "Maio",
    "year": "2025",
    "dueDate": "15/06/2025",
    "status": "paid",
    "amount": 704.31,
    "addressId": "8-1"
  },
  {
    "id": "131",
    "month": "Junho",
    "year": "2025",
    "dueDate": "15/07/2025",
    "status": "paid",
    "amount": 626.06,
    "addressId": "8-1"
  },
  {
    "id": "132",
    "month": "Julho",
    "year": "2025",
    "dueDate": "15/08/2025",
    "status": "paid",
    "amount": 636.38,
    "addressId": "8-1"
  },
  {
    "id": "133",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "15/09/2025",
    "status": "paid",
    "amount": 682.5,
    "addressId": "8-1"
  },
  {
    "id": "134",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "15/10/2025",
    "status": "paid",
    "amount": 667.09,
    "addressId": "8-1"
  },
  {
    "id": "135",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "25/10/2025",
    "status": "open",
    "amount": 722.4,
    "addressId": "8-1"
  },
  {
    "id": "136",
    "month": "Novembro",
    "year": "2025",
    "dueDate": "15/12/2025",
    "status": "open",
    "amount": 688,
    "addressId": "8-1"
  },
  {
    "id": "137",
    "month": "Outubro",
    "year": "2024",
    "dueDate": "09/11/2024",
    "status": "paid",
    "amount": 1251.18,
    "addressId": "9-1"
  },
  {
    "id": "138",
    "month": "Novembro",
    "year": "2024",
    "dueDate": "05/12/2024",
    "status": "paid",
    "amount": 1018.68,
    "addressId": "9-1"
  },
  {
    "id": "139",
    "month": "Dezembro",
    "year": "2024",
    "dueDate": "15/01/2025",
    "status": "paid",
    "amount": 979.67,
    "addressId": "9-1"
  },
  {
    "id": "140",
    "month": "Janeiro",
    "year": "2025",
    "dueDate": "15/02/2025",
    "status": "paid",
    "amount": 1018.15,
    "addressId": "9-1"
  },
  {
    "id": "141",
    "month": "Fevereiro",
    "year": "2025",
    "dueDate": "15/03/2025",
    "status": "paid",
    "amount": 970.45,
    "addressId": "9-1"
  },
  {
    "id": "142",
    "month": "Março",
    "year": "2025",
    "dueDate": "15/04/2025",
    "status": "paid",
    "amount": 1292.04,
    "addressId": "9-1"
  },
  {
    "id": "143",
    "month": "Abril",
    "year": "2025",
    "dueDate": "15/05/2025",
    "status": "paid",
    "amount": 1295.38,
    "addressId": "9-1"
  },
  {
    "id": "144",
    "month": "Maio",
    "year": "2025",
    "dueDate": "15/06/2025",
    "status": "paid",
    "amount": 975.48,
    "addressId": "9-1"
  },
  {
    "id": "145",
    "month": "Junho",
    "year": "2025",
    "dueDate": "15/07/2025",
    "status": "paid",
    "amount": 1132.37,
    "addressId": "9-1"
  },
  {
    "id": "146",
    "month": "Julho",
    "year": "2025",
    "dueDate": "15/08/2025",
    "status": "paid",
    "amount": 912.12,
    "addressId": "9-1"
  },
  {
    "id": "147",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "15/09/2025",
    "status": "paid",
    "amount": 1097.71,
    "addressId": "9-1"
  },
  {
    "id": "148",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "15/10/2025",
    "status": "paid",
    "amount": 986.07,
    "addressId": "9-1"
  },
  {
    "id": "149",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "09/09/2025",
    "status": "open",
    "amount": 1167.1,
    "addressId": "9-1"
  },
  {
    "id": "150",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "09/10/2025",
    "status": "open",
    "amount": 1114.05,
    "addressId": "9-1"
  },
  {
    "id": "151",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "03/11/2025",
    "status": "open",
    "amount": 1061,
    "addressId": "9-1"
  },
  {
    "id": "152",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "09/09/2025",
    "status": "open",
    "amount": 708.4,
    "addressId": "9-2"
  },
  {
    "id": "153",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "09/10/2025",
    "status": "open",
    "amount": 676.2,
    "addressId": "9-2"
  },
  {
    "id": "154",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "03/11/2025",
    "status": "open",
    "amount": 644,
    "addressId": "9-2"
  },
  {
    "id": "155",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "09/09/2025",
    "status": "open",
    "amount": 1140.7,
    "addressId": "9-3"
  },
  {
    "id": "156",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "09/10/2025",
    "status": "open",
    "amount": 1088.85,
    "addressId": "9-3"
  },
  {
    "id": "157",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "03/11/2025",
    "status": "open",
    "amount": 1037,
    "addressId": "9-3"
  },
  {
    "id": "158",
    "month": "Outubro",
    "year": "2024",
    "dueDate": "09/11/2024",
    "status": "paid",
    "amount": 299.66,
    "addressId": "10-1"
  },
  {
    "id": "159",
    "month": "Novembro",
    "year": "2024",
    "dueDate": "05/12/2024",
    "status": "paid",
    "amount": 383.27,
    "addressId": "10-1"
  },
  {
    "id": "160",
    "month": "Dezembro",
    "year": "2024",
    "dueDate": "15/01/2025",
    "status": "paid",
    "amount": 327.14,
    "addressId": "10-1"
  },
  {
    "id": "161",
    "month": "Janeiro",
    "year": "2025",
    "dueDate": "15/02/2025",
    "status": "paid",
    "amount": 398.06,
    "addressId": "10-1"
  },
  {
    "id": "162",
    "month": "Fevereiro",
    "year": "2025",
    "dueDate": "15/03/2025",
    "status": "paid",
    "amount": 353.07,
    "addressId": "10-1"
  },
  {
    "id": "163",
    "month": "Março",
    "year": "2025",
    "dueDate": "15/04/2025",
    "status": "paid",
    "amount": 302.06,
    "addressId": "10-1"
  },
  {
    "id": "164",
    "month": "Abril",
    "year": "2025",
    "dueDate": "15/05/2025",
    "status": "paid",
    "amount": 331.59,
    "addressId": "10-1"
  },
  {
    "id": "165",
    "month": "Maio",
    "year": "2025",
    "dueDate": "15/06/2025",
    "status": "paid",
    "amount": 306.58,
    "addressId": "10-1"
  },
  {
    "id": "166",
    "month": "Junho",
    "year": "2025",
    "dueDate": "15/07/2025",
    "status": "paid",
    "amount": 337.1,
    "addressId": "10-1"
  },
  {
    "id": "167",
    "month": "Julho",
    "year": "2025",
    "dueDate": "15/08/2025",
    "status": "paid",
    "amount": 374.56,
    "addressId": "10-1"
  },
  {
    "id": "168",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "15/09/2025",
    "status": "paid",
    "amount": 291.83,
    "addressId": "10-1"
  },
  {
    "id": "169",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "15/10/2025",
    "status": "paid",
    "amount": 329.3,
    "addressId": "10-1"
  },
  {
    "id": "170",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "15/11/2025",
    "status": "paid",
    "amount": 322,
    "addressId": "10-1"
  },
  {
    "id": "171",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "15/11/2025",
    "status": "paid",
    "amount": 909,
    "addressId": "10-2"
  },
  {
    "id": "172",
    "month": "Outubro",
    "year": "2024",
    "dueDate": "09/11/2024",
    "status": "paid",
    "amount": 1144.94,
    "addressId": "11-1"
  },
  {
    "id": "173",
    "month": "Novembro",
    "year": "2024",
    "dueDate": "05/12/2024",
    "status": "paid",
    "amount": 976.78,
    "addressId": "11-1"
  },
  {
    "id": "174",
    "month": "Dezembro",
    "year": "2024",
    "dueDate": "15/01/2025",
    "status": "paid",
    "amount": 1159.29,
    "addressId": "11-1"
  },
  {
    "id": "175",
    "month": "Janeiro",
    "year": "2025",
    "dueDate": "15/02/2025",
    "status": "paid",
    "amount": 804.22,
    "addressId": "11-1"
  },
  {
    "id": "176",
    "month": "Fevereiro",
    "year": "2025",
    "dueDate": "15/03/2025",
    "status": "paid",
    "amount": 1096.01,
    "addressId": "11-1"
  },
  {
    "id": "177",
    "month": "Março",
    "year": "2025",
    "dueDate": "15/04/2025",
    "status": "paid",
    "amount": 1011.9,
    "addressId": "11-1"
  },
  {
    "id": "178",
    "month": "Abril",
    "year": "2025",
    "dueDate": "15/05/2025",
    "status": "paid",
    "amount": 906.86,
    "addressId": "11-1"
  },
  {
    "id": "179",
    "month": "Maio",
    "year": "2025",
    "dueDate": "15/06/2025",
    "status": "paid",
    "amount": 956.68,
    "addressId": "11-1"
  },
  {
    "id": "180",
    "month": "Junho",
    "year": "2025",
    "dueDate": "15/07/2025",
    "status": "paid",
    "amount": 1099.96,
    "addressId": "11-1"
  },
  {
    "id": "181",
    "month": "Julho",
    "year": "2025",
    "dueDate": "15/08/2025",
    "status": "paid",
    "amount": 926.69,
    "addressId": "11-1"
  },
  {
    "id": "182",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "15/09/2025",
    "status": "paid",
    "amount": 992.27,
    "addressId": "11-1"
  },
  {
    "id": "183",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "15/10/2025",
    "status": "paid",
    "amount": 1144,
    "addressId": "11-1"
  },
  {
    "id": "184",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "14/11/2025",
    "status": "open",
    "amount": 962.88,
    "addressId": "11-1"
  },
  {
    "id": "185",
    "month": "Outubro",
    "year": "2024",
    "dueDate": "09/11/2024",
    "status": "paid",
    "amount": 349.5,
    "addressId": "12-1"
  },
  {
    "id": "186",
    "month": "Novembro",
    "year": "2024",
    "dueDate": "05/12/2024",
    "status": "paid",
    "amount": 367.53,
    "addressId": "12-1"
  },
  {
    "id": "187",
    "month": "Dezembro",
    "year": "2024",
    "dueDate": "15/01/2025",
    "status": "paid",
    "amount": 297.35,
    "addressId": "12-1"
  },
  {
    "id": "188",
    "month": "Janeiro",
    "year": "2025",
    "dueDate": "15/02/2025",
    "status": "paid",
    "amount": 372.22,
    "addressId": "12-1"
  },
  {
    "id": "189",
    "month": "Fevereiro",
    "year": "2025",
    "dueDate": "15/03/2025",
    "status": "paid",
    "amount": 295.95,
    "addressId": "12-1"
  },
  {
    "id": "190",
    "month": "Março",
    "year": "2025",
    "dueDate": "15/04/2025",
    "status": "paid",
    "amount": 370.89,
    "addressId": "12-1"
  },
  {
    "id": "191",
    "month": "Abril",
    "year": "2025",
    "dueDate": "15/05/2025",
    "status": "paid",
    "amount": 382.05,
    "addressId": "12-1"
  },
  {
    "id": "192",
    "month": "Maio",
    "year": "2025",
    "dueDate": "15/06/2025",
    "status": "paid",
    "amount": 303.19,
    "addressId": "12-1"
  },
  {
    "id": "193",
    "month": "Junho",
    "year": "2025",
    "dueDate": "15/07/2025",
    "status": "paid",
    "amount": 300.9,
    "addressId": "12-1"
  },
  {
    "id": "194",
    "month": "Julho",
    "year": "2025",
    "dueDate": "15/08/2025",
    "status": "paid",
    "amount": 353.97,
    "addressId": "12-1"
  },
  {
    "id": "195",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "15/09/2025",
    "status": "paid",
    "amount": 388.21,
    "addressId": "12-1"
  },
  {
    "id": "196",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "15/10/2025",
    "status": "paid",
    "amount": 277.43,
    "addressId": "12-1"
  },
  {
    "id": "197",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "12/11/2025",
    "status": "open",
    "amount": 321.3,
    "addressId": "12-1"
  },
  {
    "id": "198",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "16/11/2025",
    "status": "open",
    "amount": 1216.86,
    "addressId": "12-2"
  },
  {
    "id": "199",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "12/11/2025",
    "status": "open",
    "amount": 422.28,
    "addressId": "12-3"
  },
  {
    "id": "200",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "14/11/2025",
    "status": "open",
    "amount": 959.82,
    "addressId": "12-4"
  },
  {
    "id": "201",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "12/11/2025",
    "status": "open",
    "amount": 728.28,
    "addressId": "12-5"
  },
  {
    "id": "202",
    "month": "Outubro",
    "year": "2024",
    "dueDate": "09/11/2024",
    "status": "paid",
    "amount": 325.84,
    "addressId": "13-1"
  },
  {
    "id": "203",
    "month": "Novembro",
    "year": "2024",
    "dueDate": "05/12/2024",
    "status": "paid",
    "amount": 370.41,
    "addressId": "13-1"
  },
  {
    "id": "204",
    "month": "Dezembro",
    "year": "2024",
    "dueDate": "15/01/2025",
    "status": "paid",
    "amount": 387.36,
    "addressId": "13-1"
  },
  {
    "id": "205",
    "month": "Janeiro",
    "year": "2025",
    "dueDate": "15/02/2025",
    "status": "paid",
    "amount": 393.58,
    "addressId": "13-1"
  },
  {
    "id": "206",
    "month": "Fevereiro",
    "year": "2025",
    "dueDate": "15/03/2025",
    "status": "paid",
    "amount": 422.84,
    "addressId": "13-1"
  },
  {
    "id": "207",
    "month": "Março",
    "year": "2025",
    "dueDate": "15/04/2025",
    "status": "paid",
    "amount": 357.38,
    "addressId": "13-1"
  },
  {
    "id": "208",
    "month": "Abril",
    "year": "2025",
    "dueDate": "15/05/2025",
    "status": "paid",
    "amount": 443.78,
    "addressId": "13-1"
  },
  {
    "id": "209",
    "month": "Maio",
    "year": "2025",
    "dueDate": "15/06/2025",
    "status": "paid",
    "amount": 318.37,
    "addressId": "13-1"
  },
  {
    "id": "210",
    "month": "Junho",
    "year": "2025",
    "dueDate": "15/07/2025",
    "status": "paid",
    "amount": 342.09,
    "addressId": "13-1"
  },
  {
    "id": "211",
    "month": "Julho",
    "year": "2025",
    "dueDate": "15/08/2025",
    "status": "paid",
    "amount": 320.35,
    "addressId": "13-1"
  },
  {
    "id": "212",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "15/09/2025",
    "status": "paid",
    "amount": 384.89,
    "addressId": "13-1"
  },
  {
    "id": "213",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "15/10/2025",
    "status": "paid",
    "amount": 365.08,
    "addressId": "13-1"
  },
  {
    "id": "214",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "16/11/2025",
    "status": "open",
    "amount": 372.3,
    "addressId": "13-1"
  },
  {
    "id": "215",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "12/11/2025",
    "status": "open",
    "amount": 602.82,
    "addressId": "13-2"
  },
  {
    "id": "216",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "20/12/2025",
    "status": "open",
    "amount": 393.72,
    "addressId": "13-3"
  },
  {
    "id": "217",
    "month": "Outubro",
    "year": "2024",
    "dueDate": "09/11/2024",
    "status": "paid",
    "amount": 822.8,
    "addressId": "14-1"
  },
  {
    "id": "218",
    "month": "Novembro",
    "year": "2024",
    "dueDate": "05/12/2024",
    "status": "paid",
    "amount": 901.77,
    "addressId": "14-1"
  },
  {
    "id": "219",
    "month": "Dezembro",
    "year": "2024",
    "dueDate": "15/01/2025",
    "status": "paid",
    "amount": 887.35,
    "addressId": "14-1"
  },
  {
    "id": "220",
    "month": "Janeiro",
    "year": "2025",
    "dueDate": "15/02/2025",
    "status": "paid",
    "amount": 956.12,
    "addressId": "14-1"
  },
  {
    "id": "221",
    "month": "Fevereiro",
    "year": "2025",
    "dueDate": "15/03/2025",
    "status": "paid",
    "amount": 785.91,
    "addressId": "14-1"
  },
  {
    "id": "222",
    "month": "Março",
    "year": "2025",
    "dueDate": "15/04/2025",
    "status": "paid",
    "amount": 726.94,
    "addressId": "14-1"
  },
  {
    "id": "223",
    "month": "Abril",
    "year": "2025",
    "dueDate": "15/05/2025",
    "status": "paid",
    "amount": 968.21,
    "addressId": "14-1"
  },
  {
    "id": "224",
    "month": "Maio",
    "year": "2025",
    "dueDate": "15/06/2025",
    "status": "paid",
    "amount": 785.13,
    "addressId": "14-1"
  },
  {
    "id": "225",
    "month": "Junho",
    "year": "2025",
    "dueDate": "15/07/2025",
    "status": "paid",
    "amount": 749.34,
    "addressId": "14-1"
  },
  {
    "id": "226",
    "month": "Julho",
    "year": "2025",
    "dueDate": "15/08/2025",
    "status": "paid",
    "amount": 770.22,
    "addressId": "14-1"
  },
  {
    "id": "227",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "15/09/2025",
    "status": "paid",
    "amount": 862.13,
    "addressId": "14-1"
  },
  {
    "id": "228",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "15/10/2025",
    "status": "paid",
    "amount": 971.97,
    "addressId": "14-1"
  },
  {
    "id": "229",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "15/11/2025",
    "status": "paid",
    "amount": 814,
    "addressId": "14-1"
  },
  {
    "id": "230",
    "month": "Outubro",
    "year": "2024",
    "dueDate": "09/11/2024",
    "status": "paid",
    "amount": 1179.49,
    "addressId": "15-1"
  },
  {
    "id": "231",
    "month": "Novembro",
    "year": "2024",
    "dueDate": "05/12/2024",
    "status": "paid",
    "amount": 971.88,
    "addressId": "15-1"
  },
  {
    "id": "232",
    "month": "Dezembro",
    "year": "2024",
    "dueDate": "15/01/2025",
    "status": "paid",
    "amount": 1168.63,
    "addressId": "15-1"
  },
  {
    "id": "233",
    "month": "Janeiro",
    "year": "2025",
    "dueDate": "15/02/2025",
    "status": "paid",
    "amount": 1300.35,
    "addressId": "15-1"
  },
  {
    "id": "234",
    "month": "Fevereiro",
    "year": "2025",
    "dueDate": "15/03/2025",
    "status": "paid",
    "amount": 1310.51,
    "addressId": "15-1"
  },
  {
    "id": "235",
    "month": "Março",
    "year": "2025",
    "dueDate": "15/04/2025",
    "status": "paid",
    "amount": 1391.8,
    "addressId": "15-1"
  },
  {
    "id": "236",
    "month": "Abril",
    "year": "2025",
    "dueDate": "15/05/2025",
    "status": "paid",
    "amount": 1229.7,
    "addressId": "15-1"
  },
  {
    "id": "237",
    "month": "Maio",
    "year": "2025",
    "dueDate": "15/06/2025",
    "status": "paid",
    "amount": 1385.9,
    "addressId": "15-1"
  },
  {
    "id": "238",
    "month": "Junho",
    "year": "2025",
    "dueDate": "15/07/2025",
    "status": "paid",
    "amount": 1393.1,
    "addressId": "15-1"
  },
  {
    "id": "239",
    "month": "Julho",
    "year": "2025",
    "dueDate": "15/08/2025",
    "status": "paid",
    "amount": 1007.26,
    "addressId": "15-1"
  },
  {
    "id": "240",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "15/09/2025",
    "status": "paid",
    "amount": 1311.78,
    "addressId": "15-1"
  },
  {
    "id": "241",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "15/10/2025",
    "status": "paid",
    "amount": 1099.26,
    "addressId": "15-1"
  },
  {
    "id": "242",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "15/11/2025",
    "status": "paid",
    "amount": 1126,
    "addressId": "15-1"
  },
  {
    "id": "243",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "15/11/2025",
    "status": "paid",
    "amount": 448,
    "addressId": "15-2"
  },
  {
    "id": "244",
    "month": "Outubro",
    "year": "2024",
    "dueDate": "09/11/2024",
    "status": "paid",
    "amount": 1221.55,
    "addressId": "16-1"
  },
  {
    "id": "245",
    "month": "Novembro",
    "year": "2024",
    "dueDate": "05/12/2024",
    "status": "paid",
    "amount": 1241.94,
    "addressId": "16-1"
  },
  {
    "id": "246",
    "month": "Dezembro",
    "year": "2024",
    "dueDate": "15/01/2025",
    "status": "paid",
    "amount": 1115.96,
    "addressId": "16-1"
  },
  {
    "id": "247",
    "month": "Janeiro",
    "year": "2025",
    "dueDate": "15/02/2025",
    "status": "paid",
    "amount": 1033.24,
    "addressId": "16-1"
  },
  {
    "id": "248",
    "month": "Fevereiro",
    "year": "2025",
    "dueDate": "15/03/2025",
    "status": "paid",
    "amount": 1052.71,
    "addressId": "16-1"
  },
  {
    "id": "249",
    "month": "Março",
    "year": "2025",
    "dueDate": "15/04/2025",
    "status": "paid",
    "amount": 1328.13,
    "addressId": "16-1"
  },
  {
    "id": "250",
    "month": "Abril",
    "year": "2025",
    "dueDate": "15/05/2025",
    "status": "paid",
    "amount": 1205.75,
    "addressId": "16-1"
  },
  {
    "id": "251",
    "month": "Maio",
    "year": "2025",
    "dueDate": "15/06/2025",
    "status": "paid",
    "amount": 1010.79,
    "addressId": "16-1"
  },
  {
    "id": "252",
    "month": "Junho",
    "year": "2025",
    "dueDate": "15/07/2025",
    "status": "paid",
    "amount": 1264.95,
    "addressId": "16-1"
  },
  {
    "id": "253",
    "month": "Julho",
    "year": "2025",
    "dueDate": "15/08/2025",
    "status": "paid",
    "amount": 1020.4,
    "addressId": "16-1"
  },
  {
    "id": "254",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "15/09/2025",
    "status": "paid",
    "amount": 947.59,
    "addressId": "16-1"
  },
  {
    "id": "255",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "15/10/2025",
    "status": "paid",
    "amount": 1059.95,
    "addressId": "16-1"
  },
  {
    "id": "256",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "15/11/2025",
    "status": "paid",
    "amount": 1094,
    "addressId": "16-1"
  },
  {
    "id": "257",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "15/11/2025",
    "status": "paid",
    "amount": 408,
    "addressId": "16-2"
  },
  {
    "id": "258",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "15/11/2025",
    "status": "paid",
    "amount": 358,
    "addressId": "16-3"
  },
  {
    "id": "259",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "15/11/2025",
    "status": "paid",
    "amount": 524,
    "addressId": "16-4"
  },
  {
    "id": "260",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "15/11/2025",
    "status": "paid",
    "amount": 670,
    "addressId": "16-5"
  },
  {
    "id": "261",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "15/11/2025",
    "status": "paid",
    "amount": 387,
    "addressId": "16-6"
  },
  {
    "id": "262",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "15/11/2025",
    "status": "paid",
    "amount": 454,
    "addressId": "16-7"
  },
  {
    "id": "263",
    "month": "Outubro",
    "year": "2024",
    "dueDate": "09/11/2024",
    "status": "paid",
    "amount": 717.92,
    "addressId": "17-1"
  },
  {
    "id": "264",
    "month": "Novembro",
    "year": "2024",
    "dueDate": "05/12/2024",
    "status": "paid",
    "amount": 662.15,
    "addressId": "17-1"
  },
  {
    "id": "265",
    "month": "Dezembro",
    "year": "2024",
    "dueDate": "15/01/2025",
    "status": "paid",
    "amount": 548.85,
    "addressId": "17-1"
  },
  {
    "id": "266",
    "month": "Janeiro",
    "year": "2025",
    "dueDate": "15/02/2025",
    "status": "paid",
    "amount": 772.65,
    "addressId": "17-1"
  },
  {
    "id": "267",
    "month": "Fevereiro",
    "year": "2025",
    "dueDate": "15/03/2025",
    "status": "paid",
    "amount": 723.97,
    "addressId": "17-1"
  },
  {
    "id": "268",
    "month": "Março",
    "year": "2025",
    "dueDate": "15/04/2025",
    "status": "paid",
    "amount": 540.45,
    "addressId": "17-1"
  },
  {
    "id": "269",
    "month": "Abril",
    "year": "2025",
    "dueDate": "15/05/2025",
    "status": "paid",
    "amount": 564.14,
    "addressId": "17-1"
  },
  {
    "id": "270",
    "month": "Maio",
    "year": "2025",
    "dueDate": "15/06/2025",
    "status": "paid",
    "amount": 672.76,
    "addressId": "17-1"
  },
  {
    "id": "271",
    "month": "Junho",
    "year": "2025",
    "dueDate": "15/07/2025",
    "status": "paid",
    "amount": 545.77,
    "addressId": "17-1"
  },
  {
    "id": "272",
    "month": "Julho",
    "year": "2025",
    "dueDate": "15/08/2025",
    "status": "paid",
    "amount": 548.58,
    "addressId": "17-1"
  },
  {
    "id": "273",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "15/09/2025",
    "status": "paid",
    "amount": 640.66,
    "addressId": "17-1"
  },
  {
    "id": "274",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "15/10/2025",
    "status": "paid",
    "amount": 544.61,
    "addressId": "17-1"
  },
  {
    "id": "275",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "14/11/2025",
    "status": "open",
    "amount": 637.5,
    "addressId": "17-1"
  },
  {
    "id": "276",
    "month": "Outubro",
    "year": "2024",
    "dueDate": "09/11/2024",
    "status": "paid",
    "amount": 463.41,
    "addressId": "18-1"
  },
  {
    "id": "277",
    "month": "Novembro",
    "year": "2024",
    "dueDate": "05/12/2024",
    "status": "paid",
    "amount": 513.22,
    "addressId": "18-1"
  },
  {
    "id": "278",
    "month": "Dezembro",
    "year": "2024",
    "dueDate": "15/01/2025",
    "status": "paid",
    "amount": 420.61,
    "addressId": "18-1"
  },
  {
    "id": "279",
    "month": "Janeiro",
    "year": "2025",
    "dueDate": "15/02/2025",
    "status": "paid",
    "amount": 588.54,
    "addressId": "18-1"
  },
  {
    "id": "280",
    "month": "Fevereiro",
    "year": "2025",
    "dueDate": "15/03/2025",
    "status": "paid",
    "amount": 450.79,
    "addressId": "18-1"
  },
  {
    "id": "281",
    "month": "Março",
    "year": "2025",
    "dueDate": "15/04/2025",
    "status": "paid",
    "amount": 478.13,
    "addressId": "18-1"
  },
  {
    "id": "282",
    "month": "Abril",
    "year": "2025",
    "dueDate": "15/05/2025",
    "status": "paid",
    "amount": 524.39,
    "addressId": "18-1"
  },
  {
    "id": "283",
    "month": "Maio",
    "year": "2025",
    "dueDate": "15/06/2025",
    "status": "paid",
    "amount": 594.84,
    "addressId": "18-1"
  },
  {
    "id": "284",
    "month": "Junho",
    "year": "2025",
    "dueDate": "15/07/2025",
    "status": "paid",
    "amount": 550.98,
    "addressId": "18-1"
  },
  {
    "id": "285",
    "month": "Julho",
    "year": "2025",
    "dueDate": "15/08/2025",
    "status": "paid",
    "amount": 545.58,
    "addressId": "18-1"
  },
  {
    "id": "286",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "15/09/2025",
    "status": "paid",
    "amount": 573.96,
    "addressId": "18-1"
  },
  {
    "id": "287",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "15/10/2025",
    "status": "paid",
    "amount": 408.33,
    "addressId": "18-1"
  },
  {
    "id": "288",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "15/11/2025",
    "status": "paid",
    "amount": 480,
    "addressId": "18-1"
  },
  {
    "id": "289",
    "month": "Outubro",
    "year": "2024",
    "dueDate": "09/11/2024",
    "status": "paid",
    "amount": 738.59,
    "addressId": "19-1"
  },
  {
    "id": "290",
    "month": "Novembro",
    "year": "2024",
    "dueDate": "05/12/2024",
    "status": "paid",
    "amount": 977.57,
    "addressId": "19-1"
  },
  {
    "id": "291",
    "month": "Dezembro",
    "year": "2024",
    "dueDate": "15/01/2025",
    "status": "paid",
    "amount": 1000.48,
    "addressId": "19-1"
  },
  {
    "id": "292",
    "month": "Janeiro",
    "year": "2025",
    "dueDate": "15/02/2025",
    "status": "paid",
    "amount": 857.78,
    "addressId": "19-1"
  },
  {
    "id": "293",
    "month": "Fevereiro",
    "year": "2025",
    "dueDate": "15/03/2025",
    "status": "paid",
    "amount": 1025.7,
    "addressId": "19-1"
  },
  {
    "id": "294",
    "month": "Março",
    "year": "2025",
    "dueDate": "15/04/2025",
    "status": "paid",
    "amount": 859.25,
    "addressId": "19-1"
  },
  {
    "id": "295",
    "month": "Abril",
    "year": "2025",
    "dueDate": "15/05/2025",
    "status": "paid",
    "amount": 845.45,
    "addressId": "19-1"
  },
  {
    "id": "296",
    "month": "Maio",
    "year": "2025",
    "dueDate": "15/06/2025",
    "status": "paid",
    "amount": 963.95,
    "addressId": "19-1"
  },
  {
    "id": "297",
    "month": "Junho",
    "year": "2025",
    "dueDate": "15/07/2025",
    "status": "paid",
    "amount": 1022.57,
    "addressId": "19-1"
  },
  {
    "id": "298",
    "month": "Julho",
    "year": "2025",
    "dueDate": "15/08/2025",
    "status": "paid",
    "amount": 901.04,
    "addressId": "19-1"
  },
  {
    "id": "299",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "15/09/2025",
    "status": "paid",
    "amount": 970,
    "addressId": "19-1"
  },
  {
    "id": "300",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "15/10/2025",
    "status": "paid",
    "amount": 774.76,
    "addressId": "19-1"
  },
  {
    "id": "301",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "15/11/2025",
    "status": "paid",
    "amount": 823,
    "addressId": "19-1"
  },
  {
    "id": "302",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "15/11/2025",
    "status": "paid",
    "amount": 418,
    "addressId": "19-2"
  },
  {
    "id": "303",
    "month": "Outubro",
    "year": "2024",
    "dueDate": "09/11/2024",
    "status": "paid",
    "amount": 775.91,
    "addressId": "20-1"
  },
  {
    "id": "304",
    "month": "Novembro",
    "year": "2024",
    "dueDate": "05/12/2024",
    "status": "paid",
    "amount": 837.29,
    "addressId": "20-1"
  },
  {
    "id": "305",
    "month": "Dezembro",
    "year": "2024",
    "dueDate": "15/01/2025",
    "status": "paid",
    "amount": 891.62,
    "addressId": "20-1"
  },
  {
    "id": "306",
    "month": "Janeiro",
    "year": "2025",
    "dueDate": "15/02/2025",
    "status": "paid",
    "amount": 1024,
    "addressId": "20-1"
  },
  {
    "id": "307",
    "month": "Fevereiro",
    "year": "2025",
    "dueDate": "15/03/2025",
    "status": "paid",
    "amount": 801.1,
    "addressId": "20-1"
  },
  {
    "id": "308",
    "month": "Março",
    "year": "2025",
    "dueDate": "15/04/2025",
    "status": "paid",
    "amount": 1049.23,
    "addressId": "20-1"
  },
  {
    "id": "309",
    "month": "Abril",
    "year": "2025",
    "dueDate": "15/05/2025",
    "status": "paid",
    "amount": 1048.02,
    "addressId": "20-1"
  },
  {
    "id": "310",
    "month": "Maio",
    "year": "2025",
    "dueDate": "15/06/2025",
    "status": "paid",
    "amount": 947.71,
    "addressId": "20-1"
  },
  {
    "id": "311",
    "month": "Junho",
    "year": "2025",
    "dueDate": "15/07/2025",
    "status": "paid",
    "amount": 1052.71,
    "addressId": "20-1"
  },
  {
    "id": "312",
    "month": "Julho",
    "year": "2025",
    "dueDate": "15/08/2025",
    "status": "paid",
    "amount": 932.99,
    "addressId": "20-1"
  },
  {
    "id": "313",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "15/09/2025",
    "status": "paid",
    "amount": 1013.94,
    "addressId": "20-1"
  },
  {
    "id": "314",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "15/10/2025",
    "status": "paid",
    "amount": 918.28,
    "addressId": "20-1"
  },
  {
    "id": "315",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "25/10/2025",
    "status": "open",
    "amount": 945,
    "addressId": "20-1"
  },
  {
    "id": "316",
    "month": "Novembro",
    "year": "2025",
    "dueDate": "15/12/2025",
    "status": "open",
    "amount": 900,
    "addressId": "20-1"
  },
  {
    "id": "317",
    "month": "Outubro",
    "year": "2024",
    "dueDate": "09/11/2024",
    "status": "paid",
    "amount": 392.48,
    "addressId": "21-1"
  },
  {
    "id": "318",
    "month": "Novembro",
    "year": "2024",
    "dueDate": "05/12/2024",
    "status": "paid",
    "amount": 331.65,
    "addressId": "21-1"
  },
  {
    "id": "319",
    "month": "Dezembro",
    "year": "2024",
    "dueDate": "15/01/2025",
    "status": "paid",
    "amount": 368.65,
    "addressId": "21-1"
  },
  {
    "id": "320",
    "month": "Janeiro",
    "year": "2025",
    "dueDate": "15/02/2025",
    "status": "paid",
    "amount": 311.41,
    "addressId": "21-1"
  },
  {
    "id": "321",
    "month": "Fevereiro",
    "year": "2025",
    "dueDate": "15/03/2025",
    "status": "paid",
    "amount": 380.42,
    "addressId": "21-1"
  },
  {
    "id": "322",
    "month": "Março",
    "year": "2025",
    "dueDate": "15/04/2025",
    "status": "paid",
    "amount": 311.21,
    "addressId": "21-1"
  },
  {
    "id": "323",
    "month": "Abril",
    "year": "2025",
    "dueDate": "15/05/2025",
    "status": "paid",
    "amount": 316.19,
    "addressId": "21-1"
  },
  {
    "id": "324",
    "month": "Maio",
    "year": "2025",
    "dueDate": "15/06/2025",
    "status": "paid",
    "amount": 343.23,
    "addressId": "21-1"
  },
  {
    "id": "325",
    "month": "Junho",
    "year": "2025",
    "dueDate": "15/07/2025",
    "status": "paid",
    "amount": 379.59,
    "addressId": "21-1"
  },
  {
    "id": "326",
    "month": "Julho",
    "year": "2025",
    "dueDate": "15/08/2025",
    "status": "paid",
    "amount": 319.3,
    "addressId": "21-1"
  },
  {
    "id": "327",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "15/09/2025",
    "status": "paid",
    "amount": 396.96,
    "addressId": "21-1"
  },
  {
    "id": "328",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "15/10/2025",
    "status": "paid",
    "amount": 305.05,
    "addressId": "21-1"
  },
  {
    "id": "329",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "25/10/2025",
    "status": "open",
    "amount": 340.2,
    "addressId": "21-1"
  },
  {
    "id": "330",
    "month": "Novembro",
    "year": "2025",
    "dueDate": "15/12/2025",
    "status": "open",
    "amount": 324,
    "addressId": "21-1"
  },
  {
    "id": "331",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "25/10/2025",
    "status": "open",
    "amount": 1089.9,
    "addressId": "21-2"
  },
  {
    "id": "332",
    "month": "Novembro",
    "year": "2025",
    "dueDate": "15/12/2025",
    "status": "open",
    "amount": 1038,
    "addressId": "21-2"
  },
  {
    "id": "333",
    "month": "Outubro",
    "year": "2024",
    "dueDate": "09/11/2024",
    "status": "paid",
    "amount": 460.45,
    "addressId": "22-1"
  },
  {
    "id": "334",
    "month": "Novembro",
    "year": "2024",
    "dueDate": "05/12/2024",
    "status": "paid",
    "amount": 497.96,
    "addressId": "22-1"
  },
  {
    "id": "335",
    "month": "Dezembro",
    "year": "2024",
    "dueDate": "15/01/2025",
    "status": "paid",
    "amount": 454.25,
    "addressId": "22-1"
  },
  {
    "id": "336",
    "month": "Janeiro",
    "year": "2025",
    "dueDate": "15/02/2025",
    "status": "paid",
    "amount": 428.12,
    "addressId": "22-1"
  },
  {
    "id": "337",
    "month": "Fevereiro",
    "year": "2025",
    "dueDate": "15/03/2025",
    "status": "paid",
    "amount": 541.19,
    "addressId": "22-1"
  },
  {
    "id": "338",
    "month": "Março",
    "year": "2025",
    "dueDate": "15/04/2025",
    "status": "paid",
    "amount": 519,
    "addressId": "22-1"
  },
  {
    "id": "339",
    "month": "Abril",
    "year": "2025",
    "dueDate": "15/05/2025",
    "status": "paid",
    "amount": 543.41,
    "addressId": "22-1"
  },
  {
    "id": "340",
    "month": "Maio",
    "year": "2025",
    "dueDate": "15/06/2025",
    "status": "paid",
    "amount": 527.06,
    "addressId": "22-1"
  },
  {
    "id": "341",
    "month": "Junho",
    "year": "2025",
    "dueDate": "15/07/2025",
    "status": "paid",
    "amount": 404.77,
    "addressId": "22-1"
  },
  {
    "id": "342",
    "month": "Julho",
    "year": "2025",
    "dueDate": "15/08/2025",
    "status": "paid",
    "amount": 505.01,
    "addressId": "22-1"
  },
  {
    "id": "343",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "15/09/2025",
    "status": "paid",
    "amount": 382.72,
    "addressId": "22-1"
  },
  {
    "id": "344",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "15/10/2025",
    "status": "paid",
    "amount": 418.86,
    "addressId": "22-1"
  },
  {
    "id": "345",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "09/09/2025",
    "status": "open",
    "amount": 485.1,
    "addressId": "22-1"
  },
  {
    "id": "346",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "09/10/2025",
    "status": "open",
    "amount": 463.05,
    "addressId": "22-1"
  },
  {
    "id": "347",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "03/11/2025",
    "status": "open",
    "amount": 441,
    "addressId": "22-1"
  },
  {
    "id": "348",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "09/09/2025",
    "status": "open",
    "amount": 1184.7,
    "addressId": "22-2"
  },
  {
    "id": "349",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "09/10/2025",
    "status": "open",
    "amount": 1130.85,
    "addressId": "22-2"
  },
  {
    "id": "350",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "03/11/2025",
    "status": "open",
    "amount": 1077,
    "addressId": "22-2"
  },
  {
    "id": "351",
    "month": "Outubro",
    "year": "2024",
    "dueDate": "09/11/2024",
    "status": "paid",
    "amount": 1026.61,
    "addressId": "23-1"
  },
  {
    "id": "352",
    "month": "Novembro",
    "year": "2024",
    "dueDate": "05/12/2024",
    "status": "paid",
    "amount": 1189.54,
    "addressId": "23-1"
  },
  {
    "id": "353",
    "month": "Dezembro",
    "year": "2024",
    "dueDate": "15/01/2025",
    "status": "paid",
    "amount": 1036.69,
    "addressId": "23-1"
  },
  {
    "id": "354",
    "month": "Janeiro",
    "year": "2025",
    "dueDate": "15/02/2025",
    "status": "paid",
    "amount": 935.75,
    "addressId": "23-1"
  },
  {
    "id": "355",
    "month": "Fevereiro",
    "year": "2025",
    "dueDate": "15/03/2025",
    "status": "paid",
    "amount": 958.86,
    "addressId": "23-1"
  },
  {
    "id": "356",
    "month": "Março",
    "year": "2025",
    "dueDate": "15/04/2025",
    "status": "paid",
    "amount": 1028.97,
    "addressId": "23-1"
  },
  {
    "id": "357",
    "month": "Abril",
    "year": "2025",
    "dueDate": "15/05/2025",
    "status": "paid",
    "amount": 1120.89,
    "addressId": "23-1"
  },
  {
    "id": "358",
    "month": "Maio",
    "year": "2025",
    "dueDate": "15/06/2025",
    "status": "paid",
    "amount": 1066.44,
    "addressId": "23-1"
  },
  {
    "id": "359",
    "month": "Junho",
    "year": "2025",
    "dueDate": "15/07/2025",
    "status": "paid",
    "amount": 968.37,
    "addressId": "23-1"
  },
  {
    "id": "360",
    "month": "Julho",
    "year": "2025",
    "dueDate": "15/08/2025",
    "status": "paid",
    "amount": 1034.53,
    "addressId": "23-1"
  },
  {
    "id": "361",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "15/09/2025",
    "status": "paid",
    "amount": 1102.77,
    "addressId": "23-1"
  },
  {
    "id": "362",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "15/10/2025",
    "status": "paid",
    "amount": 1324.12,
    "addressId": "23-1"
  },
  {
    "id": "363",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "25/10/2025",
    "status": "open",
    "amount": 1122.45,
    "addressId": "23-1"
  },
  {
    "id": "364",
    "month": "Novembro",
    "year": "2025",
    "dueDate": "15/12/2025",
    "status": "open",
    "amount": 1069,
    "addressId": "23-1"
  },
  {
    "id": "365",
    "month": "Outubro",
    "year": "2024",
    "dueDate": "09/11/2024",
    "status": "paid",
    "amount": 335.98,
    "addressId": "24-1"
  },
  {
    "id": "366",
    "month": "Novembro",
    "year": "2024",
    "dueDate": "05/12/2024",
    "status": "paid",
    "amount": 348.12,
    "addressId": "24-1"
  },
  {
    "id": "367",
    "month": "Dezembro",
    "year": "2024",
    "dueDate": "15/01/2025",
    "status": "paid",
    "amount": 364.47,
    "addressId": "24-1"
  },
  {
    "id": "368",
    "month": "Janeiro",
    "year": "2025",
    "dueDate": "15/02/2025",
    "status": "paid",
    "amount": 363.77,
    "addressId": "24-1"
  },
  {
    "id": "369",
    "month": "Fevereiro",
    "year": "2025",
    "dueDate": "15/03/2025",
    "status": "paid",
    "amount": 344.05,
    "addressId": "24-1"
  },
  {
    "id": "370",
    "month": "Março",
    "year": "2025",
    "dueDate": "15/04/2025",
    "status": "paid",
    "amount": 287.37,
    "addressId": "24-1"
  },
  {
    "id": "371",
    "month": "Abril",
    "year": "2025",
    "dueDate": "15/05/2025",
    "status": "paid",
    "amount": 269.55,
    "addressId": "24-1"
  },
  {
    "id": "372",
    "month": "Maio",
    "year": "2025",
    "dueDate": "15/06/2025",
    "status": "paid",
    "amount": 274.61,
    "addressId": "24-1"
  },
  {
    "id": "373",
    "month": "Junho",
    "year": "2025",
    "dueDate": "15/07/2025",
    "status": "paid",
    "amount": 312.46,
    "addressId": "24-1"
  },
  {
    "id": "374",
    "month": "Julho",
    "year": "2025",
    "dueDate": "15/08/2025",
    "status": "paid",
    "amount": 377.3,
    "addressId": "24-1"
  },
  {
    "id": "375",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "15/09/2025",
    "status": "paid",
    "amount": 341.28,
    "addressId": "24-1"
  },
  {
    "id": "376",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "15/10/2025",
    "status": "paid",
    "amount": 311.61,
    "addressId": "24-1"
  },
  {
    "id": "377",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "14/11/2025",
    "status": "open",
    "amount": 315.18,
    "addressId": "24-1"
  },
  {
    "id": "378",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "20/12/2025",
    "status": "open",
    "amount": 1062.84,
    "addressId": "24-2"
  },
  {
    "id": "379",
    "month": "Outubro",
    "year": "2024",
    "dueDate": "09/11/2024",
    "status": "paid",
    "amount": 509.71,
    "addressId": "25-1"
  },
  {
    "id": "380",
    "month": "Novembro",
    "year": "2024",
    "dueDate": "05/12/2024",
    "status": "paid",
    "amount": 463.76,
    "addressId": "25-1"
  },
  {
    "id": "381",
    "month": "Dezembro",
    "year": "2024",
    "dueDate": "15/01/2025",
    "status": "paid",
    "amount": 529.23,
    "addressId": "25-1"
  },
  {
    "id": "382",
    "month": "Janeiro",
    "year": "2025",
    "dueDate": "15/02/2025",
    "status": "paid",
    "amount": 530.87,
    "addressId": "25-1"
  },
  {
    "id": "383",
    "month": "Fevereiro",
    "year": "2025",
    "dueDate": "15/03/2025",
    "status": "paid",
    "amount": 577.15,
    "addressId": "25-1"
  },
  {
    "id": "384",
    "month": "Março",
    "year": "2025",
    "dueDate": "15/04/2025",
    "status": "paid",
    "amount": 484.55,
    "addressId": "25-1"
  },
  {
    "id": "385",
    "month": "Abril",
    "year": "2025",
    "dueDate": "15/05/2025",
    "status": "paid",
    "amount": 529.92,
    "addressId": "25-1"
  },
  {
    "id": "386",
    "month": "Maio",
    "year": "2025",
    "dueDate": "15/06/2025",
    "status": "paid",
    "amount": 573.45,
    "addressId": "25-1"
  },
  {
    "id": "387",
    "month": "Junho",
    "year": "2025",
    "dueDate": "15/07/2025",
    "status": "paid",
    "amount": 583.99,
    "addressId": "25-1"
  },
  {
    "id": "388",
    "month": "Julho",
    "year": "2025",
    "dueDate": "15/08/2025",
    "status": "paid",
    "amount": 485.86,
    "addressId": "25-1"
  },
  {
    "id": "389",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "15/09/2025",
    "status": "paid",
    "amount": 568.04,
    "addressId": "25-1"
  },
  {
    "id": "390",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "15/10/2025",
    "status": "paid",
    "amount": 502.33,
    "addressId": "25-1"
  },
  {
    "id": "391",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "15/11/2025",
    "status": "paid",
    "amount": 517,
    "addressId": "25-1"
  },
  {
    "id": "392",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "15/11/2025",
    "status": "paid",
    "amount": 1036,
    "addressId": "25-2"
  },
  {
    "id": "393",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "15/11/2025",
    "status": "paid",
    "amount": 854,
    "addressId": "25-3"
  },
  {
    "id": "394",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "15/11/2025",
    "status": "paid",
    "amount": 615,
    "addressId": "25-4"
  },
  {
    "id": "395",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "15/11/2025",
    "status": "paid",
    "amount": 883,
    "addressId": "25-5"
  },
  {
    "id": "396",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "15/11/2025",
    "status": "paid",
    "amount": 767,
    "addressId": "25-6"
  },
  {
    "id": "397",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "15/11/2025",
    "status": "paid",
    "amount": 796,
    "addressId": "25-7"
  },
  {
    "id": "398",
    "month": "Outubro",
    "year": "2024",
    "dueDate": "09/11/2024",
    "status": "paid",
    "amount": 950.08,
    "addressId": "26-1"
  },
  {
    "id": "399",
    "month": "Novembro",
    "year": "2024",
    "dueDate": "05/12/2024",
    "status": "paid",
    "amount": 989.77,
    "addressId": "26-1"
  },
  {
    "id": "400",
    "month": "Dezembro",
    "year": "2024",
    "dueDate": "15/01/2025",
    "status": "paid",
    "amount": 970.44,
    "addressId": "26-1"
  },
  {
    "id": "401",
    "month": "Janeiro",
    "year": "2025",
    "dueDate": "15/02/2025",
    "status": "paid",
    "amount": 1107.89,
    "addressId": "26-1"
  },
  {
    "id": "402",
    "month": "Fevereiro",
    "year": "2025",
    "dueDate": "15/03/2025",
    "status": "paid",
    "amount": 909.21,
    "addressId": "26-1"
  },
  {
    "id": "403",
    "month": "Março",
    "year": "2025",
    "dueDate": "15/04/2025",
    "status": "paid",
    "amount": 1020.18,
    "addressId": "26-1"
  },
  {
    "id": "404",
    "month": "Abril",
    "year": "2025",
    "dueDate": "15/05/2025",
    "status": "paid",
    "amount": 1080,
    "addressId": "26-1"
  },
  {
    "id": "405",
    "month": "Maio",
    "year": "2025",
    "dueDate": "15/06/2025",
    "status": "paid",
    "amount": 1197.09,
    "addressId": "26-1"
  },
  {
    "id": "406",
    "month": "Junho",
    "year": "2025",
    "dueDate": "15/07/2025",
    "status": "paid",
    "amount": 1019.57,
    "addressId": "26-1"
  },
  {
    "id": "407",
    "month": "Julho",
    "year": "2025",
    "dueDate": "15/08/2025",
    "status": "paid",
    "amount": 1095.03,
    "addressId": "26-1"
  },
  {
    "id": "408",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "15/09/2025",
    "status": "paid",
    "amount": 947.47,
    "addressId": "26-1"
  },
  {
    "id": "409",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "15/10/2025",
    "status": "paid",
    "amount": 969.55,
    "addressId": "26-1"
  },
  {
    "id": "410",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "15/11/2025",
    "status": "paid",
    "amount": 975,
    "addressId": "26-1"
  },
  {
    "id": "411",
    "month": "Outubro",
    "year": "2024",
    "dueDate": "09/11/2024",
    "status": "paid",
    "amount": 456.13,
    "addressId": "27-1"
  },
  {
    "id": "412",
    "month": "Novembro",
    "year": "2024",
    "dueDate": "05/12/2024",
    "status": "paid",
    "amount": 385.67,
    "addressId": "27-1"
  },
  {
    "id": "413",
    "month": "Dezembro",
    "year": "2024",
    "dueDate": "15/01/2025",
    "status": "paid",
    "amount": 506.47,
    "addressId": "27-1"
  },
  {
    "id": "414",
    "month": "Janeiro",
    "year": "2025",
    "dueDate": "15/02/2025",
    "status": "paid",
    "amount": 529.4,
    "addressId": "27-1"
  },
  {
    "id": "415",
    "month": "Fevereiro",
    "year": "2025",
    "dueDate": "15/03/2025",
    "status": "paid",
    "amount": 506.97,
    "addressId": "27-1"
  },
  {
    "id": "416",
    "month": "Março",
    "year": "2025",
    "dueDate": "15/04/2025",
    "status": "paid",
    "amount": 440.7,
    "addressId": "27-1"
  },
  {
    "id": "417",
    "month": "Abril",
    "year": "2025",
    "dueDate": "15/05/2025",
    "status": "paid",
    "amount": 542.8,
    "addressId": "27-1"
  },
  {
    "id": "418",
    "month": "Maio",
    "year": "2025",
    "dueDate": "15/06/2025",
    "status": "paid",
    "amount": 529.14,
    "addressId": "27-1"
  },
  {
    "id": "419",
    "month": "Junho",
    "year": "2025",
    "dueDate": "15/07/2025",
    "status": "paid",
    "amount": 401.63,
    "addressId": "27-1"
  },
  {
    "id": "420",
    "month": "Julho",
    "year": "2025",
    "dueDate": "15/08/2025",
    "status": "paid",
    "amount": 436.59,
    "addressId": "27-1"
  },
  {
    "id": "421",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "15/09/2025",
    "status": "paid",
    "amount": 521.07,
    "addressId": "27-1"
  },
  {
    "id": "422",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "15/10/2025",
    "status": "paid",
    "amount": 522.13,
    "addressId": "27-1"
  },
  {
    "id": "423",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "14/11/2025",
    "status": "open",
    "amount": 459,
    "addressId": "27-1"
  },
  {
    "id": "424",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "20/12/2025",
    "status": "open",
    "amount": 817.02,
    "addressId": "27-2"
  },
  {
    "id": "425",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "20/12/2025",
    "status": "open",
    "amount": 495.72,
    "addressId": "27-3"
  },
  {
    "id": "426",
    "month": "Outubro",
    "year": "2024",
    "dueDate": "09/11/2024",
    "status": "paid",
    "amount": 607.43,
    "addressId": "28-1"
  },
  {
    "id": "427",
    "month": "Novembro",
    "year": "2024",
    "dueDate": "05/12/2024",
    "status": "paid",
    "amount": 512.55,
    "addressId": "28-1"
  },
  {
    "id": "428",
    "month": "Dezembro",
    "year": "2024",
    "dueDate": "15/01/2025",
    "status": "paid",
    "amount": 485.21,
    "addressId": "28-1"
  },
  {
    "id": "429",
    "month": "Janeiro",
    "year": "2025",
    "dueDate": "15/02/2025",
    "status": "paid",
    "amount": 566.02,
    "addressId": "28-1"
  },
  {
    "id": "430",
    "month": "Fevereiro",
    "year": "2025",
    "dueDate": "15/03/2025",
    "status": "paid",
    "amount": 486.54,
    "addressId": "28-1"
  },
  {
    "id": "431",
    "month": "Março",
    "year": "2025",
    "dueDate": "15/04/2025",
    "status": "paid",
    "amount": 642.6,
    "addressId": "28-1"
  },
  {
    "id": "432",
    "month": "Abril",
    "year": "2025",
    "dueDate": "15/05/2025",
    "status": "paid",
    "amount": 516.64,
    "addressId": "28-1"
  },
  {
    "id": "433",
    "month": "Maio",
    "year": "2025",
    "dueDate": "15/06/2025",
    "status": "paid",
    "amount": 564.49,
    "addressId": "28-1"
  },
  {
    "id": "434",
    "month": "Junho",
    "year": "2025",
    "dueDate": "15/07/2025",
    "status": "paid",
    "amount": 573.92,
    "addressId": "28-1"
  },
  {
    "id": "435",
    "month": "Julho",
    "year": "2025",
    "dueDate": "15/08/2025",
    "status": "paid",
    "amount": 652.15,
    "addressId": "28-1"
  },
  {
    "id": "436",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "15/09/2025",
    "status": "paid",
    "amount": 447.16,
    "addressId": "28-1"
  },
  {
    "id": "437",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "15/10/2025",
    "status": "paid",
    "amount": 522.19,
    "addressId": "28-1"
  },
  {
    "id": "438",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "15/11/2025",
    "status": "paid",
    "amount": 522,
    "addressId": "28-1"
  },
  {
    "id": "439",
    "month": "Outubro",
    "year": "2024",
    "dueDate": "09/11/2024",
    "status": "paid",
    "amount": 651.73,
    "addressId": "29-1"
  },
  {
    "id": "440",
    "month": "Novembro",
    "year": "2024",
    "dueDate": "05/12/2024",
    "status": "paid",
    "amount": 746.77,
    "addressId": "29-1"
  },
  {
    "id": "441",
    "month": "Dezembro",
    "year": "2024",
    "dueDate": "15/01/2025",
    "status": "paid",
    "amount": 612.57,
    "addressId": "29-1"
  },
  {
    "id": "442",
    "month": "Janeiro",
    "year": "2025",
    "dueDate": "15/02/2025",
    "status": "paid",
    "amount": 644.95,
    "addressId": "29-1"
  },
  {
    "id": "443",
    "month": "Fevereiro",
    "year": "2025",
    "dueDate": "15/03/2025",
    "status": "paid",
    "amount": 709.94,
    "addressId": "29-1"
  },
  {
    "id": "444",
    "month": "Março",
    "year": "2025",
    "dueDate": "15/04/2025",
    "status": "paid",
    "amount": 647.1,
    "addressId": "29-1"
  },
  {
    "id": "445",
    "month": "Abril",
    "year": "2025",
    "dueDate": "15/05/2025",
    "status": "paid",
    "amount": 629.09,
    "addressId": "29-1"
  },
  {
    "id": "446",
    "month": "Maio",
    "year": "2025",
    "dueDate": "15/06/2025",
    "status": "paid",
    "amount": 670.95,
    "addressId": "29-1"
  },
  {
    "id": "447",
    "month": "Junho",
    "year": "2025",
    "dueDate": "15/07/2025",
    "status": "paid",
    "amount": 598.16,
    "addressId": "29-1"
  },
  {
    "id": "448",
    "month": "Julho",
    "year": "2025",
    "dueDate": "15/08/2025",
    "status": "paid",
    "amount": 692.34,
    "addressId": "29-1"
  },
  {
    "id": "449",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "15/09/2025",
    "status": "paid",
    "amount": 690.17,
    "addressId": "29-1"
  },
  {
    "id": "450",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "15/10/2025",
    "status": "paid",
    "amount": 544.37,
    "addressId": "29-1"
  },
  {
    "id": "451",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "20/12/2025",
    "status": "open",
    "amount": 624.24,
    "addressId": "29-1"
  },
  {
    "id": "452",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "12/11/2025",
    "status": "open",
    "amount": 949.62,
    "addressId": "29-2"
  },
  {
    "id": "453",
    "month": "Outubro",
    "year": "2024",
    "dueDate": "09/11/2024",
    "status": "paid",
    "amount": 454.04,
    "addressId": "30-1"
  },
  {
    "id": "454",
    "month": "Novembro",
    "year": "2024",
    "dueDate": "05/12/2024",
    "status": "paid",
    "amount": 412.42,
    "addressId": "30-1"
  },
  {
    "id": "455",
    "month": "Dezembro",
    "year": "2024",
    "dueDate": "15/01/2025",
    "status": "paid",
    "amount": 468.01,
    "addressId": "30-1"
  },
  {
    "id": "456",
    "month": "Janeiro",
    "year": "2025",
    "dueDate": "15/02/2025",
    "status": "paid",
    "amount": 466.86,
    "addressId": "30-1"
  },
  {
    "id": "457",
    "month": "Fevereiro",
    "year": "2025",
    "dueDate": "15/03/2025",
    "status": "paid",
    "amount": 459.89,
    "addressId": "30-1"
  },
  {
    "id": "458",
    "month": "Março",
    "year": "2025",
    "dueDate": "15/04/2025",
    "status": "paid",
    "amount": 499.25,
    "addressId": "30-1"
  },
  {
    "id": "459",
    "month": "Abril",
    "year": "2025",
    "dueDate": "15/05/2025",
    "status": "paid",
    "amount": 503.45,
    "addressId": "30-1"
  },
  {
    "id": "460",
    "month": "Maio",
    "year": "2025",
    "dueDate": "15/06/2025",
    "status": "paid",
    "amount": 374.1,
    "addressId": "30-1"
  },
  {
    "id": "461",
    "month": "Junho",
    "year": "2025",
    "dueDate": "15/07/2025",
    "status": "paid",
    "amount": 419.37,
    "addressId": "30-1"
  },
  {
    "id": "462",
    "month": "Julho",
    "year": "2025",
    "dueDate": "15/08/2025",
    "status": "paid",
    "amount": 466.69,
    "addressId": "30-1"
  },
  {
    "id": "463",
    "month": "Agosto",
    "year": "2025",
    "dueDate": "15/09/2025",
    "status": "paid",
    "amount": 450.88,
    "addressId": "30-1"
  },
  {
    "id": "464",
    "month": "Setembro",
    "year": "2025",
    "dueDate": "15/10/2025",
    "status": "paid",
    "amount": 377.41,
    "addressId": "30-1"
  },
  {
    "id": "465",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "12/11/2025",
    "status": "open",
    "amount": 431.46,
    "addressId": "30-1"
  },
  {
    "id": "466",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "20/12/2025",
    "status": "open",
    "amount": 818.04,
    "addressId": "30-2"
  },
  {
    "id": "467",
    "month": "Outubro",
    "year": "2025",
    "dueDate": "14/11/2025",
    "status": "open",
    "amount": 473.28,
    "addressId": "30-3"
  }
];
