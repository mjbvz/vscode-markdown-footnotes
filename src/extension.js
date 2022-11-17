'use strict'

export function activate() {
    return {
        extendMarkdownIt(md) {
            return md.use(require('markdown-it-footnote'));
        }
    };
}
