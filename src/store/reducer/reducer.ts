import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
        addUser: (state, action: PayloadAction<TypeUser>) => {
            state.push(action.payload)
            // console.log(action)

        },
        deleteUser: (state, action) => {
            const userId = action.payload
            const findId = state.findIndex(user => user.id == userId)
            if (findId !== -1) {
                state.splice((findId), 1)
            }
        },
        updateUser: (state, action : PayloadAction<TypeUser>) => {
            const { id, name, email } = action.payload
            const updateS = state.find(user => user.id == id)
            if (updateS) {
                updateS.name = name
                updateS.email = email
            }
        },
        getFromStorage: (state, action: PayloadAction<TypeUser[]>) => {
            return action.payload.map((list) => {
                const existingList = state.find((item) => item.id === list.id)
                return existingList ? existingList : { ...list }
            })

            return action.payload
        }
    }
})

export const { addUser, deleteUser, updateUser, getFromStorage } = reducerSlice.actions
const userReducer = reducerSlice.reducer
export default userReducer