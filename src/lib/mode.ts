/** True in the PDF / QA export view, where every focus-style slide should show all of its content. */
export const IS_EXPORT = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('export') === 'true' && new URLSearchParams(window.location.search).get('step') === null
