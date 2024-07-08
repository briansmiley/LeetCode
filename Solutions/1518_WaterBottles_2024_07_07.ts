/**https://leetcode.com/problems/water-bottles/description/?envType=daily-question&envId=2024-07-07
 * There are numBottles water bottles that are initially full of water. You can exchange numExchange empty water bottles from the market with one full water bottle.

The operation of drinking a full water bottle turns it into an empty bottle.

Given the two integers numBottles and numExchange, return the maximum number of water bottles you can drink.
 */

function numWaterBottles(numBottles: number, numExchange: number): number {
  let drunk = numBottles;
  let emptyRemaining = drunk;
  //continue drinkning until we dont have enough empty left to exchange after a binge
  while (emptyRemaining >= numExchange) {
    const newFullBottles = Math.floor(emptyRemaining / numExchange);
    drunk += newFullBottles; //drink the bottles we exchanged for
    emptyRemaining = newFullBottles + (emptyRemaining % numExchange);
    console.log(
      `Exchanged for and drank ${newFullBottles} bottles, ${emptyRemaining} empties left`
    );
  }
  return drunk;
}
