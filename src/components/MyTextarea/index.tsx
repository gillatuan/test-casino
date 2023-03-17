import { Input } from 'antd';
import { IMyTextarea } from './types';

const { TextArea } = Input;

export const MyTextarea = (props: IMyTextarea) => {
  const {
    className,
    inputStyle,
    label,
    labelStyle,
    maxLength,
    name,
    placeholder,
    required = false,
    rows = 4,
    onChange
  } = props;

  return (
    <div className={className}>
      {label && (
        <p className={labelStyle}>
          {label}
          {required && <span className='required'> *</span>}
        </p>
      )}
      <TextArea
        className={inputStyle}
        maxLength={maxLength}
        name={name}
        placeholder={placeholder}
        rows={rows}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </div>
  );
};
