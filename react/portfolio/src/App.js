// import logo from './logo.svg';
import './css/style.css';
import Header from './components/Header.jsx'
import Content from './components/Content.jsx'
import Footer from './components/Footer.jsx'
import Logo from './components/header/Logo.jsx'
import MenuList from './components/header/MenuList.jsx'
import ToggleButton from './components/header/ToggleButton.jsx'
import Home from './components/content/Home.jsx'
import About from './components/content/About.jsx'
import SectionWrap from './components/content/SectionWrap.jsx';


function App() {
  return (
   <>
      <Header>
        <Logo 
          img="images/favicon.ico"
          name="Judy"
        />

        <MenuList />
        
        <ToggleButton />
      </Header>
      
      <Content>
        <Home 
          img="images/favicon.ico"
          name="Judy"
        />

        <SectionWrap 
          id="about"
          title="About me"
          descripton="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Iure natus, temporibus perspiciatis repudiandae nostrum modi
                doloremque expedita non eius ipsum! Beatae porro adipisci 
                omnis architecto dignissimos. Iusto ipsa inventore adipisci.">
          
          <MenuList />
        </SectionWrap>

        <About 

        />
      </Content>
      
      <Footer>
      </Footer>
   </>
  );
}

export default App;
