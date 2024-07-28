import { createSlice } from "@reduxjs/toolkit";

type TypeUser = {
    id: number
    name: string
    email: string
}

const initialStateUser: TypeUser[] = [{
    id: 1,
    name: 'Ben Nguyen',
    email: 'bennguyen@gmail.com'
},
{
    id: 2,
    name: 'Huy Nguyen',
    email: 'huynguyen@gmail.com'
}]

// const initialStateUser: TypeUser[] = []

export const reducerSlice = createSlice({
    name: 'listUser',
    initialState: initialStateUser,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
            // console.log(action)

        },
        deleteUser: (state, action) => {
            const userId = action.payload
            const findId = state.findIndex(user => user.id == userId)
            if (findId !== -1) {
                state.splice((findId), 1)
            }
        }
    }
})

export const { addUser, deleteUser } = reducerSlice.actions
const userReducer = reducerSlice.reducer
export default userReducer