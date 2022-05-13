
const getQuarter = (months) => {
	if (months / 3 <= 1) return 1;
	else if (months / 3 <= 2) return 2;
	else if (months / 3 <= 3) return 3;
	else if (months / 3 <= 4) return 4;
	else return "Please enter valid number";
}