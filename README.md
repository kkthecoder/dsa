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
