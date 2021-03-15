/*
Fuel Calculator solution


In this kata you will have to write a function that takes litres and pricePerLitre as arguments. Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the toal cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

Good Luck!
*/

function fuelPrice(litres, pricePerLiter) {

  let result = litres * pricePerLiter;

  switch(true) {
    case litres >= 10:
        result -= (0.25 * litres);
        console.log("When litres >= 10, the result equals " + result);
        break;
    case litres >= 8:
        result -= (0.20 * litres);
        console.log("When litres >= 8, the result equals " + result);
        break;
    case litres >= 6:
        result -= (0.15 * litres);
        console.log("When litres >= 6, the result equals " + result);
        break;
    case litres >= 4:
        result -= (0.10 * litres);
        console.log("When litres >= 4, the result equals " + result);
        break;
    case litres >= 2:
        result -= (0.05 * litres);
        console.log("When litres >= 2, the result equals " + result);
        break;
  }
  console.log(typeof result);

  return Number.parseFloat(result.toFixed(2));result;
}
