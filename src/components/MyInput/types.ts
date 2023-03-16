import { ReactNode } from 'react';

export interface IMyInput {
  addonAfter?: ReactNode;
  addonBefore?: ReactNode;
  className?: string;
  inputStyle?: string;
  label?: string;
  labelStyle?: string;
  name: string;
  placeholder?: string;
  prefix?: ReactNode;
  required?: boolean;
  suffix?: ReactNode;
  type?: string;
  value?: string | number | '';
  onChange: (val: string | number) => void;
}
