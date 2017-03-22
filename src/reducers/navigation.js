const defaultState = {
  sidebarOpen: false
};

export default function navigation(state = defaultState, action){
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return { ...state, sidebarOpen: action.sidebarOpen }
    default:
      return state;
  }
}
