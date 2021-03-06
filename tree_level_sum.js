// Given a binary tree and a number k, your task is to find the sum of tree nodes at level k. The binary tree is represented by a string tree with the format: (<node-value>(<left subtree>)(<right subtree>)).
//
// Example
//
// For tree = "(0(5(6()())(14()(9()())))(7(1()())(23()())))" and k = 2, the output should be
//
// treeLevelSum(tree, k) = 44.
//
// Explanation: The nodes at level 2 are 6, 14, 1, and 23, so the answer is 6 + 14 + 1 + 23 = 44.
//
// Input/Output
//
// [time limit] 4000ms (rb)
// [input] string tree
//
// A valid string representing a tree.
//
// Constraints:
//
// 2 ≤ tree.length ≤ 105.
//
// All the values in a given tree are guaranteed to be integers.
//
// [input] integer k
//
// Constraints:
//
// 0 ≤ k ≤ 105.
//
// [output] integer
//
// The total sum of all the values at level k in a tree.
