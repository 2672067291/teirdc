"use strict";
const console_window = $("#console-window");
const console_content = $("#console-content");
const HTML = $("HTML");
const inputline = $("#inputline");
const theinput = $("#theinput");
let firstOpen = true;
let prompt = true;
let consoleActive = false;

function consoleOpen() {
    if (consoleActive) {
        return;
    }
    consoleActive = true;
    console_window.fadeIn(500);
    console_window.focus();
    console_content.text("");
    if (firstOpen) {
        window.setInterval(function () {
            $("#prompt").css("visibility", (prompt ? "hidden" : "visible"));
            prompt = !prompt;
        }, 500);
        // noinspection JSUnresolvedFunction
        HTML.keypress(consoleKeypress);
        // noinspection JSUnresolvedFunction
        HTML.keydown(consoleKeydown);
        firstOpen = false;
    } else {
        console_content.html("<div id=\"inputline\">root:/ # <span id=\"theinput\"></span><span id=\"prompt\">_</span></div>");
    }
    inputline.show();
    consoleWriteLn("MeowOS");
    consoleWriteLn("Version 1.0.1 [Build 2020]");
    consoleWriteLn("Copyright (C) 2014-2020 MeowCat Studio All Rights Reserved.");
    consoleWriteLn("For A Command List, type \"help\".");
    consoleWriteLn();
    consoleWriteLn("Resuming work from last segmentation fault...");
    consoleWriteLn();
    window.setTimeout(function () {
        consoleWriteLn("MlgmXyysd:/Rabbit/ # Go -os");
        consoleWriteLn("Go> Segmentation fault (core dumped).");
        consoleWriteLn();
    }, 1000);
}

function consoleWrite(s) {
    s = s.replace(/\n/g, "<br/>");
    console_content.append(s);
    inputline.appendTo("#console-content");

    const div = console_content[0];
    if (div && div.scrollHeight) {
        div.scrollTop = div.scrollHeight;
    }
}

function consoleWriteLn(s = "") {
    consoleWrite(s + "\n");
}

let consoleLine = "";

function consoleKeydown(e) {
    if (!consoleActive) return 0;
    if (e.which === 8 && consoleLine.length > 0) {
        if (e.ctrlKey) {
            consoleLine = "";
            theinput.text(consoleLine);
        } else {
            consoleLine = consoleLine.substring(0, consoleLine.length - 1);
            theinput.text(consoleLine);
        }
    }
}

function consoleKeypress(e) {
    if (!consoleActive) return 0;

    if (e.altKey) {
        return 0;
    } else if (e.which === 10 || e.which === 13) {
        consoleEnter(consoleLine);
        consoleLine = "";
    } else if (e.which > 31 && e.which < 127) {
        consoleLine += String.fromCharCode(e.which);
    }
    theinput.text(consoleLine);

    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
    return false;
}

function consoleEnter(line) {
    consoleWriteLn("root:/ # " + line.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
    const cmd = line.split(" ");
    switch (cmd[0].toLowerCase()) {
        case "ls":
            consoleWriteLn(".:");
            consoleWriteLn("total 28");
            consoleWriteLn("-rwxr-xr-x 0 root root    4 Jan 01 08:00 arrive -> home/Rabbit/Go");
            consoleWriteLn("-rwxr-xr-x 0 root root    4 Jan 01 08:00 Go -> home/Rabbit/Go");
            consoleWriteLn("-rwxr-xr-x 0 root root    4 Jan 01 08:00 rank -> home/Rabbit/Go");
            consoleWriteLn("d--------- 0 root root 4096 Jan 01 08:00 home");
            consoleWriteLn("d--------- 0 root root 4096 Jan 01 08:00 usr");
            consoleWriteLn();
            consoleWriteLn("./home:");
            consoleWriteLn("ls: cannot open directory './home': Permission denied");
            consoleWriteLn();
            consoleWriteLn("./usr:");
            consoleWriteLn("ls: cannot open directory './usr': Permission denied");
            consoleWriteLn();
            break;
        case "dir":
        case "cat":
        case "cd":
        case "more":
        case "less":
        case "mkdir":
        case "md":
        case "del":
        case "delete":
        case "type":
        case "rd":
        case "rm":
        case "chdir":
        case "rmdir":
        case "scp":
        case "nmap":
            consoleWriteLn("Segmentation fault (core dumped).");
            consoleWriteLn();
            break;
        case "echo":
            if (cmd.length < 2) {
                consoleWriteLn();
            } else {
                consoleWriteLn(line.replace(/echo /i, "").replace(/</g, "&lt;").replace(/>/g, "&gt;"));
                consoleWriteLn();
            }
            break;
        case "go":
            consoleWriteLn("Go> OS daemon already running.");
            consoleWriteLn();
            break;
        case "pwd":
            consoleWriteLn("/");
            break;
        case "whoami":
            consoleWriteLn("root");
            break;
        case "who":
        case "w":
            consoleWriteLn("22:20:05 up 8 days, 16:52,  2 users,  load average: 0.00, 0.00, 0.00");
            consoleWriteLn("USER         TTY      FROM             LOGIN    IDLE     WHAT");
            consoleWriteLn("root         tty0     console          01Jan    0.00s    " + cmd[0]);
            consoleWriteLn("MlgmXyysd    pts/0    192.158.0.233    01Jan    26:32m   Go -os");
            consoleWriteLn();
            break;
        case "shutdown":
        case "reboot":
        case "halt":
        case "poweroff":
            consoleShutdown(cmd[0]);
            break;
        case "help":
            consoleWriteLn("file:");
            consoleWriteLn("    ls cd pwd mkdir rmdir type rd del delete rm cat more less scp");
            consoleWriteLn("system maintenance:");
            consoleWriteLn("    nmap who whoami shutdown reboot poweroff");
            consoleWriteLn();
            break;
        case "ver":
        case "version":
            consoleWriteLn("MeowOS");
            consoleWriteLn("Version 1.0.1 [Build 2020]");
            consoleWriteLn("Copyright (C) 2014-2020 MeowCat Studio All Rights Reserved.");
            consoleWriteLn();
            break;
        case "arrive":
            if (cmd.length < 3) {
                consoleWriteLn("arrive> Missing arguments");
                consoleWriteLn("arrive> Usage: arrive &lt;name&gt; &lt;email&gt;");
                consoleWriteLn();
            } else {
                let reg = new RegExp(/^\S+@\S+\.\S{2,}$/);
                if (reg.test(cmd[2])) {
                    inputline.hide();
                    consoleActive = false;
                    consoleWriteLn("arrive> Submitting...");
                    $.ajax({
                        url: "http://api.meowcat.store/submit-score/submit.php",
                        type: "POST",
                        data: {
                            name: cmd[1],
                            email: cmd[2]
                        },
                        success: function (result) {
                            try {
                                let res = JSON.parse(result);
                                if (res["status"] === "success") {
                                    consoleWriteLn("arrive> Your information has been submitted.");
                                    consoleWriteLn("arrive> Rank " + res["rank"] + ".");
                                    consoleWriteLn("arrive> The ranking list may be updated late, please wait patiently.");
                                    consoleWriteLn();
                                } else {
                                    consoleWriteLn("arrive> " + res["message"]);
                                    consoleWriteLn("arrive> If you call a support person, give them this info");
                                    consoleWriteLn("arrive> " + res["reason"]);
                                    consoleWriteLn();
                                }
                            } catch {
                                consoleWriteLn("arrive> An error was encountered while submitting your information.");
                                consoleWriteLn("arrive> The server is currently unavailable. Please try again later.");
                                consoleWriteLn();
                            }
                        },
                        error: function () {
                            consoleWriteLn("arrive> An error was encountered while submitting your information.");
                            consoleWriteLn("arrive> The databases is currently unavailable. Please try again later.");
                            consoleWriteLn();
                        },
                        complete: function () {
                            inputline.show();
                            consoleActive = true;
                        }
                    });
                } else {
                    consoleWriteLn("arrive> Error: email invalid.");
                    consoleWriteLn();
                }
            }
            break;
        case "rank":
            consoleWriteLn("Permission denied");
            break;
        case "":
            break;
        default:
            consoleWriteLn("sh: " + cmd[0] + ": not found");
            consoleWriteLn();
    }

}

function consoleShutdown(type) {
    const shutdownInterval = window.setInterval(shutdownMessage, 800);
    const shutdownMessages = [
        "Shutting down MeowOS", ".", ".", ".", ".", ".", ".", "done", "\n\n",
        "Shutting down YourSQL Server", ".", ".", ".", ".", ".", ".", "done", "\n\n",
        "Syncing disks", ".", ".", ".", ".", ".", ".", "done", "\n\n",
        "Standby for " + type + ".",
        "\n", "\n", "\n", "Goodbye!", "", "", ""
    ];
    inputline.hide();
    consoleActive = false;

    consoleWriteLn();
    consoleWriteLn("Broadcast message from root@root (console):");
    consoleWriteLn();
    consoleWriteLn("The system is going down for " + type + " NOW!");
    consoleWriteLn();
    let shutdownPosition = 0;

    function shutdownMessage() {
        if (shutdownPosition >= shutdownMessages.length - 1) {
            window.clearInterval(shutdownInterval);
            console_window.fadeOut(500);
            if (type === "reboot") {
                window.setTimeout(consoleOpen, 5000);
            } else {
                thankyou.html("> Thank you for play this game");
            }
        }
        consoleWrite(shutdownMessages[shutdownPosition]);
        shutdownPosition++;
    }

}