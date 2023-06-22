export interface Item {
  ID: string | null;
  code: string;
  accountName: string;
  debit: number;
  credit: number;
  memo: string;
}
export interface CodeAndAccount {
  code: string;
  accountName: string;
}
export interface code {
  CODE: string;
  ACCOUNT_NAME: string;
}
export interface accountName {
  ID: string;
  Name: string;
}
