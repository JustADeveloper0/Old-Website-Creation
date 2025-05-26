let suF = document.getElementById('signup-form');
let siF = document.getElementById('signin-form');

function suFunc() {
    suF.style.transform = "translate(-50%, -50%) translateY(0%)";

    if (siF.style.transform == "translate(-50%, -50%) translateY(0%)") {
        siF.style.transform = "translate(-50%, -50%) translateY(-500%)";
    }
}

function close1Func() {
    suF.style.transform = "translate(-50%, -50%) translateY(-500%)";
}

function siFunc() {
    siF.style.transform = "translate(-50%, -50%) translateY(0%)";

    if (suF.style.transform == "translate(-50%, -50%) translateY(0%)") {
        suF.style.transform = "translate(-50%, -50%) translateY(-500%)";
    }
}

function close2Func() {
    siF.style.transform = "translate(-50%, -50%) translateY(-500%)";
}

function suFuncSQL() {
    alert("Sign Up (TO BE CONTINUED)");
}

function siFuncSQL() {
    alert("Sign In (TO BE CONTINUED)");
}
