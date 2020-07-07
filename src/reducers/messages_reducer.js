export default function(state, action) {
  // TODO: handle some actions
  if (state === undefined) {
  // Reducer initialisation
    return [];
  }
  switch (action.type) {
    case 'SET_MESSAGES': {
      return action.payload;
    }
    case 'MESSAGE_POSTED': {
      const copiedState = state.slice(0);
      copiedState.push(action.payload);
      return copiedState;
    }

    default:
      return state;
  }
}
