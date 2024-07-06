/**https://leetcode.com/problems/pass-the-pillow/description/?envType=daily-question&envId=2024-07-06
 * There are n people standing in a line labeled from 1 to n. The first person in the line is holding a pillow initially. Every second, the person holding the pillow passes it to the next person standing in the line. Once the pillow reaches the end of the line, the direction changes, and people continue passing the pillow in the opposite direction.

For example, once the pillow reaches the nth person they pass it to the n - 1th person, then to the n - 2th person and so on.
Given the two positive integers n and time, return the index of the person holding the pillow after time seconds.
 */

function passThePillow(n: number, time: number): number {
  //gets back to start at every time t % 2n - 2
  //hits the end at %n - 1

  const passesFromStart = time % (2 * n - 2);
  const stepsBack = Math.max(passesFromStart - (n - 1), 0);
  const index = passesFromStart - 2 * stepsBack;
  return index + 1;
}
