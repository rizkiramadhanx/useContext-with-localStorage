export default (state: TinitialValue, action: Taction) => {
  switch (action.type) {
    case 'SWITCH_THEME':
      return { ...state, theme: !state.theme };
    case 'CHANGE_NAME':
      return { ...state, username: action.payload };
    default:
      return state;
  }
};
