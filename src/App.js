import React from 'react';
import './App.css';
import BigCalendar from 'react-big-calendar-like-google';
import moment from 'moment';
import { events } from './events'

BigCalendar.momentLocalizer(moment);

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

function App() {

  return (
    <div className="App">
      <BigCalendar
        events={events}
        views={allViews}
        step={60}
        defaultDate={new Date()}
      />
    </div>
  );
}

export default App;
