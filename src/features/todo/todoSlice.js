import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  todo: [
    { id: 1, name: 'john doe', dueDate: '09/04/2024', task: 'Task 1', priority: "Low", isCompleted: false },
    { id: 2, name: 'jane doe', dueDate: '19/04/2024', task: 'Task 2', priority: "High", isCompleted: true },
  ],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todo.push(action.payload)
    },
    removeTodo: (state, action) => {
      
    }
  }
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer