import React from 'react';
import './App.css';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub} from '@fortawesome/fontawesome-free-brands';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';




function App() {
  return (
    <div className="App">
      <Jumbotron className="header">
        <Container>
          <Row fluid className="main-info">
            <Col md="2" className="pull-left">
              <Image className="profile-image" src="images/Beth_profile_pic.jpg"
                alt="Bethany Grogg" />
           </Col>

            <Col md="7" className="profile-content">  
              <h1 className="name">Bethany Grogg</h1>
              <h2 className="desc">Web Developer</h2>
              <br />
              <h6>“Design is not just what it looks like and feels like. Design is how it works.” –Steve Jobs</h6>
              
              
                 
            </Col>
            <Col md="3" className="pull-right contact-info">
                                <br />
                                <h4>Contact Information</h4>
                            
                                <div><i className="fas fa-map-marker-alt"></i><span class="sr-only"> Location:</span>&nbsp;&nbsp;South
                                    Berwick, ME</div>
                                    
                                <div><i className="fas fa-phone"></i><span class="sr-only"> Phone:</span>&nbsp;207-384-4156</div>
                                    
                                <div><i className="fas fa-file-pdf"></i><span class="sr-only"> Resume:</span><a
                                        href="assets/BethanyGroggResume.pdf" target="_blank">&nbsp;&nbsp;Resume</a></div>
                           
                           <div><a href="mailto:Bethany.Grogg@gmail.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className='font-awesome' icon={faEnvelope} style={{ color: '#434343' }} /></a>

                           <a href="https://www.linkedin.com/in/bethany-grogg-809093b0/" rel="noopener noreferrer "target="_blank">
                  <FontAwesomeIcon className='font-awesome' icon={faLinkedin} style={{ color: '#434343' }} /></a>
                  
                  <a href="https://github.com/BethGrogg" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className='font-awesome' icon={faGithub} style={{ color: '#434343' }}  /></a>
              </div>
                           
            </Col>
                       
          </Row>
        </Container>
        
    </Jumbotron>
   
      
<Container className="container sections-wrapper">
        <Row>
            <Col size="lg-8" className="primary">
                <section className="about section">
                    <div className="section-inner">
                        <h2 className="heading">About Me</h2>
                        <div className="content">
                            <p>I am a Web Developer with a background in Java, SQL, HTML, CSS, and JavaScript.  My first experience with these programs was 18 years ago while I was in a training program at Liberty Mutual.  Here I was able to build a system from scratch while spearheading the project and working with other individuals to reach a common goal of creating a positive interactive experience.
                            </p>
                            <p>
                                I took a break from coding to work within my children’s school system, allowing me to be on the same schedule they were on.  Now that they are older, I am ready to go back to my previous career in programming.  To kickstart this process, I completed the University of New Hampshire’s Full Stack Bootcamp where I expanded my skills in HTML, CSS, JavaScript and SQL as well as learned MongoDB, Node, Express, and React.
                            </p>
                            <p>    
                                As a web developer, there is always something to learn and new problems to solve. My past experience in older languages and systems gives me a unique perspective on web development as I have a strong understanding of the basics of coding logic as there were fewer tools available to aid in coding and debugging. 
                            </p>    

                        </div>
                        
                    </div>
                    
                </section>
                

                <section className="latest section">
                    <div className="section-inner">
                        <h2 className="heading">Latest Projects</h2>
                        <div className="content">

                            <div className="item row">
                                <a className="col-md-4 col-12" href="https://cryptic-harbor-20380.herokuapp.com/"
                                    target="_blank" rel="noopener noreferrer">
                                    <img className="img-fluid project-image" src="images/Swarm.png" alt="Swarm" />
                                </a>
                                <div className="desc col-md-8 col-12">
                                    <h3 className="title"><a href="https://cryptic-harbor-20380.herokuapp.com/"
                                            target="_blank" rel="noopener noreferrer">Swarm</a></h3>
                                    <p>Our goal is to help relieve the struggles of working with members from long distances while still following agile practices.
                                        We want to help solve the remote daily standup conundrum!</p>
                                    <p class="mb-2"></p>
                                    <p><a href="https://github.com/shimmer10/swarm"
                                            target="_blank" rel="noopener noreferrer">https://github.com/shimmer10/swarm</a>
                                      </p><p>  
                                        <a href="https://cryptic-harbor-20380.herokuapp.com/"
                                            target="_blank" rel="noopener noreferrer">https://cryptic-harbor-20380.herokuapp.com/</a></p>
                                </div>
                               
                            </div>
                            
 
                        
  


                            <div className="item row">
                                <a className="col-md-4 col-12" href="https://localmotion-two.herokuapp.com/"
                                    target="_blank" rel="noopener noreferrer">
                                    <img className="img-fluid project-image" src="images/Localmotion.png" alt="Localmotion" />
                                </a>
                                <div className="desc col-md-8 col-12">
                                    <h3 className="title"><a href="https://localmotion-two.herokuapp.com/"
                                            target="_blank" rel="noopener noreferrer">Localmotion</a></h3>
                                    <p>This web application is designed to be a community outreach program, directed
                                        towards 55+ communities in particular. The idea is to give the user an easy
                                        place to learn about group activities in their community and to sign up for
                                        those activities. This application utilitizes Google Calendar API. It was
                                        designed using Semantic UI and uses Express and MySQL.</p>
                                    <p class="mb-2"></p>
                                    <p><a href="https://github.com/rcreveling/project-two"
                                            target="_blank" rel="noopener noreferrer">https://github.com/rcreveling/project-two</a>
                                      </p><p>  
                                        <a href="https://localmotion-two.herokuapp.com/"
                                            target="_blank" rel="noopener noreferrer">https://localmotion-two.herokuapp.com/</a></p>
                                </div>
                               
                            </div>
                            

                            <div className="item row">
                                <a className="col-md-4 col-12" href="https://bethgrogg.github.io/clicky-game/"
                                    target="_blank" rel="noopener noreferrer">
                                    <img className="img-fluid project-image" src="images/clicky-game.png" alt="Clicky-game" />
                                </a>
                                <div className="desc col-md-8 col-12">
                                    <h3 className="title"><a href="https://bethgrogg.github.io/clicky-game/"
                                            target="_blank" rel="noopener noreferrer">Clicky Game</a></h3>
                                            <p>Try not to click the same image twice!  A react application.</p>
                                    <p className="mb-2"></p>
                                    <p><a href="https://github.com/BethGrogg/clicky-game"
                                            target="_blank" rel="noopener noreferrer">https://github.com/BethGrogg/clicky-game</a>
                                       </p><p> 
                                        <a href="https://bethgrogg.github.io/clicky-game/"
                                            target="_blank" rel="noopener noreferrer">https://bethgrogg.github.io/clicky-game/</a></p>
                                </div>
                               
                            </div>
                            

                            
                            <div className="item row">
                                <a className="col-md-4 col-12" href="https://boxing-celsius-93498.herokuapp.com/"
                                    target="_blank" rel="noopener noreferrer">
                                    <img className="img-fluid project-image" src="images/Burger.png" alt="Burger" />
                                </a>
                                <div className="desc col-md-8 col-12">
                                    <h3 className="title"><a href="https://boxing-celsius-93498.herokuapp.com/"
                                            target="_blank" rel="noopener noreferrer">Burger</a></h3>
                                    <p>The app is designed to allow the user to click on a link to "devour" a burger or they can use an input field and button to add a new burger to the list.  The app utilizes html, css, bootstrap, handlebars, mysql, express and node.</p>
                                    <p className="mb-2"></p>
                                    <p><a href="https://github.com/BethGrogg/burger"
                                            target="_blank" rel="noopener noreferrer">https://github.com/BethGrogg/burger</a>
                                     </p><p>   
                                        <a href="https://boxing-celsius-93498.herokuapp.com/"
                                            target="_blank" rel="noopener noreferrer">https://boxing-celsius-93498.herokuapp.com/</a></p>
                                </div>
                               
                            </div>
                            

                            <div className="item row">
                                <a className="col-md-4 col-12" href="https://rcreveling.github.io/project-one/"
                                    target="_blank" rel="noopener noreferrer">
                                    <img className="img-fluid project-image" src="images/Project 1.png"
                                        alt="2020 Election" />
                                </a>
                                <div className="desc col-md-8 col-12">
                                    <h3 className="title"><a href="https://rcreveling.github.io/project-one/"
                                            target="_blank" rel="noopener noreferrer">2020 Election</a></h3>
                                    <p>An application designed to give users up-to-date, unbiased information about the 2020 election.</p>
                                    <p className="mb-2"></p>
                                    <p><a href="https://github.com/rcreveling/project-one"
                                            target="_blank" rel="noopener noreferrer">https://github.com/rcreveling/project-one</a></p>
                                       
                                        <p><a href="https://rcreveling.github.io/project-one/"
                                            target="_blank" rel="noopener noreferrer">https://rcreveling.github.io/project-one/</a></p>    
                                </div>
                                
                            </div>

                            <div className="item row">
                                <a className="col-md-4 col-12" href="https://bethgrogg.github.io/TriviaGame/"
                                    target="_blank" rel="noopener noreferrer">
                                      <img className="img-fluid project-image" src="images/Friends_Trivia.png"
                                        alt="Friends Trivia Game" />
                                </a>
                                <div className="desc col-md-8 col-12">
                                    <h3 className="title"><a href="https://bethgrogg.github.io/TriviaGame/"
                                            target="_blank" rel="noopener noreferrer">Friends Trivia Game</a></h3>
                                    <p>This is a trivia game based on the television show "Friends". This is a timed game where the user has 5 seconds to answer the question.</p>
                                    <p className="mb-2"></p>
                                    <p><a href="https://github.com/BethGrogg/TriviaGame"
                                            target="_blank" rel="noopener noreferrer">https://github.com/BethGrogg/TriviaGame</a></p>
                                       
                                        <p><a href="https://bethgrogg.github.io/TriviaGame/"
                                            target="_blank" rel="noopener noreferrer">https://bethgrogg.github.io/TriviaGame/</a></p>
                                    
                                </div>
                                
                            </div>
                           

                        </div>
                       
                    </div>
                    
                </section>
               


                </Col>
            
           
                    </Row>
                    
             
                

            </Container>
            
            
            </div>
  );
};
          

export default App;
