const vscode = require('vscode');

function provideCompletionItems(document,position, token, context){
    const line=document.lineAt(position);
    console.log("line====>",line);

    // 截取到光标位置的字符
    const lineText=line._text.substring(0,position.character);
    console.log("lineText=====>",lineText);
    // console.log("workspace",vscode.workspace.workspaceFolders);
    // const projectPath=vscode.workspace.workspaceFolders[0].uri.path;
    // const allTypes=require(`${projectPath}/J2W/components/common/index.js`);
    // console.log("allTypes====>",allTypes);
    if(/(^| )type:/.test(lineText)){
        console.log(true);
        const types=['"form"','"text"','"input"','"switch"','"select"','"textarea"','"inputNumber"','"checkbox"','"table"','"modal"','"button"','"page"','"timePicker"'];
        const typeItems=types.map((type)=>( new vscode.CompletionItem('\xa0'+type,vscode.CompletionItemKind.Field)));
        return typeItems;
    }
}

function resolveCompletionItem(item,token){
    console.log("item====>",item);
    console.log("token====>",token);
}

module.exports = function(context){
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider('javascript', {
        provideCompletionItems,
        resolveCompletionItem
    }, ':'));
};