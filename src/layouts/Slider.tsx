import { Slider } from 'antd';
import React from 'react';

type Props = {
  minLabel?: string;
  maxLabel?: string;
  value?: number | [number, number];
  defaultValue?: number | [number, number];
} & React.ComponentProps<typeof Slider>;

const AppSlider = ({ minLabel, maxLabel, value, ...rest }: Props) => {
  return (
    <div>
      <Slider className='app-slider' {...rest} />
      <div className='flex items-center'>
        <p className='text-[13px] leading-[13px] text-[#4A4754]'>{minLabel}</p>
        <p className='text-[13px] leading-[13px] text-[#4A4754] ml-auto'>{maxLabel}</p>
      </div>
    </div>
  );
};

export default AppSlider;
