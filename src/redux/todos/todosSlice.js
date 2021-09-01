import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [
        {
            id: "1",
            title: "Learn React",
            color: "bg-secondary"
        },
        {
            id: '2',
            title: "Learn Redux",
            color: "bg-danger"

        }
        ]
    },
    reducers: {
        addTodo: (state, action) => {
            state.items.push(action.payload)
        },

    },
});

export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;