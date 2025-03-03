export const initialState = {
    toDos: [
        {
            id: new Date().getTime(),
            name: "Estudiar para el corto.",

        }
    ]
}

export function toDoReducer(state, action) {
    switch (action.type) {
        case "add":
            return {...state, toDos:[...state.toDos, action.payload]}
        default:
            return state
    }

}