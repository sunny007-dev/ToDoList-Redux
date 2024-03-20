const initialData = {
    list: []
};

const todoReducers = (state = initialData, action) => {
    switch(action.type){
        case "ADD_TODO" :
            const {id, data} = action.payload;
            return { 
                ...state,
                list:[
                    ...state.list, {id, data}
                ] 
            };
    
        default: return state;
    }
}

export default todoReducers;