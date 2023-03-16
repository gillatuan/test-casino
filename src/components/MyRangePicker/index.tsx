import { DatePicker, Space } from 'antd'
import { IMyRangePicker, RangeValue } from './types'

const { RangePicker } = DatePicker

export const MyRangePicker = (props: IMyRangePicker) => {
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
