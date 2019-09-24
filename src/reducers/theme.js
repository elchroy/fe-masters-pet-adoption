export default function theme(state = "dark blue", action) {
  return action.type === "CHANGE_THEME" ? action.payload : state;
}
