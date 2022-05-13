const fruits = [
	"kiwi",
	"cherry",
	"pineapple",
	"cucumber",
	"banana",
	"melon",
	"grape",
	"orange",
	"pear",
];
const fruitCode = Math.floor(Math.random() * fruits.length);

function getFruit() {
	for (let number = 10; number <= 10000; number++) {
		if (number) {
			String(number)
				.split("")
				.map(Number)
				.reduce(function (a, b) {
					let sumNum = a + b;
					return sumNum;
				});
		}
		if (sumNum % 9 === 0) {
			return "apple";
		} else if (sumNum % 9 !== 0) {
			return fruitCode;
		}
	}
}
