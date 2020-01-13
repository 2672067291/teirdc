let length = 28;
const thankyou = $("#thankyou");
function getRandomStr(len = 28) {
    const nums = "0123456789",
        lowerCase = "abcdefghijklmnopqrstuvwxyz",
        chars = nums + lowerCase + lowerCase.toUpperCase();
    let sign = "";
    for (let i = 0; i < len; i++) {
        sign += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return sign;
}

function changeText() {
    if (length > 0) {
        thankyou.html("> " + getRandomStr(length));
        length--;
    } else {
        thankyou.html("> ");
    }
}

function finished() {
    let cursor = "visible";
    window.setInterval(function () {
        $(".cursor").css("visibility", (cursor ? "hidden" : "visible"));
        cursor = !cursor;
    }, 500);
    let delay = 30000;
    setTimeout(function () {
        changeText();
        delay = 5000;
        setTimeout(function () {
            changeText();
            delay = 1000;
            setTimeout(function () {
                changeText();
                delay = 500;
                setTimeout(function () {
                    changeText();
                    delay = 100;
                    setTimeout(function () {
                        changeText();
                        setTimeout(function () {
                            changeText();
                            setTimeout(function () {
                                changeText();
                                setTimeout(function () {
                                    changeText();
                                    setTimeout(function () {
                                        changeText();
                                        setTimeout(function () {
                                            changeText();
                                            setTimeout(function () {
                                                changeText();
                                                setTimeout(function () {
                                                    changeText();
                                                    setTimeout(function () {
                                                        changeText();
                                                        setTimeout(function () {
                                                            changeText();
                                                            setTimeout(function () {
                                                                changeText();
                                                                setTimeout(function () {
                                                                    changeText();
                                                                    setTimeout(function () {
                                                                        changeText();
                                                                        setTimeout(function () {
                                                                            changeText();
                                                                            setTimeout(function () {
                                                                                changeText();
                                                                                setTimeout(function () {
                                                                                    changeText();
                                                                                    setTimeout(function () {
                                                                                        changeText();
                                                                                        setTimeout(function () {
                                                                                            changeText();
                                                                                            setTimeout(function () {
                                                                                                changeText();
                                                                                                setTimeout(function () {
                                                                                                    changeText();
                                                                                                    setTimeout(function () {
                                                                                                        changeText();
                                                                                                        setTimeout(function () {
                                                                                                            changeText();
                                                                                                            setTimeout(function () {
                                                                                                                changeText();
                                                                                                                setTimeout(function () {
                                                                                                                    changeText();
                                                                                                                    setTimeout(function () {
                                                                                                                        changeText();
                                                                                                                        delay = 500;
                                                                                                                        setTimeout(function () {
                                                                                                                            thankyou.html("> ");
                                                                                                                            setTimeout(function () {
                                                                                                                                thankyou.html("> C");
                                                                                                                                setTimeout(function () {
                                                                                                                                    thankyou.html("> Co");
                                                                                                                                    setTimeout(function () {
                                                                                                                                        thankyou.html("> Con");
                                                                                                                                        setTimeout(function () {
                                                                                                                                            thankyou.html("> Conn");
                                                                                                                                            setTimeout(function () {
                                                                                                                                                thankyou.html("> Conne");
                                                                                                                                                setTimeout(function () {
                                                                                                                                                    thankyou.html("> Connec");
                                                                                                                                                    setTimeout(function () {
                                                                                                                                                        thankyou.html("> Connect");
                                                                                                                                                        setTimeout(function () {
                                                                                                                                                            thankyou.html("> Connecti");
                                                                                                                                                            setTimeout(function () {
                                                                                                                                                                thankyou.html("> Connectin");
                                                                                                                                                                setTimeout(function () {
                                                                                                                                                                    thankyou.html("> Connecting");
                                                                                                                                                                    setTimeout(function () {
                                                                                                                                                                        thankyou.html("> Connecting ");
                                                                                                                                                                        setTimeout(function () {
                                                                                                                                                                            thankyou.html("> Connecting t");
                                                                                                                                                                            setTimeout(function () {
                                                                                                                                                                                thankyou.html("> Connecting to");
                                                                                                                                                                                setTimeout(function () {
                                                                                                                                                                                    thankyou.html("> Connecting to ");
                                                                                                                                                                                    setTimeout(function () {
                                                                                                                                                                                        thankyou.html("> Connecting to t");
                                                                                                                                                                                        setTimeout(function () {
                                                                                                                                                                                            thankyou.html("> Connecting to th");
                                                                                                                                                                                            setTimeout(function () {
                                                                                                                                                                                                thankyou.html("> Connecting to the");
                                                                                                                                                                                                setTimeout(function () {
                                                                                                                                                                                                    thankyou.html("> Connecting to the ");
                                                                                                                                                                                                    setTimeout(function () {
                                                                                                                                                                                                        thankyou.html("> Connecting to the T");
                                                                                                                                                                                                        setTimeout(function () {
                                                                                                                                                                                                            thankyou.html("> Connecting to the Te");
                                                                                                                                                                                                            setTimeout(function () {
                                                                                                                                                                                                                thankyou.html("> Connecting to the Ter");
                                                                                                                                                                                                                setTimeout(function () {
                                                                                                                                                                                                                    thankyou.html("> Connecting to the Term");
                                                                                                                                                                                                                    setTimeout(function () {
                                                                                                                                                                                                                        thankyou.html("> Connecting to the Termi");
                                                                                                                                                                                                                        setTimeout(function () {
                                                                                                                                                                                                                            thankyou.html("> Connecting to the Termin");
                                                                                                                                                                                                                            setTimeout(function () {
                                                                                                                                                                                                                                thankyou.html("> Connecting to the Termina");
                                                                                                                                                                                                                                setTimeout(function () {
                                                                                                                                                                                                                                    thankyou.html("> Connecting to the Terminal");
                                                                                                                                                                                                                                    setTimeout(function () {
                                                                                                                                                                                                                                        thankyou.html("> Connecting to the Terminal.");
                                                                                                                                                                                                                                        setTimeout(function () {
                                                                                                                                                                                                                                            thankyou.html("> Connecting to the Terminal..");
                                                                                                                                                                                                                                            setTimeout(function () {
                                                                                                                                                                                                                                                thankyou.html("> Connecting to the Terminal...");
                                                                                                                                                                                                                                                setTimeout(function () {
                                                                                                                                                                                                                                                    thankyou.html("> Connecting to the Terminal....");
                                                                                                                                                                                                                                                    setTimeout(function () {
                                                                                                                                                                                                                                                        thankyou.html("> Connecting to the Terminal.....");
                                                                                                                                                                                                                                                        setTimeout(function () {
                                                                                                                                                                                                                                                            thankyou.html("> Connecting to the Terminal......");
                                                                                                                                                                                                                                                            delay = 1000;
                                                                                                                                                                                                                                                            setTimeout(function () {
                                                                                                                                                                                                                                                                thankyou.html("> Done!");
                                                                                                                                                                                                                                                                delay = 3000;
                                                                                                                                                                                                                                                                setTimeout(function () {
                                                                                                                                                                                                                                                                    consoleOpen();
                                                                                                                                                                                                                                                                }, delay);
                                                                                                                                                                                                                                                            }, delay);
                                                                                                                                                                                                                                                        }, delay);
                                                                                                                                                                                                                                                    }, delay);
                                                                                                                                                                                                                                                }, delay);
                                                                                                                                                                                                                                            }, delay);
                                                                                                                                                                                                                                        }, delay);
                                                                                                                                                                                                                                    }, delay);
                                                                                                                                                                                                                                }, delay);
                                                                                                                                                                                                                            }, delay);
                                                                                                                                                                                                                        }, delay);
                                                                                                                                                                                                                    }, delay);
                                                                                                                                                                                                                }, delay);
                                                                                                                                                                                                            }, delay);
                                                                                                                                                                                                        }, delay);
                                                                                                                                                                                                    }, delay);
                                                                                                                                                                                                }, delay);
                                                                                                                                                                                            }, delay);
                                                                                                                                                                                        }, delay);
                                                                                                                                                                                    }, delay);
                                                                                                                                                                                }, delay);
                                                                                                                                                                            }, delay);
                                                                                                                                                                        }, delay);
                                                                                                                                                                    }, delay);
                                                                                                                                                                }, delay);
                                                                                                                                                            }, delay);
                                                                                                                                                        }, delay);
                                                                                                                                                    }, delay);
                                                                                                                                                }, delay);
                                                                                                                                            }, delay);
                                                                                                                                        }, delay);
                                                                                                                                    }, delay);
                                                                                                                                }, delay);
                                                                                                                            }, delay);
                                                                                                                        }, delay);
                                                                                                                    }, delay);
                                                                                                                }, delay);
                                                                                                            }, delay);
                                                                                                        }, delay);
                                                                                                    }, delay);
                                                                                                }, delay);
                                                                                            }, delay);
                                                                                        }, delay);
                                                                                    }, delay);
                                                                                }, delay);
                                                                            }, delay);
                                                                        }, delay);
                                                                    }, delay);
                                                                }, delay);
                                                            }, delay);
                                                        }, delay);
                                                    }, delay);
                                                }, delay);
                                            }, delay);
                                        }, delay);
                                    }, delay);
                                }, delay);
                            }, delay);
                        }, delay);
                    }, delay);
                }, delay);
            }, delay);
        }, delay);
    }, delay);
}

$(".marquee").bind("finished", function () {
    $(this).marquee("destroy");
    $(".marquee").hide();
    $(".easteregg").show();
    finished();
}).marquee({
    duration: 25000,
    direction: "up"
});