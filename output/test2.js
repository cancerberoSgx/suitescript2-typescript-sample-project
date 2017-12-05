/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */
define(["require", "exports", "N/record"], function (require, exports, record_1) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.onRequest = function (ctx) {
        ctx.response.write('hello<br>');
        var folder = record_1.load({ type: 'folder', id: 36464 });
        var name = folder.getFields().join(', '); //.getField({fieldId: 'name'}).getValue()
        ctx.response.write("assllll " + name);
    };
});
