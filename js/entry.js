function pwd_check() {
    let pwd = document
        .getElementById("pwd")
        .value;
    let re_pwd = document
        .getElementById("re_pwd")
        .value;

    if (pwd == re_pwd && pwd == "cloudmsa") {
        alert("회원가입 성공");
        location.href = "./login.html";
    } else {
        alert("비밀 번호가 다릅니다.");
    }
}
