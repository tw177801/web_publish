// import logo from './logo.svg';
import './css/style.css';
import Header from './components/Header.jsx'
import Content from './components/Content.jsx'
import Footer from './components/Footer.jsx'
import Logo from './components/header/Logo.jsx'
import MenuList from './components/header/MenuList.jsx'
import ToggleButton from './components/header/ToggleButton.jsx'
import Home from './components/content/Home.jsx'
// import About from './components/content/About.jsx'
import Majors from './components/content/Majors.jsx'
import SectionWrap from './components/content/SectionWrap.jsx';
import Job from './components/content/Job.jsx';
import Skills from './components/content/Skills.jsx';
import Coding from './components/content/Coding.jsx';
import Categories from './components/content/Categories.jsx';
import Testimonial from './components/content/Testimonial.jsx';
import Arrow from './components/content/Arrow.jsx';
import Top from './components/content/Top.jsx';
import ContactLinks from './components/content/ContactLinks.jsx';
import Bottom from './components/content/Bottom.jsx';


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
          
          <Majors />
          <Job />
          
        </SectionWrap>
        

        <SectionWrap
          id="skill"
          title="My skills"
          descripton="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Iure natus, temporibus perspiciatis repudiandae nostrum modi
                doloremque expedita non eius ipsum! Beatae porro adipisci 
                omnis architecto dignissimos. Iusto ipsa inventore adipisci.">
        
          
          <Skills>
            <Coding />
            <Article type ="Tools" />
            <Article type ="Etc" />
          </Skills>

        </SectionWrap>

        <SectionWrap
          id="work"
          title="my work"
          description="Projects"
        >
          <Categories />
        </SectionWrap>
        
        
        <SectionWrap
          id="testimonial"
          title="my work"
          description="Projects"
        >
          <Testimonial />
        </SectionWrap>

        <Arrow />
      </Content>
      

      <Footer>
        <Top 
          title="Let's talk"
          description="jeon.developer.judy@gmail.com"
        />
        <ContactLinks />
        <Bottom />
      </Footer>
   </>
  );
}

export default App;
