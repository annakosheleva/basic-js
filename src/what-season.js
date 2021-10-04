import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason( date ) {
  if (!date) {
    return "Unable to determine the time of year!";
  }

  try {
    date.getTime();
  } catch (e) {
    throw new Error("Invalid date!");
  }

  let month = date.getMonth();
  const season = (month) => {
    if ([0, 1, 11].includes(month)) {
      return "winter";
    } else if ([2, 3, 4].includes(month)) {
      return "spring";
    } else if ([5, 6, 7].includes(month)) {
      return "summer";
    } else if ([8, 9, 10].includes(month)) {
      return "autumn";
    }
  };
  return season(month);
}