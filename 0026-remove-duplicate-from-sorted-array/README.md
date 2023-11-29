### Problem Statement
Given an integer array `nums` sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in `nums`.

#### Requirements
- Change the array `nums` such that the first `k` elements of `nums` contain the unique elements in the order they were present in `nums` initially. 
- The remaining elements of `nums` are not important as well as the size of `nums`.
- Return `k`.

#### Custom Judge
The judge will test your solution with the following code:
```java
int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
```
If all assertions pass, then your solution will be accepted.

Examples
Example 1:

```vbnet
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
```
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:

```vbnet
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
```
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Constraints
1 <= nums.length <= 3 * 10^4
-100 <= nums[i] <= 100
nums is sorted in non-decreasing order.


---
## solution:

In my solution, I tackled the problem of removing duplicates from a sorted array with the following strategy:

1. **Initialization of Counter (`j`)**: 
   - I start with a variable `j` initialized to `1`. This choice serves two key purposes:
     - It acts as a counter for the number of unique elements I've encountered in the array.
     - Simultaneously, `j` functions as a position pointer, indicating where to place the next unique element that I find.

2. **Iteration through the Array**:
   - To process the array, I use a `for` loop, beginning from the second element. I do this because the first element in a sorted array is inherently unique. The loop variable `i` starts from `1` and iterates up to the length of the array.

3. **Checking for Uniqueness**:
   - In each iteration, I compare the current element (`nums[i]`) with the one preceding it (`nums[i - 1]`). If they differ (`nums[i] !== nums[i - 1]`), it signifies that I've found a unique element that hasn't appeared before in the array.

4. **Placing Unique Elements**:
   - Upon identifying a unique element, I assign this element to the position in the array indicated by `j` (`nums[j] = nums[i]`). This action effectively "shifts" the unique element to its appropriate position, ensuring that the first `k` elements of the array remain unique.

5. **Incrementing the Counter (`j`)**:
   - After repositioning each unique element, I increment `j`. This step is vital as it advances the position pointer, preparing it to place the next unique element I come across.

6. **End Result**:
   - By the end of my loop, `j` holds the count of unique elements found in the array. Additionally, the first `j` positions in the array contain these unique elements, preserving their original order.

7. **Efficiency**:
   - My approach is efficient because it operates in-place, requiring no additional space apart from the counter `j`, and it necessitates just a single pass through the array, giving it a time complexity of O(n).

Overall, this solution effectively addresses the problem by employing a two-pointer technique: one pointer (`i`) for iterating through the array and another (`j`) for tracking the position of the next unique element.