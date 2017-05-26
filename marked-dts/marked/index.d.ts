// Type definitions for Marked
// Project: https://github.com/chjj/marked
// Definitions by: Kyohei Sasaki <https://github.com/sotalbireo>
// Forked from: William Orr <https://github.com/worr>
// Definitions: https://github.com/sotalbireo/a-la-carte/marked-dts

export = Marked;
export as namespace Marked;
declare var marked: Marked.Static;

declare namespace Marked {
	interface Renderer {
		code(code: string, language: string, escaped: boolean): string;
		blockquote(quote: string): string;
		html(html: string): string;
		heading(text: string, level: number, raw: string): string;
		hr(): string;
		list(body: string, ordered: boolean): string;
		listitem(text: string): string;
		paragraph(text: string): string;
		table(header: string, body: string): string;
		tablerow(content: string): string;
		tablecell(content: string, flags: {
				header: boolean,
				align: string
		}): string;

		// span level renderer
		strong(text: string): string;
		em(text: string): string;
		codespan(code: string): string;
		br(): string;
		del(text: string): string;
		link(href: string, title: string, text: string): string;
		image(href: string, title: string, text: string): string;
		text(text: string): string;
	}

	interface Options {
		/**
		 * Enable GitHub flavored markdown.
		 */
		gfm?: boolean;

		/**
		 * Enable GFM tables. This option requires the gfm option to be true.
		 */
		tables?: boolean;

		/**
		 * Enable GFM line breaks. This option requires the gfm option to be true.
		 */
		breaks?: boolean;

		/**
		 * Conform to obscure parts of markdown.pl as much as possible.
		 * Don't fix any of the original markdown bugs or poor behavior.
		 */
		pedantic?: boolean;

		/**
		 * Sanitize the output. Ignore any HTML that has been input.
		 */
		sanitize?: boolean;

		/**
		 * A function to sanitize HTML tags.
		 * This option requires the sanitize option to be true.
		 * The function takes one argument: html.
		 */
		sanitizer? (html: string): string;

		/**
		 * Mangle the email address. Escape to Unicode character entities.
		 */
		mangle?: boolean;

		/**
		 * Use smarter list behavior than the original markdown.
		 * May eventually be default with the old behavior moved into pedantic.
		 */
		smartLists?: boolean;

		/**
		 * Shows an HTML error message when rendering fails.
		 */
		silent?: boolean;

		/**
		 * A function to highlight code blocks.
		 * The function takes three arguments: code, lang, and callback.
		 */
		highlight? (code: string, lang: string, callback?: Function): string;

		/**
		 * Set the prefix for code block classes.
		 */
		langPrefix?: string;

		/**
		 * Use "smart" typograhic punctuation for things like quotes and dashes.
		 */
		smartypants?: boolean;

		/**
		 * example: Renrderer.header(text="text", level=1, raw="Header Raw"),
		 * and headerPrefix="__" to be like this;
		 * <h1 id="__header-raw">text</h1>
		 */
		headerPrefix?: string;

		/**
		 * Type: object
		 * Default: new Renderer()
		 * An object containing functions to render tokens to HTML.
		 */
		renderer?: Renderer;

		/**
		 * Change the behavior of empty element(br, hr, img) as:
		 * xhtml ? "<br />" : "<br>";
		 */
		xhtml?: boolean;
	}

	interface Static {
		/**
		 * Compiles markdown to HTML.
		 *
		 * @param src String of markdown source to be compiled
		 * @param callback Function called when the markdownString has been fully parsed when using async highlighting
		 * @return String of compiled HTML
		 */
		(src: string, callback: Function): string;

		/**
		 * Compiles markdown to HTML.
		 *
		 * @param src String of markdown source to be compiled
		 * @param options Hash of options
		 * @param callback Function called when the markdownString has been fully parsed when using async highlighting
		 * @return String of compiled HTML
		 */
		(src: string, options?: Options, callback?: Function): string;

		/**
		 * @param src String of markdown source to be compiled
		 * @param options Hash of options
		 */
		lexer(src: string, options?: Options): any[];

		/**
		 * Compiles markdown to HTML.
		 *
		 * @param src String of markdown source to be compiled
		 * @param callback Function called when the markdownString has been fully parsed when using async highlighting
		 * @return String of compiled HTML
		 */
		parse(src: string, callback: Function): string;

		/**
		 * Compiles markdown to HTML.
		 *
		 * @param src String of markdown source to be compiled
		 * @param options Hash of options
		 * @param callback Function called when the markdownString has been fully parsed when using async highlighting
		 * @return String of compiled HTML
		 */
		parse(src: string, options?: Options, callback?: Function): string;

		/**
		 * @param options Hash of options
		 */
		parser(src: any[], options?: Options): string;

		/**
		 * Sets the default options.
		 *
		 * @param options Hash of options
		 */
		setOptions(options: Options): Static;

		Renderer: {
			new(): Renderer;
		}

		Parser: {
			new(options: Options): Parser;
		}
	}

	interface Parser {
		parse(source: any[]): string
	}


	interface blockLevelGrammar {
		newline?: RegExp
		code?: RegExp
		fences?: RegExp
		hr?: RegExp
		heading?: RegExp
		nptable?: RegExp
		lheading?: RegExp
		blockquote?: RegExp
		list?: RegExp
		html?: RegExp
		def?: RegExp
		table?: RegExp
		paragraph?: RegExp
		text?: RegExp

		bullet?: RegExp
		item?: RegExp
		_tag?: RegExp

		normal?: RegExp
		gfm?: RegExp
	}



	/**
	 * ES6 Class
	 */


	class Component {
	}



	/**
	 * Helper
	 */

}
