const init = function () {
	const body = document.getElementById('content')!;
	const p = document.createElement('p');
	p.classList.add('caret');

	const wait = function (time: number) {
		return new Promise(function (resolve) {
			const span = document.createElement('span');
			p.appendChild(span);
			span.innerHTML += '<br>';
			setTimeout(resolve, time);
		});
	};

	const typing = function (strs: string, timing = 90) {
		let i = 0;
		const span = document.createElement('span');
		p.appendChild(span);

		return new Promise(function (resolve) {
			const type: any = setInterval((function () {
				if (i < strs.length) {
					span.innerHTML += strs[i];
					i += 1;
				} else {
					span.innerHTML += '<br>';
					clearInterval(type);
					setTimeout(resolve, timing * 8);
				}
			}), timing);
		});
	};

	body.innerHTML = '';
	body.appendChild(p);
	typing('これをあなたが読んでいる時、')
		.then(() => typing('わたしはわたしではないだろう。'))
		.then(() => wait(4000))
		.then(() => typing('このメッセージが表示されたということは、'))
		.then(() => typing('そこにはあなた、わたし、涼宮ハルヒ、朝比奈みくる、'))
		.then(() => typing('古泉一樹が存在しているはずである。'))
		.then(() => wait(4000))
		.then(() => typing('それが鍵。'))
		.then(() => typing('あなたは解答を見つけ出した。'))
		.then(() => wait(1000))
		.then(() => wait(1000))
		.then(() => wait(1000))
		.then(() => wait(1000))
		.then(() => typing('これは緊急脱出プログラムである。'))
		.then(() => typing(''))
		.then(() => typing('起動させる場合はエンターキーを、'))
		.then(() => typing('そうでない場合はそれ以外のキーを選択せよ。'))
		.then(() => wait(2000))
		.then(() => typing('起動させた場合、'))
		.then(() => typing('あなたは時空修正の機会を得る。'))
		.then(() => typing('ただし成功は保障できない。'))
		.then(() => typing('また帰還の保障もできない。'))
		.then(() => wait(2000))
		.then(() => typing('このプログラムが起動するのは一度きりである。'))
		.then(() => typing('実行ののち、消去される。'))
		.then(() => typing(''))
		.then(() => typing('非実行が選択された場合は起動せずに消去される。'))
		.then(() => wait(1000))
		.then(() => wait(1000))
		.then(() => wait(2000))
		.then(() => typing('Ｒｅａｄｙ？', 700))

};

if (document.readyState !== 'loading') {
	init();
} else {
	document.addEventListener('DOMContentLoaded', init);
}
