import { DatePicker, Space } from 'antd'
import { memo } from 'react'
import { IMyRangePicker, RangeValue } from './types'

const { RangePicker } = DatePicker

const MyRangePickerMomoize = (props: IMyRangePicker) => {
  const { name, onChange } = props
  return (
    <>
      <RangePicker
        name={name}
        onChange={(values: RangeValue<any>, formatString: [string, string]) => onChange(values, formatString)}
      />
    </>
  )
}

export const MyRangePicker = memo(MyRangePickerMomoize)
