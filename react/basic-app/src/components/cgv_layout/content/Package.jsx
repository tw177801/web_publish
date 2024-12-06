import PackageContent from "./PackageContent";

export default function Package() {

    const plist = [
        { 
            "title": "패키지",
            "list": [
                {
                    "src": "http://192.168.50.129:5501/CGV/images/package.jpg",
                    "alt": "Package Image",
                    "text": "우리 패키지",
                    "price": 62000
                },
                {
                    "src": "http://192.168.50.129:5501/CGV/images/package.jpg",
                    "alt": "Package Image",
                    "text": "우리 패키지",
                    "price": 62000
                }
            ]

        }, 
        { 
            "title": "영화관람권",
            "list": [
                {
                    "src" : "http://192.168.50.129:5501/CGV/images/ticket.jpg",
                    "alt": "Package Image",
                    "text": "CGV 영화관람권",
                    "price": 13000
                },
                {
                    "src": "http://192.168.50.129:5501/CGV/images/ticket.jpg",
                    "alt": "Package Image",
                    "text": "CGV 영화관람권",
                    "price": 13000
                }
            ]
        },
        { 
            "title": "기프트카드",
            "list": [
                {
                    "src": "http://192.168.50.129:5501/CGV/images/giftcard.jpg",
                    "alt": "Giftcard Image",
                    "text": "기프트카드 충전권",
                    "price": "금액충전형"
                },
                {
                    "src": "http://192.168.50.129:5501/CGV/images/giftcard.jpg",
                    "alt": "Giftcard Image",
                    "text": "기프트카드 충전권",
                    "price": "금액충전형"
                }
            ]

        } 



        
    ];

    return (     
        <div className="content-event-special"> 
            <section className="package-content-list">

                {plist.map(object => 

                    <PackageContent
                            title={object.title}
                            list={object.list}
                    />

                )}

                {/* <PackageContent 
                        title="패키지" 
                        list={null} />  
                <PackageContent 
                        title="영화관람권"
                        list={null} />  
                <PackageContent 
                        title="기프트" 
                        list={null} />*/}
            </section>
        </div>
    );
}