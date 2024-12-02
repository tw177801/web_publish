import './Avatar.css';

// props = {
//     "img" : "/images/people1.webp",
//     "name" : "Smith"
//     "age" : "20"
// }

export default function Avatar({img, name, age}) {

    //이미지 주소
    return (
        <div className="avatar-container">
            {/* <h1>Avatar</h1> */}
            <img src= {img} className="avatar"/>
            <div>{name}, {age}</div>
        </div>
    );
}

// props 외우기, 구조분해 중요