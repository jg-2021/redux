'use strict';
import {createStore} from 'redux';

console.log('started');

const defaultState = {
    balance: 0
}

const actionIncrement = {
    type: 'increment'
}

const actionDecrement = {
   type: 'decrement'
}

const account = (state = defaultState, action) =>{
    switch(action.type){
        case 'increment':
            return{
                balance: state.balance +1,
            };
            case 'decrement':
                return{
                    balance: state.balance -1
                };
                default:
                    return state;
    }
}

const store = createStore(account);
store.subscribe(() =>{
    console.log('subscribing to state changes');
    const state = store.getState();
    console.log(state);
})

store.dispatch(actionIncrement);

