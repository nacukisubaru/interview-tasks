//дано
const tickets = [
	{ from: 'Калининград', to: 'Челябинск' },
	{ from: 'Москва', to: 'Калининград' },
	{ from: 'Пятигорск', to: 'Краснодар' },
	{ from: 'Челябинск', to: 'Астана' },
	{ from: 'Краснодар', to: 'Москва' },
];

//должно получится 
// const tickets = [
// 	{ from: 'Пятигорск', to: 'Краснодар' },
// 	{ from: 'Краснодар', to: 'Москва' },
// 	{ from: 'Москва', to: 'Калининград' },
// 	{ from: 'Калининград', to: 'Челябинск' },
// 	{ from: 'Челябинск', to: 'Астана' },
// ];

//сложность O(n2) в худшем случае
//сложность O(n) в лучшем
const sortTickets = (tickets) => {
	//поиск начальной точки
	const ticketsEndPoints = new Set();
	tickets.forEach(ticket => {
		ticketsEndPoints.add(ticket.to);
	})

	let startPoint;
	tickets.forEach(ticket => {
		if (!ticketsEndPoints.has(ticket.from)) {
			startPoint = ticket;
		}
	});

	//сортировка построение цепочки от начальной точки
	let point = startPoint;
	const sortedTickets = [];
	sortedTickets.push(startPoint);

	let count = 0;
	while (sortedTickets.length !== tickets.length) {
		if (tickets[count].from === point.to) {
			point = tickets[count];
			count = 0;
			sortedTickets.push(point);
		} else {
			count++;
		}
	}

	return sortedTickets;
}

//сложность O(n) в любом случае алгос через хеш таблицу
const sortTicketsByMaps = (tickets) => {
	//поиск начальной точки
	const ticketsEndPoints = new Set();
	const ticketsMap = new Map();

	tickets.forEach(ticket => {
		ticketsEndPoints.add(ticket.to);
		ticketsMap.set(ticket.from, ticket);
	})

	let startPoint;
	tickets.forEach(ticket => {
		if (!ticketsEndPoints.has(ticket.from)) {
			startPoint = ticket;
		}
	});

	//сортировка построение цепочки от начальной точки
	let nextPoint = startPoint;
	const sortedTickets = [];
	sortedTickets.push(nextPoint);

	while (nextPoint) {
		const nextTicket = ticketsMap.get(nextPoint.to);
		nextPoint = nextTicket;
		if (nextPoint) {
			sortedTickets.push(nextPoint);
		}
	}

	return sortedTickets;
}

console.log(sortTicketsByMaps(tickets));

console.log(sortTickets(tickets));