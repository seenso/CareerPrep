# Most Common SpaceX Coding Interview Questions
[Link](https://www.codinginterview.com/spacex-interview-questions)

## Arrays
------

  ### Sum of Two Values  (aka twoSum)
  Given an array of integers and a value, determine if there are any two integers in the array whose sum is equal to the given value.

  Example 1

    input: [5, 7, 1, 2, 8, 4, 3], targetSum = 10
    output: true

  Example 2

    input: [5, 7, 1, 2, 8, 4, 3], targetSum = 19
    output: false

  Hints:
  - Use hashing
  - Use comparison between elements

  [Solution](https://www.educative.io/m/sum-of-two-values)

  ```javascript
  // TIME O(n)
  // SPACE O(n)

  // using hashmap
  let findSumOfTwo = function(arr, targetSum) {
    let numMap = {}; // {num: index}
    for(let i = 0; i < arr.length; i++) {
      if(numMap[targetSum - arr[i]]) return true;
      numMap[arr[i]] = i
    }

    return false;
  };

  // using Set
  let findSumOfTwo = function(arr, targetSum) {
    let numMap = new Set();
    for (let num in arr) {
      if (numMap.has(targetSum - arr[num])) return true;
      numMap.add(arr[num]);
    }

    return false;
  };
  ```

  ### Move Zeros to the Left
  Move all zeros to the left of an array while maintaining its order.

  Example

    input:  [1, 10, 20, 0, 59, 63, 0, 88, 0]
    output: [0, 0, 0, 1, 10, 20, 59, 63, 88]

  Hints: 
    - Use the concept of reader/writer indexes

  ​[Solution](https://www.educative.io/m/move-zeros-left)
  
  ```javascript
  // TIME O(n)
  // SPACE O(1)

  let moveZerosToLeft = function(arr) {
    if (arr.length < 1) return;

    let writeIndex = arr.length - 1;
    let readIndex = arr.length - 1;

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
  ```


## Linked Lists
------

### Delete Node with Given Key
You are given the head of a linked list and a key. You have to delete the node that contains this given key.

Example
  input:  head > 7 > 14 > 21 > 28 > 35 > 42 > null, key = 28
  output: head > 7 > 14 > 21 >      35 > 42 > null

[Solution](https://www.educative.io/m/delete-node-with-given-key)

```javascript

```

### Copy Linked List with Arbitrary Pointer
You are given a linked list where the node has two pointers. The first is the regular ‘next’ pointer. The second pointer is called ‘arbitrary_pointer’ and it can point to any node in the linked list.

Your job is to write code to make a deep copy of the given linked list. Here, deep copy means that any operations on the original list (inserting, modifying and removing) should not affect the copied list.

[Solution](https://www.educative.io/m/copy-linked-list-with-arbitrary-pointer)

```javascript

```


## Trees
------

### Mirror Binary Tree
Given the root node of a binary tree, swap the 'left' and 'right' children for each node. 

[Solution](https://www.educative.io/m/mirror-binary-tree-nodes)

```javascript

```

### Check if Two Binary Trees are Identical
Given the roots of two binary trees, determine if these trees are identical or not.

[Solution](https://www.educative.io/m/check-if-two-binary-trees-are-identical)

```javascript

```


## Strings
------

### String Segmentation
Given a dictionary of words and an input string tell whether the input string can be completely segmented into dictionary words.

[Solution](https://www.educative.io/m/string-segmentation)

```javascript

```

### Find All Palindrome Substrings
Given a string find all non-single letter substrings that are palindromes.

[Solution](https://www.educative.io/m/find-all-palindrome-substrings)

```javascript

```


## Dynamic Programming
------

### Largest Sum Subarray
Given an array, find the contiguous subarray with the largest sum.

[Solution](https://www.educative.io/m/largest-sum-subarray)

```javascript

```


## Math and Stats
------

### Determine if the Number is Valid
Given an input string, determine if it makes a valid number or not. For simplicity, assume that white spaces are not present in the input.

[Solution](https://www.educative.io/m/is-the-number-valid)

```javascript

```


## Backtracking
------

### Print Balanced Brace Combinations
Print all braces combinations for a given value 'N' so that they are balanced.

[Solution](https://www.educative.io/m/all-possible-braces)

```javascript

```


## Graphs
------

### Minimum Spanning Tree
Find the minimum spanning tree of a connected, undirected graph with weighted edges.

[Solution](https://www.educative.io/m/minimum-spanning-tree)

```javascript

```


## Design
------

### Implement a LRU Cache
Least Recently Used (LRU) is a common caching strategy. It defines the policy to evict elements from the cache to make room for new elements when the cache is full, meaning it discards the least recently used items first.

[Solution](https://www.educative.io/m/implement-least-recently-used-cache)

```javascript

```


## Sorting and Designing
------

### Find the High and Low Index
Given a sorted array of integers, return the low and high index of the given key. Return -1 if not found. The array length can be in the millions with many duplicates.

[Solution](https://www.educative.io/m/find-low-high-index)

```javascript

```

### Merge Overlapping Intervals
You are given an array (list) of interval pairs as input where each interval has a start and end timestamp. The input array is sorted by starting timestamps. You are required to merge overlapping intervals and return output array (list).

[Solution](https://www.educative.io/m/merge-overlapping-intervals)

```javascript

```
