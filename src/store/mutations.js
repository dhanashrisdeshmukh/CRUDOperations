// https://vuex.vuejs.org/en/mutations.html

export default {

  setUser(state, user) {
		console.log(user)

    state.user = user;
  }
}
