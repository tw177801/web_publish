import './App2.css';
import Avatar from  './components/Avatar.jsx';
import AvatarList from './components/AvatarList.jsx';

export default function App2() {
    const list = [
        { "img": "/images/people1.webp", "name": "Smith", "age": "20" },
        { "img": "/images/people2.webp", "name": "James", "age": "30" },
        { "img": "/images/people3.webp", "name": "Kelly", "age": "19" }
    ];

    return (
        <>
        <div className='container'>
            {/* <h1 className="title">[{name}]React Test!!!</h1> */}
            <Avatar img="/images/people1.webp" name="Smith" age="20" />
            <Avatar img="/images/people2.webp" name="James" age="30" />
            <Avatar img="/images/people3.webp" name="Kelly" age="19" />
        </div>
        <AvatarList list = {list} />
        </>
    );
}


//return 시 하나의 그룹핑, 문단 하나 return 불가
// props는 object 리터럴로 넘어감

