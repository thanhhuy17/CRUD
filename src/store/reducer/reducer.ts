import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TypeUser = {
    id: string
    name: string
    email: string
}

// const initialStateUser: TypeUser[] = [{
//     id: 1,
//     name: 'Ben Nguyen',
//     email: 'bennguyen@gmail.com'
// },
// {
//     id: 2,
//     name: 'Huy Nguyen',
//     email: 'huynguyen@gmail.com'
// }]

// const initialStateUser: TypeUser[] = []

const initialStateUser: TypeUser[] = (() => {
    const storageData = localStorage.getItem('LIST_INFO');
    if (storageData) {
        return JSON.parse(storageData);
    }
    return [];
})();

export const reducerSlice = createSlice({
    name: 'listUser',
    initialState: initialStateUser,
    reducers: {
        addUser: (state, action: PayloadAction<TypeUser>) => {
            const { name, email } = action.payload
            if (name && email) {
                state.push(action.payload)
            }
            // console.log(action)

        },
        deleteUser: (state, action) => {
            const userId = action.payload
            const findId = state.findIndex(user => user.id == userId)
            if (findId !== -1) {
                state.splice((findId), 1)
            }
        },
        updateUser: (state, action) => {
            const { id, name, email } = action.payload
            const updateS = state.find(user => user.id == id)
            if (updateS) {
                updateS.name = name
                updateS.email = email
            }
        },
        // getFromStorage: (state, action: PayloadAction<TypeUser[]>) => {
        //     return action.payload
        // }
    }
})

export const { addUser, deleteUser, updateUser } = reducerSlice.actions
const userReducer = reducerSlice.reducer
export default userReducer