# DSA

This repository consist of code for practicing data structures and algorithms using Javascript.
I am using Node v24.2.0 for running code in local. I am using VS Code editor and prettier plugin as default formatter.

Reference -

- https://neetcode.io/roadmap
- https://leetcode.com/problemset/

## Neetcode

### Problem 1 - Contains Duplicate

Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

Example:
Input: nums = [1, 2, 3, 3]
Output: true

### Problem 2 - Valid Anagram

Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false. An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:
Input: s = "racecar", t = "carrace"
Output: true

Example 2:
Input: s = "jar", t = "jam"
Output: false

### Problem 3 - Two Sum

Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.
You may assume that every input has exactly one pair of indices i and j that satisfy the condition.
Return the answer with the smaller index first.

Example 1:
Input:
nums = [3,4,5,6], target = 7
Output: [0,1]

Example 2:
Input: nums = [4,5,6], target = 10
Output: [0,2]

### Problem 4 - Group anagrams

Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.
An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:
Input: strs = ["act","pots","tops","cat","stop","hat"]
Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

### Problem 5 - Top K Frequent Elements

Given an integer array nums and an integer k, return the k most frequent elements within the array.
The test cases are generated such that the answer is always unique.
You may return the output in any order.

Example:
Input: nums = [1,2,2,3,3,3], k = 2
Output: [2,3]

### Problem 6 - Encode and Decode Strings

Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings. Please implement encode and decode.

Example 1:
Input: ["neet","code","love","you"]
Output:["neet","code","love","you"]

### Problem 7 - Product of Array Except Self - Explanation

Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

Example:
Input: nums = [1,2,4,6]
Output: [48,24,12,8]

### Problem 8 - Valid Sudoku

You are given a 9 x 9 Sudoku board board. A Sudoku board is valid if the following rules are followed:

- Each row must contain the digits 1-9 without duplicates.
- Each column must contain the digits 1-9 without duplicates.
- Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.
- Return true if the Sudoku board is valid, otherwise return false

Input: board =
[["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","8",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]]

Output: true

### Problem 9 - Longest consecutive sequence

Given an array of integers nums, return the length of the longest consecutive sequence of elements that can be formed.

Example:
Input: nums = [2,20,4,10,3,4,5]
Output: 4
