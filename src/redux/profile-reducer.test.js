import profileReducer, { addPostActionCreator, deletePostActionCreator } from "./profile-reducer";

let initialState = {
    postsData: [{
            id: '1',
            text: 'hello my hello',
            like: '5',
        },
        {
            id: '2',
            text: 'good post',
            like: '0',
        },
        {
            id: '3',
            text: 'yo',
            like: '9',
        },
        {
            id: '4',
            text: 'yo Boruto',
            like: '20',
        },
        {
            id: '5',
            text: 'yo',
            like: '3',
        },
        {
            id: '6',
            text: 'yo hero',
            like: '90',
        },
        {
            id: '7',
            text: 'how are you',
            like: '100',
        }
    ],
}

it("length of posts should be incremented", () => {
    // 1. test data
    const action = addPostActionCreator('Лиза соси хуй');
    // 2.action
    const newState = profileReducer(initialState, action);

    // 3.expectation
    expect(newState.postsData.length).toBe(8);
});

it("message of new post should be correct", () => {
    // 1. test data
    const action = addPostActionCreator('Лиза соси хуй');
    // 2.action
    const newState = profileReducer(initialState, action);

    // 3.expectation
    expect(newState.postsData[7].text).toBe('Лиза соси хуй');
});


it("after deleting length of messages should be decrement", () => {
    // 1. test data
    const action = deletePostActionCreator(8);
    // 2.action
    const newState = profileReducer(initialState, action);

    // 3.expectation
    expect(newState.postsData.length).toBe(7);
});

it("after deleting length shouldnt be decrement if id is incorrect", () => {
    // 1. test data
    const action = deletePostActionCreator(1000);
    // 2.action
    const newState = profileReducer(initialState, action);

    // 3.expectation
    expect(newState.postsData.length).toBe(7);
});