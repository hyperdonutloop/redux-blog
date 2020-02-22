const postReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_POST':
      return state.concat([action.data]);
    case 'DELETE_POST':
      return state.filter((post) => post.id !== action.id);
    default:
      return state;
  }
}

export default postReducer;

// we are calling the switch statement (a function) 
// and we are switching based on the value of `action.type`
// If the value is ADD_POST then we are returning a new array (line 1: state = [])
// containing the action.data. Action.data = an object with individual post title and message.
// the reducer expects default value for state, hence an empty array

