import React, { useState } from 'react';
import Announcment from "../components/Announcment/Announcment";
import Navbar from "../components/Navbar/Navbar";
import MenuClient from '../components/Menu/MenuClient';
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