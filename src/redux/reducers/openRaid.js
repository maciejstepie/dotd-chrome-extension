const openRaidReducer = (state = null, action) =>{

    switch(action.type){
        case 'OPEN_RAID':
        return action.payload;
        default:
  return state;
    }
}
export default openRaidReducer