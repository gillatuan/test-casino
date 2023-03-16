import { CSSProperties, ReactNode } from 'react';

export type TSelectOption = {
  label: string;
  value: string;
};
export interface OptionType {
  disabled?: boolean;
  [name: string]: any;
}
export interface IMySelect {
  allowClear?: boolean;
  className?: string;
  defaultValue?: string | number | null | undefined;
  label?: string;
  labelStyle?: string;
  mode?: 'multiple' | 'tags';
  name?: string;
  options: TSelectOption[];
  placeholder?: string;
  selectClassName?: string;
  selectStyle?: CSSProperties;
  value?: string[] | number[] | [] | any;
  onChange: (value: number | string, option: OptionType | OptionType[]) => void;
}
