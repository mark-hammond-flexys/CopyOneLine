// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const { env } = require('process');
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "copyoneline" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('copyoneline.copyText', function () {
		// The code you place here will be executed every time your command is executed

		let thisEditor = vscode.window.activeTextEditor;

		let thisSelectedText = thisEditor.document.getText(thisEditor.selection);

		// Display a message box to the user

		// Not sure why, but "\s doesn't seemt to work?
		
		const regEx= new RegExp ("\n[\t ]*","g");
		let newText=thisSelectedText.replaceAll(regEx, "");
		vscode.env.clipboard.writeText(newText);
		vscode.window.showInformationMessage("Copied as single compressed line.");
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
