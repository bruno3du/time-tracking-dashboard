/** @format */
document.addEventListener('DOMContentLoaded', () => {
	gettingDatas();
});

function gettingDatas() {
	fetch('./data.json')
		.then((res) => {
			return res.json();
		})
		.then((json) => {
			console.log(json);
		});
}

// Create container of dates and
