/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */
define(["require", "exports", "N/record", "./otherone"], function (require, exports, record_1, otherone_1) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.onRequest = function (ctx) {
        var folder = record_1.load({ type: 'folder', id: 36464 });
        var allfields = folder.getFields().join(', ');
        ctx.response.write("<br>All fields: " + allfields + " !!!");
        ctx.response.write("<br>otherone:" + otherone_1.otherone());
    };
});
