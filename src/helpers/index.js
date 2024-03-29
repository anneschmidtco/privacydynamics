import MarkdownIt from "markdown-it";
import { format } from "date-fns";

export const spread = (obj) => {
	return JSON.parse( JSON.stringify( obj ) );
}

export const parseMarkdown = (value) => {
	const md = new MarkdownIt({
		html: true
	});
	return md.render(value.replace('\\', '\n' ));
}

export const parseDate = (date) => {
	return format(new Date(date), "MM.dd.yy");
}