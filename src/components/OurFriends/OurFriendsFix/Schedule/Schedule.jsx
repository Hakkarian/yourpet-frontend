import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { List, Item, Wrap, Wrapper } from './Schedule.styled';

export const Schedule = ({ workDays }) => {
  const [isShow, setIsShow] = useState(false);
  const days = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  let date = new Date();

  const getWeekDay = date => {
    return days[date.getDay()];
  };

  const newWorkDays = [...workDays].map((workDay, idx) => {
    return { ...workDay, dayOfWeek: days[idx] };
  });

  const handleToggle = () => {
    setIsShow(!isShow);
  };
  const workOurs = data => {
    const currentDay = getWeekDay(date);

    for (let day of data) {
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
                    <p>closed today</p>
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

Schedule.propTypes = {
  workDays: PropTypes.arrayOf(
    PropTypes.shape({
      isOpen: PropTypes.bool.isRequired,
      from: PropTypes.string,
      to: PropTypes.string,
    })
  ),
};
