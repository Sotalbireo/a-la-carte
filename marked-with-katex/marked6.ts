/**
 * marked
 * Arranged by Sota Sasaki. (Licenses Inheritanced)
 * https://github.com/sotalbireo
 */
class Marked {
	private block:any
	private inline:any
	private options:any
	Renderer :Renderer
	Lexer
	Parser
	setBlockExp = () => {
		this.block = {}
	}
	setInlineExp = () => {
		this.inline = {}
	}
	setOptions = () => {
		this.options = {}
	}
	static render = (markdownString: string, options?: object, callback?: Function) => {
		let opts
		if(typeof options === 'function') {
			callback = options
			opts = {}
		}
		opts = Marked.merge({}, Marked.defaults, opts)
		const m = new Marked()
		return m.render(markdownString, opts, callback)
	}
	render = () => {
		try {
			return Marked.Parser.parse(Lexer.lex(src, opt), opt);
		} catch (e) {
			e.message += '\nPlease report this to https://github.com/sotalbireo/a-la-carte.';
			if (this.options.silent) {
				return `<p>An error occured:</p><pre>${Marked.escape(e.message + '', true)}</pre>`;
			}
			throw e;
		}
	}
	constructor(options?: object) {
		this.setBlockExp()
		this.setInlineExp()
		this.setOptions()



	}



	static escape = (html:string, encode:boolean, map={'<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}) => html.replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;').replace(/[<>"']/g, (m:'<'|'>'|'"'|"'")=>map[m])
	static unescape = (html:string) => {
		// explicitly match decimal, hex, and named HTML entities
		return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g, (_, n) => {
			n = n.toLowerCase()
			if (n === 'colon') return ':'
			if (n.charAt(0) === '#') {
				return n.charAt(1) === 'x'
					? String.fromCharCode(parseInt(n.substring(2), 16))
					: String.fromCharCode(+n.substring(1))
			}
			return ''
		})
	}
	static replace = () => {}
	static merge = (...obj:any[]) => {
		let targ:any, key:any;
		for(let i = 1; i < obj.length; ++i) {
			targ = obj[i]
			for(key in targ) {
				if((targ as object).hasOwnProperty(key)) {
					obj[0][key] = targ[key]
				}
			}
		}
		return obj[0] as object
	}
}






/**
 * Super renderer class
 */
class Renderer {
	private options
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
	constructor(opts) {
		this.options = opts
	}
}


/**
 * Lexer
 */
Marked.Lexer = class {
	private tokens
	private options
	private rules

}


/**
 * Parser
 */
Marked.Parser = class {
	private tokens
	private token
	private options
	static parse = (text:any[]) => {
		const p = new Marked.Parser()
		return p.parse(text)
	}
	parse = (src:any[]) => {
		this.tokens = src.reverse()
		let out = ''
		while(this.next()) {
			out += this.tok()
		}
		return out
	}
	/**
	 * Next token
	 */
	next = () => {
		return this.token = this.tokens.pop()
	}
	/**
	 * Preview next token
	 */
	peek = () => {
		return this.tokens[this.tokens.length-1] || 0
	}
	/**
	 * Parse text tokens
	 */
	parseText = () => {
		let body = this.token.text
		while(this.peek().type === 'text') {
			body += `\n${this.next().text}`
		}
		return this.inline.output(body)
	}
	/**
	 * Parse current token
	 */
	tok = () => {
		switch(this.token.type) {
			case 'space':
				return ''
			case 'hr':
				return this.renderer.hr()
			default:
				return ''
		}
	}
}
