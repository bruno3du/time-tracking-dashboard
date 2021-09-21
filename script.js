/** @format */
window.onload = function() {
	document.getElementById("weekly").classList.add("featured")
	gettingDatas("weekly");
};

const timeWork = document.getElementById('time-work');
const timePlay = document.getElementById('time-play');
const timeStudy = document.getElementById('time-study');
const timeExercise = document.getElementById('time-exercise');
const timeSocial = document.getElementById('time-social');
const timeSelfCare = document.getElementById('time-selfcare');

async function gettingDatas(daily) {
	const req = await fetch('./data.json');
	const json = await req.json();
	ordering(json, daily);
}

function ordering(json, daily) {
	json.forEach((data) => {
		let req = {
			daily: data.timeframes.daily,
			weekly: data.timeframes.weekly,
			monthly: data.timeframes.monthly,
		};
		settingTimeframe(req, daily);
	});
}

function settingTimeframe(req, daily) {
	if (daily === 'daily') {
		getDaily(req.daily);
	} else if (daily === 'weekly') {
		getWeekly(req.weekly);
	} else {
		getMonthly(req.monthly);
	}
}

let current = [];

function getDaily(timeframe) {
	current.push(timeframe);
	addTime(current);
	addPrevious('Last day', current);
}

function getWeekly(timeframe) {
	current.push(timeframe);
	addTime(current);
	addPrevious('Last week', current);
}

function getMonthly(timeframe) {
	current.push(timeframe);
	addTime(current);
	addPrevious('Last Month', current);
}

function addTime(current) {
	if (current.length === 6) {
		timeWork.innerHTML = `${String(current[0].current)}${
			current[0].current !== 1 ? 'hrs' : 'hr'
		}`;
		timePlay.innerHTML = `${String(current[1].current)}${
			current[1].current !== 1 ? 'hrs' : 'hr'
		}`;
		timeStudy.innerHTML = `${String(current[2].current)}${
			current[2].current !== 1 ? 'hrs' : 'hr'
		}`;
		timeExercise.innerHTML = `${String(current[3].current)}${
			current[3].current !== 1 ? 'hrs' : 'hr'
		}`;
		timeSocial.innerHTML = `${String(current[4].current)}${
			current[4].current !== 1 ? 'hrs' : 'hr'
		}`;
		timeSelfCare.innerHTML = `${String(current[5].current)}${
			current[5].current !== 1 ? 'hrs' : 'hr'
		}`;
	}
}

function addPrevious(content, current) {
	if (current.length === 6) {
		document.getElementsByClassName('square--previous')[0].innerHTML =
			content +
			` - ${String(current[0].previous)}${
				current[0].previous !== 1 ? 'hrs' : 'hr'
			}`;
		document.getElementsByClassName('square--previous')[1].innerHTML =
			content +
			` - ${String(current[1].previous)}${
				current[1].previous !== 1 ? 'hrs' : 'hr'
			}`;
		document.getElementsByClassName('square--previous')[2].innerHTML =
			content +
			` - ${String(current[2].previous)}${
				current[2].previous !== 1 ? 'hrs' : 'hr'
			}`;
		document.getElementsByClassName('square--previous')[3].innerHTML =
			content +
			` - ${String(current[3].previous)}${
				current[3].previous !== 1 ? 'hrs' : 'hr'
			}`;
		document.getElementsByClassName('square--previous')[4].innerHTML =
			content +
			` - ${String(current[4].previous)}${
				current[4].previous !== 1 ? 'hrs' : 'hr'
			}`;
		document.getElementsByClassName('square--previous')[5].innerHTML =
			content +
			` - ${String(current[5].previous)}${
				current[5].previous !== 1 ? 'hrs' : 'hr'
			}`;
	}
}

function turnDaily() {
	current = [];
	gettingDatas('daily');
	document.getElementById("daily").classList.add("featured")
	document.getElementById("weekly").classList.remove("featured")
	document.getElementById("monthly").classList.remove("featured")



}

function turnWeekly() {
	current = [];
	gettingDatas('weekly');
	document.getElementById("weekly").classList.add("featured")
	document.getElementById("monthly").classList.remove("featured")
	document.getElementById("daily").classList.remove("featured")



}

function turnMonthly() {
	current = [];
	gettingDatas('monthly');
	document.getElementById("monthly").classList.add("featured")
	document.getElementById("weekly").classList.remove("featured")
	document.getElementById("daily").classList.remove("featured")


}
