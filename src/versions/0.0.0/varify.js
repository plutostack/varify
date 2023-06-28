/**
 * Varify
 * Varify is a javascript framework for rendering variables in native html
 *
 * @author PlutoStack
 * @copyright 2023
 * @license MIT <https://opensource.org/license/mit/>
 * @link https://github.com/plutostack/varify
 * @module Varify
 * @version 0.0.0
 */

"use strict";

export default async function init(query_element, variables) {
    const element = document.querySelector(query_element);
    let html = element.innerHTML;

    html = html.replace(/\${(.*?)}/g, (match, variable) => variables[variable] || '');
    element.innerHTML = html;
}
