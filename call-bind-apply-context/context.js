//задача про контекст когда в функции вызывается что то сверху или ты ждешь что оно будет но будет не одно
//что выведет код?
const userService = {
	currentFilter: 'active',

	users: [
		{name: 'Alex', status: 'active'},
		{name: 'Nick', status: 'deleted'},
	],

	getFilterUsers: function() {
		return this.users.filter(function (user) {
			return user.status === this.currentFilter;
		});
	}
};

console.log(userService.getFilterUsers());