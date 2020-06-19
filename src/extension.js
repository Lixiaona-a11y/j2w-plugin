const vscode = require('vscode');
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('Congratulations, your extension "j2w-plugin" is now active!');
	require("./hello")(context);
	require("./completioncolon")(context);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}
module.exports = {
	activate,
	deactivate
}
