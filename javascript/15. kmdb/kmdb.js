import { kmdb } from './commons.js';

initForm();

function initForm() {

    let output = `
        <h1>KMDB API</h1>
        <div>
            <select id="type">
                <option value="default">선택</option>
                <option value="director">영화감독</option>
                <option value="actor">영화배우</option>
            </select>
            <label>영화제목</label>
            <input type="text" id="type_Value" placeholder="감독/배우">
            <input type="text" id="title" placeholder="영화제목을 입력해주세요">
            <button type="button" id="search">Search</button>
        </div>
        <div id= "result"></div>
    `;

    document.querySelector("body").innerHTML = output;
    
    // 버튼 이벤트 추가
    document
        .querySelector("#search")
        .addEventListener('click', () => {

        // validation check(유효성 체크)
        
        let type = document.querySelector("#type");
        let typeValue = document.querySelector("#type_Value");
        let title = document.querySelector("#title");
        
        if(type.value === "default") {
            alert("타입을 선택해주세요");
            type.focus();
        } else if(typeValue.value === "") {
            alert("감독/배우를 입력해주세요");
            typeValue.focus();
        } else if(title.value === "") {
            alert("영화제목을 입력해주세요");
            title.focus();
        } else {
            searchMovieResult(type.value, typeValue, title);    // KMDB API 연동 후 출력 화면
        }

    });

} // initForm()

// KMDB API 연동 후 출력 화면
function searchMovieResult(type, value, title) {

    kmdb(type, value, title)
        .then((result) => {
            let count = result.TotalCount;

            let output = ``;

            if(count) {
            
                let info = result.Data[0].Result[0];
                let directors = result.Data[0].Result[0].directors.director;
                let actors = result.Data[0].Result[0].actors.actor;
                let posterArray = result.Data[0].Result[0].posters.split("|");
                let stillArray = result.Data[0].Result[0].stlls.split("|");
                let staffs = result.Data[0].Result[0].staffs.staff;


                output += `
                    <div class="container">
                    <div class="container-img">
                        <img src="http://file.koreafilm.or.kr/thm/02/99/18/07/tn_DPK020635.jpg" alt="">
                    </div>
                    <div class="container-content">
                        <h3>헤어질결심</h3>
                        <h5>헤어질결심(영문)</h5>
                        <hr>
                        <p>극영화 15세관람가 대한민국 138분 2022-06-29(개봉)</p>
                        <p><span>제작사</span><span>(주)모호필름</span></p>
                        <p><span>감독</span><span>박찬욱</span></p>
                        <p><span>출연</span><span>탕웨이, 박해일, 이정현..</span></p>
                    </div>
                    </div>
                `;


                // console.log(`posterArray --> ${posterArray.length}`);
                // console.log(`title --> ${info.title}`);
                // console.log(`titleEng --> ${info.titleEng}`);
                // console.log(`directorNm --> ${directors[0].directoNm}`);
                // console.log(`directorEnNm --> ${directors[0].directoEnNm}`);
                // console.log(`actors length --> ${actors.length}`);
                
                // actors.forEach((actor, i) => {
                //     if(i < 10) {
                //         console.log(`actor${i} --> ${actor.actorNm}`);
                //         console.log(`actor${i} --> ${actor.actorEnNm}`);
                        
                //     }
                // });

                // posterArray.forEach((poster) => console.log(poster) );
                // stillArray.forEach((still) => console.log(still));
                // staffs.forEach((staff)=> {
                //     console.log(staff.staffNm);
                //     console.log(staff.staffEnNm);
                //     console.log(staff.staffRoleGroup);
                //     console.log(staff.staffRole);
                //     console.log(staff.staffEtc);
                    
                // });


            } else {
                output += `<h5>검색하진 데이터가 존재하지 않습니다.</h5>`
            }

            document.querySelector("#result").innerHTML = output;
        })
        .catch((error) => console.log(error));
    
}