const mouthimglist = ['Princess-mouth01.svg', 'Princess-mouth02.svg', 'Princess-mouth03.svg','Princess-mouth04.svg','Princess-mouth05.svg','Princess-mouth06.svg']
const mouthtag = document.getElementById('portmouth')
mouthtag.setAttribute('src', "lib/"+mouthimglist[Math.floor(Math.random() * mouthimglist.length)])

/*털들 시작*/
const eyerashimglist = ['Princess-eyerash01.svg', 'Princess-eyerash02.svg', 'Princess-eyerash03.svg']
const eyerashtag = document.getElementById('porteyerash')
eyerashtag.setAttribute('src', "lib/"+eyerashimglist[Math.floor(Math.random() * eyerashimglist.length)])

const eyebrowimglist = ['Princess-eyebrow01.svg', 'Princess-eyebrow02.svg', 'Princess-eyebrow03.svg']
const eyebrowtag = document.getElementById('porteyebrow')
eyebrowtag.setAttribute('src', "lib/"+eyebrowimglist[Math.floor(Math.random() * eyebrowimglist.length)])

const hairimglist = ['Princess-hair01.svg', 'Princess-hair02.svg', 'Princess-hair03.svg', 'Princess-hair04.svg', 'Princess-hair05.svg']
const hairtag = document.getElementById('porthair')
hairtag.setAttribute('src', "lib/"+hairimglist[Math.floor(Math.random() * hairimglist.length)])
/*털들 끝*/

const haircolor = document.getElementsByClassName('porthaircolor');
var hairfiltervalue = `hue-rotate(${Math.floor(Math.random() * 360)}deg) brightness(${Math.floor(Math.random() * 160 + 20)}%) saturate(${Math.floor(Math.random() * 160 + 20)}%)`;
for (var i = 0; i < haircolor.length; i++) {
    haircolor[i].style.filter = hairfiltervalue;
}

const eyeimg = document.getElementById('porteye');
eyeimg.style.filter = `hue-rotate(${Math.floor(Math.random() * 360)}deg) brightness(${Math.floor(Math.random() * 160 + 20)}%) saturate(${Math.floor(Math.random() * 160 + 20)}%)`;


/*************************************************** */

const F_FirstName = ['가브리엘라', '글로리아', '넬리아', '니엘라', '다이아나', '데이나', '데이지', '델피네', '도로테아', '라일라', '레오넬라', '레이첼', '로넬리아', '로렐라인', '로미나', '로제', '로제타', '로젤리아', '로즈', '로즈마리', '루드베키아', '루비니아', '루시아', '루시아나', '루시엘', '루시엘라', '리디아', '리벨라', '릴리', '릴리안', '마가렛', '마델라인', '마르셀라', '마리안느', '마리엘라', '마릴린', '멜로디', '멜리사', '미카엘라', '밀라', '발레리아', '베로니카', '벨라', '벨리에타', '브리아나', '블리스', '비비아나', '비앙카', '비올레타', '빅토리아', '샐리', '샬롯', '세레나', '세르피나', '세실리아', '세이라', '셀레네', '셀리나', '셀린느', '소피아', '스칼렛', '스텔라', '시에네', '시온', '신디아', '아델라', '아델라인', '아드리아나', '아리아', '아리엘', '아이비', '아일린', '안젤리카', '앨리샤', '에밀리아', '에반젤린', '에블린', '에스텔라', '에이프릴', '에일린', '엘로니아', '엘로디', '엘레노어', '엘리사', '엘리아나', '엘리자베스', '엘린느', '오로라', '오필리아', '올리비아', '윈디아', '유레이나', '유리아나', '유리안느', '유리카', '유지안느', '율리아나', '이렌느', '이블린', '줄리에타', '첼리시아', '카렌', '카멜리아', '카일라', '캐롤라인', '코델리아', '크리스티나', '클라라', '타니아', '타티아나', '페넬로페', '플로라', '플로리나', '하이디', '헤이즐', '헬레나', '헬리아나', '헤일리', '이사벨', '바이올렛', '스칼렛', '시온느', '옥타비아', '이브로사','사루비아','리베라','체리샤'];
const F_LastName = ['베르너', '윈저', '프림로즈', '데본셔', '러틀랜드', '체스턴', '리치몬드', '클라임', '아르카', '헤스테인', '라셰르', '오페론', '이브리온', '아크리스', '파도나', '돌체', '프레스턴', '오코넬라', '이튼', '위트모어', '콜린스', '윈터스', '캐롤', '소렐', '피엘라', '칼린', '노벨라', '에메랄드', '세피로스', '사피아노', '디아몬트', '세이지', '하브론', '아도니스', '브라이스', '카스피온', '델리안', '엘리엇', '그리핀', '헤이든', '라클렌', '루이즈', '오스카르', '피닉스', '세르니안', '시도어', '이노센트', '올피움', '엘하임', '라세느', '윌라임', '슈아벨', '프리델', '세피아', '메디치', '하이드', '키블론', '플랑', '네소르', '살리메르', '칼리트', '시어도르', '트로냐', '하모니', '프레지에', '루덴스', '이노셀리아', '발렌타인', '화이트', '블랙', '블레인', '체스키', '르블랭', '아인슈페너', '하인트', '프레데리크', '솔레미오', '케링턴', '아일데이아', '아도니스', '올리베르', '메이리', '보르도', '베르너', '샐리온', '폴랑', '알데바란', '데네브', '실리온', '벨루치', '리베라', '디아즈', '발렌시아', '카르데나스', '도노반', '클레이튼', '프란시스', '메이너드', '아이테르', '바실리카', '베스티아', '안겔루스', '칼리고', '카르멘', '에브게니아', '파베르', '이엘로', '유스티아', '라크리스', '리브리', '라피스', '루치페르', '마그누스', '마리니', '니베우스', '오페리스', '프레센티아', '루베르', '솔라티움', '헤레인', '제이스', '로렌스', '아를르', '슈나이젤', '파니엘로','라비니아','마르카','마르베스','포르테','라르고','아르엔느','린네','피게로아'];
const F_Class_Loyal = ['황녀', '황가의 사생아', '왕녀', '왕가의 사생아', '방계 황족', '방계 왕족', '황태자', '왕세자']
const F_Class_Noble = ['공작가', '후작가', '백작가', '자작가', '남작가'];
const F_Job_Noble = ['영애', '후계자', '사생아', '양녀', '출신 사업가', '출신 정보상', '출신 기사', '출신 용병', '출신 성녀', '출신 마법사', '출신 예술가'];
const F_Class_Normal = ['평민', '뒷골목'];
const F_Job_Normal = ['여자', '출신 기사', '출신 정보상', '출신 사업가', '자영업자', '용병', '출신 성녀', '출신 마법사', '예술가'];
const F_Type = ['빙의', '환생', '회귀'];
const F_Nature = ['외로움을 타는', '고집스런', '개구쟁이같은', '용감한', '대담한', '장난꾸러기같은', '촐랑거리는', '무사태평한', '조심스러운', '의젓한', '덜렁거리는', '냉정한', '차분한', '얌전한', '신중한', '건방진', '겁쟁이같은', '성급한', '명랑한', '천진난만한', '수줍음을 타는', '노력하는', '온순한', '변덕스러운', '성실한'];

/*************************************************** */

function setFeatures(id, group) {
    var element = document.getElementById(id);
    element.textContent = group[Math.floor(Math.random() * group.length)];
}

function setClass() {
    var randnum = Math.floor(Math.random() * 3);
    if (randnum == 1) {
        setFeatures('Class', F_Class_Loyal);
    } else if (randnum == 2) {
        setFeatures('Class', F_Class_Noble); setFeatures('Job', F_Job_Noble);
    } else {
        setFeatures('Class', F_Class_Normal); setFeatures('Job', F_Job_Normal);
    }
}

setFeatures('FirstName', F_FirstName); setFeatures('LastName', F_LastName);
setClass();
setFeatures('Type', F_Type);
setFeatures('Nature', F_Nature);



function setSpec(id, randnum) {
    var id = document.getElementById(id);
    var value = Math.floor(Math.random() * randnum);
    if (value > randnum * 0.9) {
        id.textContent = "훌륭하다";
    } else if (value > randnum * 0.8) {
        id.textContent = "좋다";
    } else if (value > randnum * 0.6) {
        id.textContent = "평균 이상";
    } else if (value > randnum * 0.4) {
        id.textContent = "평범";
    } else if (value < randnum * 0.2) {
        id.textContent = "낮은 편";
    } else if (value < randnum * 0.1) {
        id.textContent = "전무하다";
    } else {
        id.textContent = "그럭저럭";
    }
}

setSpec('Spec_HP', 500);
setSpec('Spec_MP', 500);
setSpec('Spec_Holy', 500);

setSpec('Spec_str', 100);
setSpec('Spec_dex', 100);
setSpec('Spec_int', 100);
setSpec('Spec_wis', 100);
setSpec('Spec_luk', 100);

/*************************************************** */

const FamList = [];

function SetParents(parent, ratio) {
    var num = Math.floor(Math.random() * (ratio + 1));
    if (num === 0) {
        return
    } else if (num !== 0) {
        FamList.push(parent);
    }
}

SetParents('어머니', 1);
SetParents('아버지', 2);

const Fam_Olders = ['언니', '오빠']
const Fam_Youngers = ['여동생', '남동생']

function SetSiblings(group) {
    var num = Math.floor(Math.random() * 2);
    if (num === 0) {
        return
    } else if (num === 1) {
        FamList.push(group[Math.floor(Math.random() * 2)]);
        for (var i = 10; i < 100; i = i + 5) {
            var num = Math.floor(Math.random() * i);
            if (num === 0) {
                FamList.push(group[Math.floor(Math.random() * 2)]);
            } else if (num > 0) {
                break
            }
        }
    }
}

SetSiblings(Fam_Olders);
SetSiblings(Fam_Youngers);


var SetFam = document.getElementById('Family');
if (FamList.length > 0) {
    SetFam.textContent = FamList;
} else if (FamList.length === 0) {
    SetFam.textContent = "없음";
}

/*************************************************** */

BoyEvent_Where_List = ['타국', '호수', '경마장', '황궁 정원', '티파티', '무도회', '아카데미', '고아원', '살롱', '저택', '강변', '들판', '집 앞', '별장', '뒷골목', '상점가', '축제', '성년식', '분수 앞', '의상실', '디저트 가게', '응접실', '황궁', '왕궁', '휴양지', '해변가', '미로 정원', '설산', '항구 도시', '유람선', '사냥제', '마탑', '상점']
BoyEvent_Who_List = ['황자와', '백작가 영식과', '공작가 영식과', '황태자와', '후작가 영식과', '자작가 영식과', '남작가 영식과', '평민 남자와', '소백작과', '소공작과', '소후작과', '소자작과', '소남작과', '공작과', '후작과', '백작과', '자작과', '남작과', '황제와', '왕과', '왕자와', '왕세자와', '암흑가 보스와', '차기 마탑주와', '이름 모를 미남과', '잘생긴 기사와', '잘생긴 호위기사와', '차기 교황과', '미남 용병과', '몰락 귀족 영식과', '망국의 왕자와', '마족 남자와', '신비한 남자와', '예술가와']
BoyEvent_How_List = ['엉켜 넘어져서', '마주쳐서', '데이트를 했고', '우연히 만나서', '진한 운명을 느끼고', '만나 손수건을 선물하고', '마주쳤을 때 현기증이 나서 부축받고', '염문설이 퍼져서', '왈츠를 추고', '만나 에스코트를 받고', '마주쳐 비밀을 들키고', '부딪혀 음료를 쏟아서', '뱃놀이를 가서', '시선을 마주하고', '마음을 확인하고', '몰래 빠져나가', '토론을 하고', '의기투합하여', '정치 이야기를 하며', '비밀 편지를 교환하고', '취미를 공유하고', '친애의 포옹을 하고', '마주쳐 손수건을 주워주고', '마주쳐 구해주고', '담소를 나누다', '서로 마음을 확인하고', '비슷한 의상을 입어서','눈을 맞추고','입을 맞추고','손을 맞잡고']
BoyEvent_Result_List = ['사랑에 빠졌다', '언쟁을 했다', '다음 만남을 기약했다', '깊은 인상을 남겼다', '좋은 인상을 받았다', '작별 인사를 했다', '첫눈에 반했다', '어릴 적 추억을 되새겼다', '담소를 나눴다', '흑역사를 적립했다', '수줍어했다', '기시감을 느꼈다', '아픔을 공유했다', '공감대를 형성했다', '그의 새로운 면모를 발견했다', '묘한 분위기가 되었다', '흑역사를 적립했다', '시간 가는 줄 몰랐다', '조언을 받았다', '조언을 했다', '착각에 빠졌다', '시간을 돌리고 싶었다', '울음을 터뜨렸다', '기쁘게 웃었다', '즐거운 시간을 보냈다', '좋은 사람이라는 확신을 받았다', '청혼을 받았다', '무도회 파트너 신청을 받았다', '선물 공세를 받았다', '터무니없는 오해를 했다', '터무니없는 오해를 받았다', '뒷조사를 했다', '저녁 식사에 초대받았다', '공연 파트너 신청을 받았다', '드레스를 선물받았다', '목걸이를 선물받았다', '청혼을 받았다', '흐뭇하게 미소지었다', '사냥제 우승 상품을 받았다', '단숨에 마음을 사로잡았다', '자녀 계획까지 세웠다', '사교계를 평정했다', '아쉬워했다', '호감을 느꼈다', '어쩐지 실망했다', '입덕 부정기에 빠졌다', '꽃다발을 받았다', '귀여워했다', '매우 만족했다', '두근거렸다', '꿈같은 시간을 보냈다', '귓가에서 상투스가 울렸다', '도망을 갔다']

function SetBoyEvent(w) {
    var group = window['BoyEvent_' + w + '_List'];
    var id = 'BoyEvent_' + w;
    var SetText = document.getElementById(id);
    SetText.textContent = group[Math.floor(Math.random() * group.length)];
}

SetBoyEvent(`Where`);
SetBoyEvent('Who');
SetBoyEvent('How');
SetBoyEvent('Result');
