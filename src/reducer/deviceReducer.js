
const deviceReducer = (state, action) => {
    switch(action.type)
    {
        case 'Add_new':
            return [...state, action.newItem];
        case 'Delete':
            return [...state.filter((item,key) => {
                return key !== action.index;
            })]
        default:
            return state;
    }
}

export default deviceReducer;
