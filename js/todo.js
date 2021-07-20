function todo_list() {
    let _title = document
        .getElementById("_title")
        .value;
    let contents = document
        .getElementById("contents")
        .value;

    alert("제목 : " + _title + "\n내용 : " + contents);
    document
        .getElementById("result")
        .innerText = _title;
    document
        .getElementById("result2")
        .innerText = contents;
}
