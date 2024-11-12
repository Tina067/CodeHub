import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';


const QData = {
  "7DaysPreparationPlan": [
    {
      "week": 1,
      "days": [
        {
          "day": 1,
          "questions": [
            {
              "question": "Two Sum",
              "leetcodeLink": "https://leetcode.com/problems/two-sum/",
              "youtubeLink": "https://www.youtube.com/watch?v=KLlXCFG5TnA",
              "topic": "Array",
              "status": "Not Started"
            },
            {
              "question": "Valid Parentheses",
              "leetcodeLink": "https://leetcode.com/problems/valid-parentheses/",
              "youtubeLink": "https://www.youtube.com/watch?v=WTzjTskDFMg",
              "topic": "Stack",
              "status": "Not Started"
            },
            {
              "question": "Implement Queue using Stacks",
              "leetcodeLink": "https://leetcode.com/problems/implement-queue-using-stacks/",
              "youtubeLink": "https://www.youtube.com/watch?v=x_1-qQ36u8g",
              "topic": "Queue",
              "status": "Not Started"
            }
          ]
        },
        {
          "day": 2,
          "questions": [
            {
              "question": "Binary Search",
              "leetcodeLink": "https://leetcode.com/problems/binary-search/",
              "youtubeLink": "https://www.youtube.com/watch?v=K-RYzDZkzCI",
              "topic": "Binary Search",
              "status": "Not Started"
            },
            {
              "question": "Binary Tree Inorder Traversal",
              "leetcodeLink": "https://leetcode.com/problems/binary-tree-inorder-traversal/",
              "youtubeLink": "https://www.youtube.com/watch?v=5dySuyZf9Qg",
              "topic": "Binary Tree",
              "status": "Not Started"
            },
            {
              "question": "Reverse Linked List",
              "leetcodeLink": "https://leetcode.com/problems/reverse-linked-list/",
              "youtubeLink": "https://www.youtube.com/watch?v=G0_I-ZF0S38",
              "topic": "Linked List",
              "status": "Not Started"
            }
          ]
        },
        {
          "day": 3,
          "questions": [
            {
              "question": "Climbing Stairs",
              "leetcodeLink": "https://leetcode.com/problems/climbing-stairs/",
              "youtubeLink": "https://www.youtube.com/watch?v=Y0lT9Fck7qI",
              "topic": "Dynamic Programming",
              "status": "Not Started"
            },
            {
              "question": "Number of Islands",
              "leetcodeLink": "https://leetcode.com/problems/number-of-islands/",
              "youtubeLink": "https://www.youtube.com/watch?v=pV2kpPD66nE",
              "topic": "Graph",
              "status": "Not Started"
            },
            {
              "question": "Best Time to Buy and Sell Stock",
              "leetcodeLink": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
              "youtubeLink": "https://www.youtube.com/watch?v=1pkOgXD63yU",
              "topic": "Greedy",
              "status": "Not Started"
            }
          ]
        }
      ]
    },
    {
      "week": 2,
      "days": [
        {
          "day": 1,
          "questions": [
            {
              "question": "3Sum",
              "leetcodeLink": "https://leetcode.com/problems/3sum/",
              "youtubeLink": "https://www.youtube.com/watch?v=jzZsG8n2R9A",
              "topic": "Two Pointers",
              "status": "Not Started"
            },
            {
              "question": "Sliding Window Maximum",
              "leetcodeLink": "https://leetcode.com/problems/sliding-window-maximum/",
              "youtubeLink": "https://www.youtube.com/watch?v=2SXqBsTR6a8",
              "topic": "Sliding Window",
              "status": "Not Started"
            },
            {
              "question": "Validate Binary Search Tree",
              "leetcodeLink": "https://leetcode.com/problems/validate-binary-search-tree/",
              "youtubeLink": "https://www.youtube.com/watch?v=s6ATEkipzow",
              "topic": "Binary Search Tree",
              "status": "Not Started"
            }
          ]
        },
        {
          "day": 2,
          "questions": [
            {
              "question": "Implement Trie (Prefix Tree)",
              "leetcodeLink": "https://leetcode.com/problems/implement-trie-prefix-tree/",
              "youtubeLink": "https://www.youtube.com/watch?v=oobqoCJlHA0",
              "topic": "Trie",
              "status": "Not Started"
            },
            {
              "question": "Longest Substring Without Repeating Characters",
              "leetcodeLink": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
              "youtubeLink": "https://www.youtube.com/watch?v=wiGpQwVHdE0",
              "topic": "String",
              "status": "Not Started"
            },
            {
              "question": "Kth Largest Element in a Stream",
              "leetcodeLink": "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
              "youtubeLink": "https://www.youtube.com/watch?v=Qesli6DrCqM",
              "topic": "Heap, Priority Queue",
              "status": "Not Started"
            }
          ]
        },
        {
          "day": 3,
          "questions": [
            {
              "question": "Find Peak Element",
              "leetcodeLink": "https://leetcode.com/problems/find-peak-element/",
              "youtubeLink": "https://www.youtube.com/watch?v=CFgUQUL7j_c",
              "topic": "Binary Search",
              "status": "Not Started"
            },
            {
              "question": "Invert Binary Tree",
              "leetcodeLink": "https://leetcode.com/problems/invert-binary-tree/",
              "youtubeLink": "https://www.youtube.com/watch?v=OnSn2XEQ4MY",
              "topic": "Binary Tree",
              "status": "Not Started"
            },
            {
              "question": "Design Circular Queue",
              "leetcodeLink": "https://leetcode.com/problems/design-circular-queue/",
              "youtubeLink": "https://www.youtube.com/watch?v=SkXkMl4yVHo",
              "topic": "Queue",
              "status": "Not Started"
            }
          ]
        },
        {
          "day": 4,
          "questions": [
            {
              "question": "Longest Increasing Subsequence",
              "leetcodeLink": "https://leetcode.com/problems/longest-increasing-subsequence/",
              "youtubeLink": "https://www.youtube.com/watch?v=fV-TF4OvZpk",
              "topic": "Dynamic Programming",
              "status": "Not Started"
            },
            {
              "question": "Course Schedule",
              "leetcodeLink": "https://leetcode.com/problems/course-schedule/",
              "youtubeLink": "https://www.youtube.com/watch?v=EgI5nU9etnU",
              "topic": "Graph, Topological Sort",
              "status": "Not Started"
            },
            {
              "question": "Palindrome Linked List",
              "leetcodeLink": "https://leetcode.com/problems/palindrome-linked-list/",
              "youtubeLink": "https://www.youtube.com/watch?v=-DtNInqFUXs",
              "topic": "Linked List",
              "status": "Not Started"
            }
          ]
        }
      ]
    }
  ]
}

function App() {
  return (
    <div className="app-container">
    <Sidebar QData={QData}/>
      <div className="main-content-wrapper">
        <Header className="header"/>
        <MainContent className="main-content"/>
      </div>
    </div>  
  );
}

export default App;

