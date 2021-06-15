// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const measureKevin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: '2',
  };
  console.table(measurement);
  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  const kevin = measurement.value + 273;
  return kevin;
};

console.log(measureKevin());
