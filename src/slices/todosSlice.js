import { createSlice } from "@reduxjs/toolkit";

import { deleteTask, getTask } from "../../api/api";

const todos = await getTask();

export const todosSlice = createSlice({
    name: "todos",
    initialState: {
        todos: todos,
    },
    reducers: {
        addTask: (state, action) => {
            updateTask(action.payload);
        },
        removeTask: (state, action) => {
            deleteTask(action.payload.id);
            // console.log(action.payload.id);
            // state.todos.filter((t) => t.id !== action.payload.id);
        },
        updateTask: (state, action) => {
            state.todos.map((t) => {
                if (t.id === action.payload.id) {
                    t.title = action.payload.title;
                } else return t;
            });
        },
        // editTask:
        // increase: (state, action) => {
        //     state.count += action.payload;
        // },
        // decrease: (state, action) => {
        //     state.count -= action.payload;
        // },
    },
});

// export main reducer

export default todosSlice.reducer;

// Selectors
export const selectTodos = (state) => state.todos.todos;

// Actions
export const { addTask, removeTask, updateTask } = todosSlice.actions;
