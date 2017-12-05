/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */

import { load } from 'N/record';
import { EntryPoints } from 'N/types';
export var onRequest: EntryPoints.Suitelet.onRequest = (ctx) => {
    ctx.response.write('hello<br>')
    var folder = load({ type: 'folder', id: 36464 })
    var name = folder.getFields().join(', ')//.getField({fieldId: 'name'}).getValue()
    ctx.response.write(`assllll ${name}`)
}