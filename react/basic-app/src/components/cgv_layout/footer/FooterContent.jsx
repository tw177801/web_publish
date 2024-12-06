export default function FooterContent() {

    const companyInfo = {
        "address" : "(04377)서울특별시 용산구 한강대로 23길 55, 아이파크몰 6층(한가로동)",
        "ceo" : "홍길동",
        "list" : [ 
           {"name": "회사소개"},
           {"name": "지속가능경영"},
           {"name": "IR"},
           {"name": "채용정보"},
           {"name": "광고/제휴/출점문의"},
           {"name": "광고/제휴/출점문의"},
           {"name": "이용약관"},
           {"name": "편성기준"},
           {"name": "개인정보처리방침"},
           {"name": "법적고지"},
           {"name": "이메일주소무단수집거부"},
           {"name": "윤리경영"},
           {"name": "사이버감사실"}
           
       ],


    };


    const ADDRESS = `(04377)서울특별시 용산구 한강대로 23길 55, 아이파크몰 6층(한가로동)`;
    const CEO = `홍길동`;

    return (
        <div class="footer-content">
        <div class="footer-intro">
            <ul>
                {companyInfo.list.map(menu => 
                    <li><a href="#">{menu.name}</a></li>
                )}
  
            </ul>
        </div>


        <p class="p">{cpmpanyInfo.address}</p>
        <p>{CEO}, 사업자등록번호 : 123-12-45678, 통신판매업신고번호 : 2017-서울용산</p>
        <p>호스팅사업자 : CJ올리브네트웍스, 대표이메일 : cjcgvmaster@cj.net</p>
        <p class="p2">
            <a href="/CGV/admin/admin_main.html" target="_parent">@</a>CJ CGV.All Rights Reserved</p>
    </div>
    );
}