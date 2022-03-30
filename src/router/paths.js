/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */

export default [
	{
		path: '/',
		name: 'dashboard',
		view: 'Dashboard',
	},
	{
		path: '/users',
		name: 'user',
		view: 'user',
	},
	{
		path: '/updateUser',
		name: 'updateUser',
		view: 'UpdateUser',
	},
	
]
