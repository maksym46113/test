window.onload = () => {

	let game = document.querySelector('.game'),
		res = document.querySelector('.res'),
		btnGame = document.querySelector('.new-game'),
		fields = document.querySelectorAll('.field'),
		step = false,
		count = 0,
		circle = `<svg class="circle">
					<circle r="45" cx="58" cy="58" stroke="blue" stroke-width="10" fill="none" stroke-linecap="round" />
				</svg>`,
		cross = `<svg class="cross">
					<line class="first" x1="15" y1="15" x2="100" y2="100" stroke="red" stroke-width="10" stroke-linecap="round" />
					<line class="second" x1="100" y1="15" x2="15" y2="100" stroke="red" stroke-width="10" stroke-linecap="round" />
				</svg>`;

	function stepCross(target) {
        target.innerHTML = cross;
    }

	function stepZero(target) {
        target.innerHTML = circle;
	}

	function init(e) {
        if (!step) {
            stepCross(e.target)
        } else {
            stepZero(e.target)
        }
        step = !step;
        win();
	}

	function newGame() {
	}

	function win() {
	}

	btnGame.addEventListener('click', newGame);
	game.addEventListener('click', init);

}