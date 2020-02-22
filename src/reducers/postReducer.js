const postReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_POST':
      return state.concat([action.data]);
    case 'DELETE_POST':
      return state.filter((post) => post.id !== action.id);
    case 'EDIT_POST':
      return state.map((post) => post.id === action.id ? {...post, editing: !post.editing}:post)
    case 'UPDATE':
      return state.map((post) => {
        if(post.id === action.id) {
          return {
            ...post,
            title: action.data.newTitle,
            message: action.data.newMessage,
            editing: !post.editing
          }
        } else return post;
      })
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

//line 8 - using map to loop over each item and check the id of the post with the id that was passed into action. If there is a match then return a new object but change editing value to true if it was false, and vice-versa. If there is no match then return the object as is.