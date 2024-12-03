
import './App.css';
import Avatar from './components/Avatar.jsx';
import AvatarImage from './components/AvatarImage.jsx';
import AvatarImageList from './components/AvatarImageList.jsx';
import AvatarList from './components/AvatarList.jsx';


export default function App() {

  const imgList = [
   { "img" : "/images/people1.webp"},
   { "img" : "/images/people2.webp"},
   { "img" : "/images/people3.webp"}
  ];

  const avatarList = [
   { "img" : "/images/people1.webp", "name": "smith"},
   { "img" : "/images/people2.webp", "name": "james"},
   { "img" : "/images/people3.webp", "name": "kelly"}
  ];

  //블레이스로 묶인 것 

  return (
    <div className="App">

      <div className="App-container">
        <Avatar img="/images/people1.webp" name="smith"/>
        <Avatar img="/images/people2.webp" name="james"/>
        <Avatar img="/images/people3.webp" name="kelly"/>
      </div>

      <div classname="App-container">
        <AvatarImage img="/images/people1.webp"/>
        <AvatarImage img="/images/people2.webp"/>
        <AvatarImage img="/images/people3.webp"/>
      </div>

      <div classname="App-container">
        <AvatarImageList list = {imgList} />

      </div>
      <div classname="App-container">
        <AvatarList list = {avatarList} />

      </div>

    </div>
  );
}

