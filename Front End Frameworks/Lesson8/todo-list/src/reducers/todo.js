import React from 'react';
import { createStore } from 'redux';

const initialState = {
    items:[
        {
            todo: 'clean',
            id: 1
        }
    ]
};

function todoReducer (state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
        const existingIds = state.items.map(todo => todo.id)          //  what is map? => I dont get
        const largestExistingId = Math.max(...existingIds);           //  lookup math.max
        return {                                                      //  
            ...state,                                                 //  
            items: [                                                  //  
                ...state.items,                                       //  
                {                                                     //  
                    id: largestExistingId + 1,                        //  
                    todo: action.todo                                 //  
                }
            ]
        }

    case 'REMOVE_TODO':
    	return {
            ...state,
            items: state.items.filter(todo => todo.id !== action.id) ///No idea what => does
        }
    default:
    	return state;
  }
}

export default todoReducer