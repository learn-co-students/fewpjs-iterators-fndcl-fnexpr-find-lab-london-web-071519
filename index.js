// const testVar = {};

// function testFunc() {
// 	return 'hi';
// }

// [1, 2, 3, 4, 5].find((e) => {
// 	return e === 5;
// });
// //5

// let roommates = ['jess', 'winston', 'winston', 'nick'];
// roommates.find((name) => name === 'winston');
// roommates.filter((name) => {
// 	return name === 'winston';
// });

const record = [
	{year: '2018', result: 'L'},
	{year: '2017', result: 'W'},
	{year: '2016', result: 'N/A'}
	//...
];

const superbowlWin = (arr) => {
	const win = arr.find((o) => o.result === 'W');
	if (win) return win.year;
};
