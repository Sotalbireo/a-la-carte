const init = () => {
	// if (location.pathname !==
	// 	'/page/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8')
	// 	return;
	const body = document.getElementById('content')!;
	const caret = '<span class="caret"></span>';
	const sleep = async function (delay: number) {
		return new Promise(resolve => {
			setTimeout(resolve, delay);
		});
	};
	const typing = async function (strs: string, timing = 80) {
		const chars = strs.split('');
		const pushChar = (char: string, target: HTMLElement) => {
			target.innerHTML += char + caret;
		};

		Promise.resolve(0).then(function loop(i) {
			return new Promise(function(resolve) {
				if(i < chars.length) {
					setTimeout(function() {
						pushChar(chars[i], body);
						resolve(i+1);
					}, timing);
				}
			})
			.then(loop);
		});
	};

	body.innerHTML = caret;
	typing('あいうえお　かきくけこ');


};

if (document.readyState !== 'loading') {
	init();
} else {
	document.addEventListener('DOMContentLoaded', init);
}
