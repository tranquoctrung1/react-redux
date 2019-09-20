
const editStatusReducer = (state, action) => {
    switch (action.type)
    {
        case 'Change_editStatus':
            return !state;
        default:
            return state;
    }
}

export default editStatusReducer;
