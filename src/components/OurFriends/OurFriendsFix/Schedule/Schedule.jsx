import React, { useState } from 'react';

import { List, Item } from './Schedule.styled';

export const Schedule = ({ workDays }) => {
  const [isShow, setIsShow] = useState(false);

  const handleToggle = () => {
    setIsShow(!isShow);
  };

  const days = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  const newWorkDays = [...workDays].map((workDay, idx) => {
    return { ...workDay, dayOfWeek: days[idx] };
  });

  console.log('newWorkDays--->', newWorkDays);

  return (
    <div onClick={handleToggle}>
      <List>
        {newWorkDays.map(({ isOpen, from, to, dayOfWeek }) => (
          <Item key={dayOfWeek}>
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
          </Item>
        ))}
      </List>
    </div>
  );
};
// const TimePicker = ({ timeOptions, menuZIndex }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   const day = new Date();
//   const dayOfWeek = day.getDay();

//   const currentDayWorkHours = () => {
//     if (timeOptions && timeOptions.length > 0) {
//       if (timeOptions[dayOfWeek]?.isOpen) {
//         return `${timeOptions[dayOfWeek].from} - ${timeOptions[dayOfWeek].to}`;
//       } else {
//         return 'CLOSED';
//       }
//     }
//     return 'CLOSED';
//   };

//   if (!timeOptions || timeOptions.length === 0) {
//     return <div className={css.closed}>CLOSED</div>;
//   }

//   return (
//     <div className={css.timePicker}>
//       <div className={css.time} onClick={handleToggle}>
//         {currentDayWorkHours()}
//       </div>
//       {isOpen && (
//         <ul className={css.menu} style={{ zIndex: menuZIndex }}>
//           {timeOptions.map((option, index) => (
//             <li
//               className={index === dayOfWeek - 1 ? css.currentDay : ''}
//               key={index}
//             >
//               <div className={css.dayOfWeek}>{weekDays[index]} </div>
//               <div className={css.workTime}>
//                 {option.isOpen ? `${option.from} - ${option.to}` : 'CLOSED'}
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };
