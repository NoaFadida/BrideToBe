import React, { useState } from 'react';
import DatePicker from 'react-date-picker';

const NewMeeting = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <DatePicker value={date} onChange={setDate}/>
    </div>
  );
};

export default NewMeeting;