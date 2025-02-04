Input-Process-Output Model Analysis

Input

The ToDo List App allows users to enter a task description into a text input field. When the "Add Task" button is clicked, the entered task is captured and added to the list. Users can also remove tasks by clicking the "Delete" button next to each item. The input is dynamic and user-driven.

Process

When a user adds a task, the app updates the state using React's useState hook. The task is stored in an array, and React re-renders the list. The .map() function is used to dynamically display all tasks. When a task is deleted, the state updates by filtering out the selected item.

Output

The updated task list is displayed on the screen in real time. Each task appears with a "Delete" button. The app ensures tasks are added and removed as expected, creating an interactive experience for users.
