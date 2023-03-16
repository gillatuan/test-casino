export declare type EventValue<DateType> = DateType | null
export declare type RangeValue<DateType> = [EventValue<DateType>, EventValue<DateType>] | null

export interface IMyRangePicker {
  name?: string
  onChange: (dates: any, dateStrings: [string, string]) => void
}
