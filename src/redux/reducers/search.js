const searchReducer = (state = null, action) =>{

    switch(action.type){
        case 'SELECT_CHANGED':
        return action.payload;
        default:
  return state;
    }
}
export default searchReducer