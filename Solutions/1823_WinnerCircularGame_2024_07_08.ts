/**https://leetcode.com/problems/find-the-winner-of-the-circular-game/description/?envType=daily-question&envId=2024-07-08
 * 
 * There are n friends that are playing a game. The friends are sitting in a circle and are numbered from 1 to n in clockwise order. More formally, moving clockwise from the ith friend brings you to the (i+1)th friend for 1 <= i < n, and moving clockwise from the nth friend brings you to the 1st friend.

The rules of the game are as follows:

Start at the 1st friend.
Count the next k friends in the clockwise direction including the friend you started at. The counting wraps around the circle and may count some friends more than once.
The last friend you counted leaves the circle and loses the game.
If there is still more than one friend in the circle, go back to step 2 starting from the friend immediately clockwise of the friend who just lost and repeat.
Else, the last friend in the circle wins the game.
Given the number of friends, n, and an integer k, return the winner of the game.
 */

function findTheWinner(n: number, k: number): number {
  const players = Array.from({ length: n }, (elem, idx) => idx + 1);
  let startIdx = 0;
  while (players.length > 1) {
    //get the index to splice out; where we are starting from, move by offset k-1 (since the steps are also 1-indexed), modulo the remaining player array length
    const eliminee = (startIdx + k - 1) % players.length;
    console.log(eliminee, players[eliminee]);
    //eliminate one player at that index
    players.splice(eliminee, 1);
    //next loop we start at that index; we can imagine the player one spot clockwise slotting in to that spot
    startIdx = eliminee;
  }
  return players[0];
}
