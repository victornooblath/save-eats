/**
 *essa função set user
 * @param state Teu Estado Global
 */
export function setUser(state, { uid, email }) {
  state.id = uid;
  state.email = email;
}

export function resetStateUser(state){
  state.id = null;
  state.email = null;
}