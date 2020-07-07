export default function(state, action) {
  // TODO: handle some actions
    if (state === undefined) {
  // Reducer initialisation
    return null;
  }
  switch (action.type) {
    case 'SELECT_USER':
      return action.payload;
    default:
      return state;
  }
}
