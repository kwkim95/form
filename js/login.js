function do_login() {
    let id = document
        .getElementById("id")
        .value;
    let pwd = document
        .getElementById("pwd")
        .value;

    if (id == "cloudmsa" && pwd == "cloudmsa") {
        alert("로그인 성공");
        location.href = "./index.html";
    } else {
        alert("로그인 실패");
        location.href = "./login.html";
    }
}

function printId() {
    let print_id = document
        .getElementById("id")
        .value;
    window
        .localStorage
        .setItem("print_id", print_id);
}
