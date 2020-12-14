const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogsData: [
        {
            id: '1',
            name: 'Boruto'
        },
        {
            id: '2',
            name: 'Naruto'
        },
        {
            id: '3',
            name: 'Kawaki'
        },
        {
            id: '4',
            name: 'Saske'
        },
        {
            id: '5',
            name: 'Sarada'
        },
        {
            id: '6',
            name: 'Jigen'
        },
        {
            id: '7',
            name: 'Boro'
        }
    ],
    messagesData: [
        {
            id: '1',
            message: 'hello my hello'
        },
        {
            id: '2',
            message: 'good post'
        },
        {
            id: '3',
            message: 'yo'
        },
        {
            id: '4',
            message: 'yo Boruto'
        },
        {
            id: '5',
            message: 'yo'
        },
        {
            id: '6',
            message: 'yo hero'
        },
        {
            id: '7',
            message: 'how are you'
        }
    ],
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            const newMessage = {
                id: 0,
                message: action.message,
            }

            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
            }
        }
        
        default:
            return state;
    }

}

export const addMessageActionCreator = (message) => ({
    type: ADD_MESSAGE,
    message: message
});

export default dialogsReducer;