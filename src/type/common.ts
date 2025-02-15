import * as React from 'react';

export interface SideBarProps {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
  onClick: () => void;
}

export type selectOption = {
  name: string;
  value: string;
};

export type TableHeadType = {
  key: string;
  label: string;
  type: CellType;
  action?: any;
  options?: selectOption[];
};

export enum CellType {
  ROW = 'ROW',
  STRING = 'STRING',
  INFO = 'INFO',
  NUMBER = 'NUMBER',
  FLOAT = 'FLOAT',
  MOBILE = 'MOBILE',
  PRICE = 'PRICE',
  STATUS = 'STATUS',
  DATE = 'DATE',
  REGISTER_DATE = 'REGISTER_DATE',
  TEST = 'TEST',
  ENUM = 'ENUM',
  ACTION = 'ACTION',
}

export type StatusTypes = '0' | '1';
