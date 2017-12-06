/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */
define(["require", "exports", "N/record"], function (require, exports, record_1) {
    Object.defineProperty(exports, "__esModule", { value: true });
    // import * as moment from 'moment'
    exports.onRequest = function (ctx) {
        var folder = record_1.load({ type: 'folder', id: 36464 });
        var allfields = folder.getFields().join(', ');
        ctx.response.write("<br>allfields: " + allfields);
        // ctx.response.write('<br>from start of the day: '+moment().startOf('day').fromNow())
    };
});
