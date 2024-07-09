// https://leetcode.com/problems/average-waiting-time/description/?envType=daily-question&envId=2024-07-09
// There is a restaurant with a single chef. You are given an array customers, where customers[i] = [arrivali, timei]:

// arrivali is the arrival time of the ith customer. The arrival times are sorted in non-decreasing order.
// timei is the time needed to prepare the order of the ith customer.
// When a customer arrives, he gives the chef his order, and the chef starts preparing it once he is idle. The customer waits till the chef finishes preparing his order. The chef does not prepare food for more than one customer at a time. The chef prepares food for customers in the order they were given in the input.

// Return the average waiting time of all customers. Solutions within 10-5 from the actual answer are considered accepted.

function averageWaitingTime(customers: number[][]): number {
  //keep track of each customer's wait times to average at the end
  let wait = 0;

  //keep track of the time when the most recent order is going to finish
  let lastOrderCompletionTime = 0;
  customers.forEach((customer, idx) => {
    const startTime = Math.max(lastOrderCompletionTime, customer[0]); //their order will begin processing either as soon as they arrive, or when the previous order is complete (whichever is later)
    const completionTime = startTime + customer[1]; //then the order completes after its duration
    wait += completionTime - customer[0]; //wait time is completion minus arrival
    lastOrderCompletionTime = completionTime; //track the end time of this order
    // console.log(`Order ${idx} started at ${startTime}, completed at ${completionTime}`)
  });
  return wait / customers.length;
}
