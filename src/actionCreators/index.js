export function changeLocation(location) {
  return {
    type: "CHANGE_LOCATION",
    payload: location
  };
}

export function changeTheme(theme) {
  return {
    type: "CHANGE_THEME",
    payload: theme
  };
}
