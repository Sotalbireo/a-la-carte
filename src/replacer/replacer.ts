class Typewriter {
	private targetParent: HTMLElement;
	private targetDom: HTMLParagraphElement;
	private caretClassName = 'caret';
	constructor(targetQuery: string, overwrite = false) {
		try {
			const queries = document.querySelectorAll(targetQuery);
			if (queries.length !== 1) {
				throw `Target query "${targetQuery}"; must be unique DOM.`;
			}
			this.targetParent = <HTMLElement>queries[0];
		} catch(e) {
			console.error(e);
			throw e.message;
		}
		this.targetDom = document.createElement('p');
		this.targetDom.classList.add(this.caretClassName);
		if (overwrite) this.targetParent.innerHTML = '';
	}
	private crlf = () => {
		const span = document.createElement('span');
		this.targetDom.appendChild(span);
		span.innerHTML = `<br>\n`;
	}



	newPage = async () => new Promise(resolve => {
		this.targetParent.appendChild(this.targetDom);
		resolve();
	})


	typing = async (strs: string, timing = 90) => {
		let i = 0;
		const span = document.createElement('span');
		this.targetDom.appendChild(span);

		return new Promise(function (resolve) {
			const type = setInterval((function () {
				if (i < strs.length) {
					span.innerHTML += strs[i];
					i += 1;
				} else {
					clearInterval(type);
					setTimeout(()=>{
						span.innerHTML += '<br>';
					}, timing * 4);
					setTimeout(resolve, timing * 12);
				}
			}), timing);
		});
	}

	wait = async (time: number, crlf = true) => new Promise(resolve => {
		if (crlf) this.crlf();
		setTimeout(resolve, time);
	})
}

const init = function () {
	const t = new Typewriter('#content', true);
	t.newPage()
		.then(_ => t.wait(5000, false))
		.then(_ => t.typing('これをあなたが読んでいる時、'))
		.then(_ => t.typing('わたしはわたしではないだろう。'))
		.then(_ => t.wait(4000))
		.then(_ => t.typing('このメッセージが表示されたということは、'))
		.then(_ => t.typing('そこにはあなた、わたし、涼宮ハルヒ、朝比奈みくる、'))
		.then(_ => t.typing('古泉一樹が存在しているはずである。'))
		.then(_ => t.wait(4000))
		.then(_ => t.typing('それが鍵。'))
		.then(_ => t.typing('あなたは解答を見つけ出した。'))
		.then(_ => t.wait(1000))
		.then(_ => t.wait(1000))
		.then(_ => t.wait(1000))
		.then(_ => t.wait(1000))
		.then(_ => t.typing('これは緊急脱出プログラムである。'))
		.then(_ => t.typing(''))
		.then(_ => t.typing('起動させる場合はエンターキーを、'))
		.then(_ => t.typing('そうでない場合はそれ以外のキーを選択せよ。'))
		.then(_ => t.wait(2000))
		.then(_ => t.typing('起動させた場合、'))
		.then(_ => t.typing('あなたは時空修正の機会を得る。'))
		.then(_ => t.typing('ただし成功は保障できない。'))
		.then(_ => t.typing('また帰還の保障もできない。'))
		.then(_ => t.wait(2000))
		.then(_ => t.typing('このプログラムが起動するのは一度きりである。'))
		.then(_ => t.typing('実行ののち、消去される。'))
		.then(_ => t.typing(''))
		.then(_ => t.typing('非実行が選択された場合は起動せずに消去される。'))
		.then(_ => t.wait(1000))
		.then(_ => t.wait(1000))
		.then(_ => t.wait(2000))
		.then(_ => t.typing('Ｒｅａｄｙ？', 700));

};

if (document.readyState !== 'loading') {
	init();
} else {
	document.addEventListener('DOMContentLoaded', init);
}
