
// export default function AvatarImageList({list}) {
//     return (
//         <ul>
//             {list.map(() => {return 실행코드})}
//         </ul>
//     );
// }



import AvatarImage from './AvatarImage.jsx';


export default function AvatarImageList({list}) {
    return (
        <ul>
            {list.map((item) => <li><AvatarImageList img={item.img} /></li>)}
        </ul>
    );
}

