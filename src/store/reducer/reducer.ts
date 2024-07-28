import { createSlice } from "@reduxjs/toolkit";

type TypeUser = {
    id: string
    name: string
    email: string
}

const initialStateUser: TypeUser[] = [{
    id: '1',
    name: 'Ben Nguyen',
    email: 'bennguyen@gmail.com'
},
{
    id: '2',
    name: 'Huy Nguyen',
    email: 'huynguyen@gmail.com'
}]

export const reducerSlice = createSlice({
    name: 'listUser',
    initialState: initialStateUser,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { addUser } = reducerSlice.actions
const userReducer = reducerSlice.reducer
export default userReducer