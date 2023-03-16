import { Input } from 'antd';
import { IMyInput } from './types';

export const MyInput = (props: IMyInput) => {
  const {
    addonAfter,
    addonBefore,
    className,
    inputStyle,
    label,
    labelStyle,
    name,
    placeholder,
    prefix,
    required = false,
    suffix,
    type = 'text',
    value,
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
      <Input
        addonAfter={addonAfter}
        addonBefore={addonBefore}
        className={inputStyle}
        name={name}
        placeholder={placeholder}
        prefix={prefix}
        suffix={suffix}
        type={type}
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </div>
  );
};
