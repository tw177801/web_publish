import React, {useRef} from 'react';

/*******************************
 * Signup 컴포넌트 초기화 작업 
 * *****************************/


export function initSignup() {
     const names = [ 
            'id',
            'pwd',
            'cpwd',
            'name',
            'phone',
            'emailname'
                        ];
    
        const namesKor = [ 
            '아이디',
            '비밀번호',
            '비밀번호 확인',
            '이름',
            '휴대폰 번호',
            '이메일 주소'];
    
        const placeholdersKor = [ 
            '아이디(6~12자이내)',
            '비밀번호',
            '비밀번호 확인',
            '이름',
            '휴대폰 번호',
            '이메일 주소'];
                    
    
        const placeholders = names.reduce((acc, name, idx)=>{
            acc[name] = placeholdersKor[idx];
            return acc;     // {id:"아이디", pwd:"비밀번호"}
        }, {});
        
        const labels = names.reduce((acc, name, idx)=>{
            acc[name] = namesKor[idx];
            return acc;     // {id:"아이디", pwd:"비밀번호"}
        }, {});
        // console.log('labels --->>', labels);
        
    
        // const labels = {
        //     'id': '아이디',
        //     'pwd': '비밀번호'
        // }
    
        // const label = labels.reduce((acc, lables)=> {
        //     acc[lables] = "";
        //     return acc;
        // }, {});
    
        // names.forEach((name)=>{
        //     initFormData = {...initFormData, [name]:''};
        // });
    
        // reduce 기억
        // 결과값 누적 함수 
        // **배열.reduce(콜백함수, 리턴데이터 타입정의)*/
        const initFormData = names.reduce((acc, name)=>{
            // 실행코드
            acc[name] = ""; // {"id":""} 
            return acc;
        }, {});
    
        // console.log('init reduce-->>', initFormData);
    
        // const refs = useRef(
        //     names.reduce((acc, name)=>{
        //     acc[name.concat('Ref')] = React.createRef(); //useRef(null) Hook 바로 호출 x
        //     return acc;
        // }, {})
        // );
    
        // refs.current.emaildomainRef = React.createRef();
    
        // // console.log('refs--->>', refs);
        
        
        // const msgRefs = useRef( 
        //     names.reduce((acc, name)=>{
        //     acc[name.concat('MsgRef')] = React.createRef();
        //     return acc;
        //     }, {})
        // );


        return {names, placeholders, labels, initFormData};
        
}


// 메모리(Hook) 영역 저장, 함수명 앞에 use가 붙으면 리액트가 속는다
export function useinitSignupRefs(names) {  // 커스터머 훅 
    const refs = useRef(
        names.reduce((acc, name)=>{
        acc[name.concat('Ref')] = React.createRef(); //useRef(null) Hook 바로 호출 x
        return acc;
    }, {})
    );

    refs.current.emaildomainRef = React.createRef();

    // console.log('refs--->>', refs);
    
    
    const msgRefs = useRef(  // hook 생성 
        names.reduce((acc, name)=>{
        acc[name.concat('MsgRef')] = React.createRef();
        return acc;
        }, {})
    );

    return {refs, msgRefs};

}