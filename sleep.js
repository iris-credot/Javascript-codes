//  function that returns the hours slept on each day
const getSleepHours = day => {
    if (day === 'Monday') {
        return 6;
      } 
      else if (day === 'Tuesday') {
        return 7;
      }
      else if (day === 'Wednesday') {
        return 8;
      }
      else if (day === 'Thursday') {
        return 4;
      }
      else if (day === 'Friday') {
        return 9;
      }
      else if (day === 'Saturday') {
        return 10;
      }
      else if (day === 'Sunday') {
        return 20;
      }
};
// total hours slept in a week
 const getActualSleepHours = () =>{
    return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday') ;
 };

 // calculating ideal hours
 const getIdealSleepHours = () => {
    const idealHours = 9;
    return idealHours * 7;
  };
  // calculating sleep debt
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
        console.log('The user got the perfect amount of sleep .');
      } else if (actualSleepHours > idealSleepHours) {
        console.log('The user got '+(actualSleepHours - idealSleepHours)+' hour(s) more so you slept than needed.');
      } else {
        console.log('The user got ' +(idealSleepHours - actualSleepHours)+ ' hour(s) so you should get some rest.');
      }
      
};

// calling the fnction
  calculateSleepDebt();