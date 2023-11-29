import React, { useState } from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import './Calender.scss'; // 스타일 파일을 불러옵니다.
import { useRecoilState } from "recoil";
import { startDateState, endDateState } from "../../../recoil/atoms/loginState";

const DateCalendarFormProps = () => {
  // const [startValue, setStartValue] = useState(dayjs('2023-11-17'));
  // const [endValue, setEndValue] = useState(dayjs('2023-11-20'));
  const [startDate, setStartDate] = useRecoilState(startDateState); //useState와 거의 비슷한 사용법
  // const defaultDate1 = dayjs('2023-11-17');
  // const defaultDate2 = dayjs('2023-11-20');

  return (
    <div className="two-calendars-container">
      <div className="calendar-container">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            // defaultValue={startValue} 
            views={['year', 'month', 'day']}
            value={dayjs(startDate)} 
            onChange={(newValue) => setStartDate(newValue.format('YYYY-MM-DD'))}
            // onChange={(newValue) => console.log(newValue.toDate())}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
};

export default DateCalendarFormProps;
