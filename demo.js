function transcript() {
    let eng = ["banana", "apple", "orange", "pen", "pencil", "book"];
    let vie = ["chuối", "táo", "cam", "bút", "bút chì", "sách"];
    let string = document.getElementById("string").value;
    let index_eng = 0;
    let result = "";
    for (let i = 0; i < eng.length; i++) {
        if (string == eng[i]) {
            index_eng = i;
            for (let j = 0; j < vie.length; j++) {
                if (index_eng == j) {
                    result = vie[j];
                }
            }
        }
    }
    document.getElementById("result").innerHTML = result;
}