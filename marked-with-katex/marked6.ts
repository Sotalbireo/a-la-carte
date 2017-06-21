/**
 * marked
 * Arranged by Sota Sasaki. (Licenses Inheritanced)
 * https://github.com/sotalbireo
 */
class Marked {
	private block:any
	private inline:any
	private options:any
	Renderer
	constructor(mdStr: string, options?: object, callback?: Function) {
		this.setBlockExp()
		this.setInlineExp()
		this.setOptions()

	}
	setBlockExp = () => {
		this.block = {}
	}
	setInlineExp = () => {
		this.inline = {}
	}
	setOptions = () => {
		this.options = {}
	}
	static render(){
		const m = new Marked
		return m.render()
	}
	render = () => {

	}



	escape = () => {}
	unescape = () => {}
	replace = () => {}
	merge = () => {}
}




Marked.Renderer = class Renderer {
	private options
	constructor(opts) {
		this.options = opts
	}
	private code = () => {}
	private blockquote = () => {}
	private html = () => {}
	private heading = () => {}
	private hr = () => {}
	private list = () => {}
	private listitem = () => {}
	private paragraph = () => {}
	private table = () => {}
	private tablerow = () => {}
	private tablecell = () => {}

	private _strong = () => {}
	private _em = () => {}
	private _codespan = () => {}
	private _br = () => {}
	private _del = () => {}
	private _link = () => {}
	private _image = () => {}
	private _text = () => {}
}

namespace Marked {






	class Lexer {

	}



	class Parser {

	}
}
