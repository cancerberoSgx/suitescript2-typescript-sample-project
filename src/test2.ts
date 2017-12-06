/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */

import { load } from 'N/record'
import {create} from 'N/search'
import { EntryPoints } from 'N/types'
// import * as moment from 'moment'
export var onRequest: EntryPoints.Suitelet.onRequest = (ctx) => {
    var folder = load({ type: 'folder', id: 36464 })
    var allfields = folder.getFields().join(', ')
    ctx.response.write(`<br>allfields: ${allfields}`) 
    // ctx.response.write('<br>from start of the day: '+moment().startOf('day').fromNow())
}

