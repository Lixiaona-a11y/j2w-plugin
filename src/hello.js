const vscode=require("vscode");

module.exports=function(context){
    let disposable = vscode.commands.registerCommand('j2w-plugin.helloWorld', function () {
		vscode.window.showInformationMessage('Hello World from j2w-plugin!');
	});

	context.subscriptions.push(disposable);
}