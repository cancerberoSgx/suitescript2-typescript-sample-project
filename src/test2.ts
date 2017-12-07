/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */

import { EntryPoints } from 'N/types'
import { load } from 'N/record'
import * as Search from 'N/search' 

import {otherone} from './otherone'

export var onRequest: EntryPoints.Suitelet.onRequest = (ctx) => {
    var folder = load({ type: 'folder', id: 36464 })
    var allfields = folder.getFields().join(', ')
    ctx.response.write(`<br>All fields: ${allfields} !!!`) 
    ctx.response.write(`<br>otherone:`+otherone()) 

}

