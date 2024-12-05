import '../css/Avatar.css';



export default function AvatarImage({img}) {
    return (
        <img src={img} className="avatar-img"></img>
    );
}
// props = {img: "/images/people1.webp"}
// props.img

// export default function AvatarImage({props}) {
//     return (
//         <img src={props.img} className="avatar-img"></img>
//     );
// }


// 구조분해 할당, 자주 사용