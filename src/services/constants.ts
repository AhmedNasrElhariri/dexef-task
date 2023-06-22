import { CodeAndAccount, Item } from "../common/interfaces";

export const items: Array<Item> = [
  {
    ID: "0919bb80-523e-46eb-b433-5e3536430dfe",
    code: "A10",
    accountName: "NNN-MMM",
    debit: 150,
    credit: 0,
    memo: "pay something",
  },
  {
    ID: "5b363969-b4b7-48f8-a6e8-bdf7ec50deb0",
    code: "111",
    accountName: "BBB-OOO",
    debit: 150,
    credit: 200,
    memo: "pay something",
  },
];

export const CODES_ACCOUNTS: Array<CodeAndAccount> = [
  { code: "111", accountName: "BBB-OOO" },
  { code: "A10", accountName: "NNN-MMM" },
  { code: "C200", accountName: "KNM-MISR" },
  { code: "R33", accountName: "BANK1" },
  { code: "C320", accountName: "BANK MISR" },
  { code: "D112", accountName: "CIB BANK" },
];
