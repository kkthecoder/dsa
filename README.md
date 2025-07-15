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

### Problem 10 - Valid Palindrome

Given a string s, return true if it is a palindrome, otherwise return false.
A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

Example:
Input: s = "Was it a car or a cat I saw?"
Output: true

### Problem 11 - Two Sum II Input Array Is Sorted

Given an array of integers numbers that is sorted in non-decreasing order.

Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given target number target and index1 < index2. Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.

There will always be exactly one valid solution.

Example:
Input: numbers = [1,2,3,4], target = 3
Output: [1,2]

### Problem 12 - Three sum

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.
The output should not contain any duplicate triplets. You may return the output and the triplets in any order.

Example:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

### Problem 13 - Container With Most Water

You are given an integer array heights where heights[i] represents the height of the i(th) bar.
You may choose any two bars to form a container. Return the maximum amount of water a container can store.

Example:
Input: height = [1,7,2,5,4,7,3,6]
Output: 36

### Problem 14 - Trapping Rain Water

You are given an array of non-negative integers height which represent an elevation map. Each value height[i] represents the height of a bar, which has a width of 1.
Return the maximum area of water that can be trapped between the bars.

Example:
Input: height = [0,2,0,3,1,0,1,3,2,1]
Output: 9

### Problem ? - Best Time to Buy and Sell Stock

You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.
You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.
Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.

Example:
Input: prices = [10,1,5,6,7,1]
Output: 6

### Problem 15 - Valid Parentheses

You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.

The input string s is valid if and only if:

Every open bracket is closed by the same type of close bracket.
Open brackets are closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
Return true if s is a valid string, and false otherwise.

Example:
Input: s = "([{}])"
Output: true
