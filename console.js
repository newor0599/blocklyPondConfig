/*This script have to be paste inside inspector for console to work properly*/
function setupConsoleLogCapture(console_=document.querySelector(".console>textarea")) {
    console_.classList.add("console-enabled")
    var oldLog = console.log;
    console.log = function () {
        var args = Array.prototype.slice.call(arguments);
	console_.value += `${args.join(' ')}\n`
        oldLog.apply(console, args);
    };
}
setupConsoleLogCapture()
console.log("Console setup succesfull")
