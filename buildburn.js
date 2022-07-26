let moveZerosToLeft = function(arr) {
  if (arr.length < 1) return;

  let writeIndex = arr.length - 1; // 8 > 7
  let readIndex = arr.length - 1; // 8 > 7

  // [1, 10, 20, 0, 59, 63, 0, 88, 0]
  // [1, 10, 20, 0, 59, 63, 0, 88, 88]

  while (readIndex >= 0) {
    if (arr[readIndex] !== 0) {
      arr[writeIndex] = arr[readIndex];
      writeIndex--;
    }
    
    readIndex--;
  }
  
  while (writeIndex >= 0) {
    arr[writeIndex] = 0;
    writeIndex--;
  }
};