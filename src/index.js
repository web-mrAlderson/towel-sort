
// You should implement your task here.

module.exports = function towelSort(arr) {
	if(arr === undefined){
		return [];
	}
	for (let i = 0; i < arr.length; i++) {
		if (i % 2 !== 0) {
			arr[i].reverse();
		} else {
			continue;
		}

	}
	let result = [].concat(...arr);
	return result;
}
