import * as React from "react"
import { DateRange, SelectRangeEventHandler } from "react-day-picker"
import { Calendar } from "@/components/ui/calendar"

type DatePickerWithRangeProps = {
  field: {
    value: DateRange
    onChange: (value: DateRange) => void
  }
}

export function DatePickerWithRange({
  field,
}: DatePickerWithRangeProps) {

  const [date, setDate] = React.useState<DateRange>(field.value)
  const handleOnChange: SelectRangeEventHandler = (range) => {
    if (range) {
      field.onChange(range)
      setDate(range)
    }
  }

  return (
    <div className={"grid gap-2"}>
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleOnChange}
            numberOfMonths={1}
          />
    </div>
  )
}