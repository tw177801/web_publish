
import './App.css';
import Avatar from './components/Avatar.jsx';

export default function App() {
  return (
    <div className="App">
      <Avatar img="/images/people1.webp" name="smith"/>
      <Avatar img="/images/people2.webp" name="james"/>
      <Avatar img="/images/people3.webp" name="kelly"/>
    </div>
  );
}

