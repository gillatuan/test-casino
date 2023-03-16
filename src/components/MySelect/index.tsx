import { Select, Space } from 'antd';
import { IMySelect } from './types';

import SelectArrow from 'src/assets/icon/select-arrow.svg';
import Image from 'next/image';

export const MySelect = (props: IMySelect) => {
  const {
    allowClear = false,
    className,
    defaultValue,
    label,
    labelStyle,
    mode = undefined,
    options,
    placeholder = 'Please select',
    selectClassName,
    selectStyle = { width: '100%' },
    value,
    onChange
  } = props;

  return (
    <div className={className}>
      {label && <p className={labelStyle}>{label}</p>}
      <Select
        allowClear={allowClear}
        className={selectClassName}
        mode={mode}
        defaultValue={defaultValue}
        options={options}
        placeholder={placeholder}
        style={selectStyle}
        suffixIcon={<Image src={SelectArrow} alt='select arrow' />}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
