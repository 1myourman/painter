/*
1. 마우스 클릭 상태에서 이동 시 검은색 컬러로 선이 그려져야 합니다.
2. 초기화 버튼을 누르면 그린 그림이 초기화 되어야 합니다.
3. 바닐라 js 만을 사용해야 합니다.
4. 라이브러리를 사용하면 안됩니다.
5. 웹에서 관련된 기술을 검색해서 참고하여도 되지만, 코드는 직접 다 작성하셔야 하며
사용되는 함수 및 api 내용을 정확히 이해하고 사용하셔야 합니다. */

const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const resetBtn = document.getElementById("jsReset");
const colors = document.getElementsByClassName("jsColor");

const CANVAS_SIZE = 700;
//giving it physical size to the context
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
ctx.strokeStyle = "#000000";
ctx.lineWidth = 2.5;

let painting = false;

function stopPaint() {
	painting = false;
}

function startPaint() {
	painting = true;
}

function mouseMoves(e) {
	const x = e.offsetX; //tracking coordinates of the mouse
	const y = e.offsetY;
	if (!painting) {
		ctx.beginPath();
		ctx.moveTo(x, y);
	} else {
		ctx.lineTo(x, y);
		ctx.stroke();
	}
}

function mouseDowns() {
	painting = true;
}

function handleColorClick(e) {
	const color = e.target.style.backgroundColor;
	ctx.strokeStyle = color;
}

function reset() {
	ctx.clearRect(0, 0, canvas.width, canvas.height), ctx.beginPath();
}

if (canvas) {
	canvas.addEventListener("mousemove", mouseMoves);
	canvas.addEventListener("mousedown", startPaint);
	canvas.addEventListener("mouseup", stopPaint);
	canvas.addEventListener("mouseleave", stopPaint);
}

Array.from(colors).forEach((color) =>
	color.addEventListener("click", handleColorClick)
);

if (resetBtn) {
	resetBtn.addEventListener("click", reset);
}
