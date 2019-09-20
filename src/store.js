import { createStore, combineReducers } from 'redux';
import {ChangeEditStatus, Add_New, Delete} from './action';
import deviceReducer from './reducer/deviceReducer';
import editStatusReducer from './reducer/editStatusReducer';


const oldstate = {
    device: ['Keyboard', 'Mouse', 'Screen'],
    editStatus: true
}

// const reducer = (state = oldstate, action) =>
//  {
//     switch (action.type)
//     {
//         case 'Change_editStatus':
//             return {...state.device,editStatus: !state.editStatus};
//         case 'Add_new':
//             return {...state,device: [...state.device,action.newItem]};
//         case 'Delete':
//             return {...state,device: [...state.device.filter((item,key) =>
//                 {
//                     return key !== action.index
//                 })]};
//         default:
//             return oldstate;
//     }
//  }

// chia nhỏ các reducer (có bao nhiêu thuộc tính trong state thì chỉ cần tách ra bao nhiêu reducer là được tức là 1 reducer quản lý 1 thuộc tính của state)

// const deviceInitialState = oldstate.device;
// const deviceReducer = (state = deviceInitialState, action) => 
// {
//     switch(action.type)
//     {
//         case 'Add_new':
//             return [...state, action.newItem];
//         case 'Delete':
//             return [...state.filter((item,key) => {
//                 return key !== action.index;
//             })]
//         default:
//             return state;
//     }
// }


// const editStatusInitialState = oldstate.editStatus;
// const editStatusReducer = (state = editStatusInitialState, action) =>
// {
//     switch (action.type)
//     {
//         case 'Change_editStatus':
//             return !state;
//         default:
//             return state;
//     }
// }

// cách 2 của thằng combineReducers:
function allReducers (state = oldstate, action)
{
    return {
        // phải lấy state  mặc định vì vấn đề DataContext
        device: deviceReducer(state.device, action),
        editStatus: editStatusReducer(state.editStatus, action)
    }
}

// kết hợp các reducer lại với nhau dùng hàm redux.combineReducers() cách 1:
// const reducer = combineReducers({
//     device: deviceReducer,
//     editStatus: editStatusReducer
// })

 var store = createStore(allReducers);
 store.subscribe(() =>
 {
     console.log(JSON.stringify(store.getState()));
 })

 store.dispatch(ChangeEditStatus);
 store.dispatch(Add_New);
 store.dispatch(Delete);

 export default store;
