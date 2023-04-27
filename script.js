
ConTextGroup = {
    "index": "YME이 만든 개발 프로젝트를 모아둔 페이지입니다. 자세한 설명은 각 항목을 참조하세요.",
    "forsale": `도와줘요 애덤스미스! (구 한정수량 특가판매!) 보드게임을 위한 페이지입니다. 각 항목마다 랜덤한 값을 산출합니다.`,
    "rofansimul": `로판 주인공을 만드는 시뮬레이터입니다. 현재 랜덤 데이터만 만들 수 있으며, 추후 닉네임을 입력받고 해당 값에 따라 시뮬레이터 값이 변경되도록 업데이트할 예정입니다.`
}

ConBtnGroup = {
    "forsale": `./forsale/index.html`,
    "rofansimul": `./RofanSimul/index.html`
}

function SetContents(id) {
    var MenuTag = document.getElementById(id);
    var MenuText = MenuTag.textContent
    var ContTitle = document.getElementById("content_title");
    ContTitle.textContent = MenuText;
    var ContText = document.getElementById("content_text");
    ContText.textContent = ConTextGroup[id];
    var ContLnk = document.getElementById("content_link");
    ContLnk.href = ConBtnGroup[id];
    var ContBtn = document.getElementById("content_button");
    if (id != "index") {
        ContBtn.style.display = "";
    } else {
        ContBtn.style.display = "none";
    }
    var menus = document.querySelectorAll('.menu');
    menus.forEach(elem => {
        elem.style.fontWeight = "";
    });
    MenuTag.style.fontWeight = "bold";
}

function setcolor(color){
    var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length){
            alist[i].style.color = color;
            i = i + 1;
        }
}
function nightdaytoggle(self){
    var target = document.querySelector('link');
    if (self.value === 'day'){
        target.href = 'style-night.css';
        self.value = 'night';
        self.textContent = 'Night mode';
        //setcolor('powderblue');
        }
        else {
        target.href = 'style.css';
        self.value = 'day';
        self.textContent = 'Day mode'
        //setcolor('darkblue');
        }
}