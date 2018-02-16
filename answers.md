
Exercise I

a) O(n)
b) O(n)
c) O(n^3)
d) O(n^2)
e) O(n^4)
f) O(n)
g) O(n^i)

Exercise II

a)
function maxIndexDiff(arr) {
  let dif = -1;
  let n = arr.length;
  let i, j;
  for (i = 0; i < n; ++i) {
    for (j = n - 1; j > i; --j) {
      if (arr[j] > arr[i] && dif < (j - i)) {
        dif = j - i;
      }
    }
  }
  return dif;
}

b)
function safeFloor(totalFloors) {
  let i = 0;
  let n = totalFloors;
  let currentFloor = 0;
  let broken = false;
  let f = 0;

  while (currentFloor >= f) {
    for (i = 0; i < f; i++) {
      if (!broken) {
        currentFloor = i;
      } else {
        f = currentFloor
      }
    }
  }
  return f;
}

Exercise III

a) 

b) 

