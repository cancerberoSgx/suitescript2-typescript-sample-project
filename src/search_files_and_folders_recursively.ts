/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */

import { EntryPoints } from 'N/types'
import { load } from 'N/record' 
import * as Search from 'N/search'
import {otherone} from './otherone'

function inspectObject(o, config={}) {
    var out = []
    for (var i in o) {
        out.push(i)
    }
    return out.join(', ')
}
function searchDirectFolderChildren(parentFolderId, response) {
    var folderSearch = Search.create({
        type: Search.Type.FOLDER,
        filters: [
            ['parent', 'is', parentFolderId]
        ],
        columns: ['name', 'internalid']
    })
    var results = []
    // TODO: this probably is paginated - call getPage
    var rr =  folderSearch.run()
    response.write('<br>inspect: '+inspectObject(rr))
    response.write('<br>toString: '+rr.toString())
    response.write('<br>toJSON: '+JSON.stringify(rr.toJSON()))
    rr.each(r => results.push(r) && true)
    return results
}


export var onRequest: EntryPoints.Suitelet.onRequest = (ctx) => {
    var folder = load({ type: 'folder', id: 36464 })
    folder.getFields()
    var allfields = folder.getFields().join(', ')
    ctx.response.write(`<br>All fields: ${allfields} JOJOJOJOJO!!`)

    var parentFolderId = -15
    var search1 = Search.create({
        type: Search.Type.FOLDER,
        filters: [
            ['parent', 'is', parentFolderId]
        ],
        columns: ['name', 'internalid']
    })
    ctx.response.write('<h1>Folders pink</h1>')
    var results = search1.run().each((result) => {
        ctx.response.write('<br><pre>' + JSON.stringify(result) + '</pre>')
        return true
    }) 

    searchDirectFolderChildren(parentFolderId, ctx.response)



    ctx.response.write(`<br>otherone:`+otherone()) 

}

