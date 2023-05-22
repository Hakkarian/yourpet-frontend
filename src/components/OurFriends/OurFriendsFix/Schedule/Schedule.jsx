import React, { useState } from 'react';

import { List, Item, Wrap, Wrapper } from './Schedule.styled';

export const Schedule = ({ workDays }) => {
  const [isShow, setIsShow] = useState(false);
  const days = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  let date = new Date();

  function getWeekDay(date) {
    return days[date.getDay()];
  }

  const newWorkDays = [...workDays].map((workDay, idx) => {
    return { ...workDay, dayOfWeek: days[idx] };
  });

  const handleToggle = () => {
    setIsShow(!isShow);
  };
  const workOurs = data => {
    const currentDay = getWeekDay(date);
    console.log('currentDay--->', currentDay);
    for (let day of data) {
      console.log('WorkDay--->', day.dayOfWeek);
      if (currentDay === day.dayOfWeek && day.isOpen) {
        return `${day.from} - ${day.to}`;
      }
      if (currentDay === day.dayOfWeek && !day.isOpen) {
        return 'closed';
      }
    }
  };

  return (
    <Wrapper>
      <button type="button" onClick={handleToggle}>
        {workOurs(newWorkDays)}
      </button>
      {isShow && (
        <List>
          {newWorkDays.map(({ isOpen, from, to, dayOfWeek }) => (
            <Item key={dayOfWeek}>
              {isShow && (
                <Wrap>
                  <div>
                    <p>{dayOfWeek}</p>
                  </div>

                  {!isOpen ? (
                    <p>closed</p>
                  ) : (
                    <p>
                      {[from]} - {[to]}
                    </p>
                  )}
                </Wrap>
              )}
            </Item>
          ))}
        </List>
      )}
    </Wrapper>
  );
};
