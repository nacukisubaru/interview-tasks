//задача про контекст когда в функции вызывается что то сверху или ты ждешь что оно будет но будет не одно
//что выведет код?
const userService = {
	currentFilter: 'active',

	users: [
		{name: 'Alex', status: 'active'},
		{name: 'Nick', status: 'deleted'},
	],

	getFilterUsers: function() {
		const filterCallback = function (user) {
			return user.status === this.currentFilter;
		};
		
		return this.users.filter(filterCallback.bind(userService));
	}
};

//три способа пофиксить
//1
//const filterCallback = function (user) {
// 	return user.status === this.currentFilter;
// };

// return this.users.filter(filterCallback.bind(userService));

//2
//return this.users.filter((user) => user.status === this.currentFilter);

//3
//that = this

console.log(userService.getFilterUsers());