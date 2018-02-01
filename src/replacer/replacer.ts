const init = () => {
	const body = document.getElementById('content')!;
	const caret = '<span class="caret"></span>';
	const typing = async function (strs: string, timing = 80) {
		const push = (char: string, _target: HTMLElement) => {
			// target.innerHTML = stdout + char + caret;
			console.log(stdout + char + caret);
			return char;
		};
		let stdout = '';
		const loop = function (i: number) {
			return (function () {
				setTimeout(() => {
					stdout += push(strs[i], body);
					loop(i + 1);
				}, timing);
			});
		}
		loop(0);
		const type = async function (strs: string) {
			return Promise.resolve(0)
				.then(function loop(i) {
					return new Promise(function (resolve) {
						if(i < strs.length) {
							setTimeout(function () {
								stdout += push(strs[i], body);
								resolve(i + 1);
							}, timing);
						} else {
							setTimeout(function () {
								push('<br>', body);
								return 1;
							}, timing * 3);
						}
					})
					.then(<any>loop);
				});
		};
	};


	body.innerHTML = caret;
	typing('これをあなたが読んでいる時、');
	// async function sample() {
	// 	await typing('これをあなたが読んでいる時、');
	// 	await typing('わたしはわたしではないだろう。')
	// }
	// sample();
		// .then(()=>typing('', 1200))
		// .then(()=>typing('このメッセージが表示されたということは、'))
		// .then(()=>typing('そこにはあなた、わたし、涼宮ハルヒ、朝比奈みくる、'))
		// .then(()=>typing('古泉一樹が存在しているはずである。'));


};

if (document.readyState !== 'loading') {
	init();
} else {
	document.addEventListener('DOMContentLoaded', init);
}
