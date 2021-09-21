/** @format */
document.addEventListener('DOMContentLoaded', () => {
	gettingDatas();
});

const timeWork = document.getElementById('time-work');
const timePlay = document.getElementById('time-play');
const timeStudy = document.getElementById('time-study');
const timeExercise = document.getElementById('time-exercise');
const timeSocial = document.getElementById('time-social');
const timeSelfCare = document.getElementById('time-selfcare');

// let daily = {}
let weekly = {};
let monthly = {};

function gettingDatas() {
	return fetch('./data.json')
		.then((res) => {
			return res.json();
		})
		.then((json) => {
			return json.forEach((data) => {
				daily = async() => {
					return { title: data.title, timeframes: data.timeframes.daily };
				};
				weekly = {
					title: data.title,
					timeframes: data.timeframes.weekly,
				};
				monthly = {
					title: data.title,
					timeframes: data.timeframes.monthly,
				};
			});
		});
}

// async function daily(json) {
// 	time = await json;
// 	console.log(time);
// }

// daily()

console.log(weekly, monthly, gettingDatas());

// Create container of dates and
