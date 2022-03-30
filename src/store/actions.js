// https://vuex.vuejs.org/en/actions.html


export default {
	setEditableUser({commit},user){
		console.log(user)
		commit("setUser",user)
	}
}
