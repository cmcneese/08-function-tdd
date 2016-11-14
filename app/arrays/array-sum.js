export default function arraySum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    sum = sum + num;
  }

  return sum;
}
