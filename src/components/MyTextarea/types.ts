export interface IMyTextarea {
  className?: string;
  inputStyle?: string;
  label?: string;
  labelStyle?: string;
  maxLength?: number;
  name: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  value?: string | number | '';
  onChange: (val: string | number) => void;
}
