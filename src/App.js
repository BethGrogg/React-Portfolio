import React from 'react';
import './App.css';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel';



function App() {
  return (
    <div className="App">
      <Jumbotron class="header">
        <div class="container clearfix">
          
          
            <Image class="profile-image img-fluid float-left roundedCircle" src="images/Beth_profile_pic.jpg"
                alt="Bethany Grogg" roundedCircle />
               
               
            
                <h1 class="name">Bethany Grogg</h1>
                <h2 class="desc">Web Developer</h2>
                <ul class="social list-inline">

                    <li class="list-inline-item"><a href="https://www.linkedin.com/in/bethany-grogg-809093b0/"
                            target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                    <li class="list-inline-item"><a href="https://github.com/BethGrogg" target="_blank"><i
                                class="fab fa-github-alt"></i></a></li>

                </ul>
           
            <a class="btn btn-cta-primary float-right" href="mailto:Bethany.Grogg@gmail.com" target="_blank"><i
                    class="fas fa-paper-plane"></i> Contact Me</a>
        </div>
        
    </Jumbotron>
   
      
<div class="container sections-wrapper">
        <div class="row">
            <div class="primary col-lg-8 col-12">
                <section class="about section">
                    <div class="section-inner">
                        <h2 class="heading">About Me</h2>
                        <div class="content">
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
                

                <section class="latest section">
                    <div class="section-inner">
                        <h2 class="heading">Latest Projects</h2>
                        <div class="content">

                            <div class="item featured text-center">
                                <h3 class="title"><a href="https://cryptic-harbor-20380.herokuapp.com/"
                                        target="_blank">Swarm</a></h3>
                                <p class="summary">Standup With A Remote Motif</p>
                                <div class="featured-image has-ribbon">
                                    <a href="https://cryptic-harbor-20380.herokuapp.com/" target="_blank">
                                        <img class="img-fluid project-image" src="images/Swarm.png"
                                            alt="Swarm" />
                                    </a>
                                    <div class="ribbon">
                                        <div class="text">New</div>
                                    </div>
                                </div>

                                <div class="desc text-left">
                                    <p>Our goal is to help relieve the struggles of working with members from long distances while still following agile practices.
                                        We want to help solve the remote daily standup conundrum!</p>
                                    <p><a href="https://github.com/shimmer10/swarm"
                                            target="_blank">https://github.com/shimmer10/swarm</a></p>
                                    <p><a href="https://cryptic-harbor-20380.herokuapp.com/"
                                            target="_blank">https://cryptic-harbor-20380.herokuapp.com/</a></p>
                                </div>
                                

                            </div>
                            
                            <hr class="divider" />

    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/Localmotion.png"
          alt="Localmotion"
        />
        <Carousel.Caption>
          <h3>Localmotion</h3>
          <p>This web application is designed to be a community outreach program, directed
                                        towards 55+ communities in particular. The idea is to give the user an easy
                                        place to learn about group activities in their community and to sign up for
                                        those activities. This application utilitizes Google Calendar API. It was
                                        designed using Semantic UI and uses Express and MySQL.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/Localmotion.png"
          alt="Localmotion"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

                            <div class="item row">
                                <a class="col-md-4 col-12" href="https://localmotion-two.herokuapp.com/"
                                    target="_blank">
                                    <img class="img-fluid project-image" src="assets/images/Localmotion.png" alt="Localmotion" />
                                </a>
                                <div class="desc col-md-8 col-12">
                                    <h3 class="title"><a href="https://localmotion-two.herokuapp.com/"
                                            target="_blank">Localmotion</a></h3>
                                    <p>This web application is designed to be a community outreach program, directed
                                        towards 55+ communities in particular. The idea is to give the user an easy
                                        place to learn about group activities in their community and to sign up for
                                        those activities. This application utilitizes Google Calendar API. It was
                                        designed using Semantic UI and uses Express and MySQL.</p>
                                    <p class="mb-2"></p>
                                    <p><a href="https://github.com/rcreveling/project-two"
                                            target="_blank">https://github.com/rcreveling/project-two</a>
                                        
                                        <a href="https://localmotion-two.herokuapp.com/"
                                            target="_blank">https://localmotion-two.herokuapp.com/</a></p>
                                </div>
                               
                            </div>
                            

                            <div class="item row">
                                <a class="col-md-4 col-12" href="https://bethgrogg.github.io/clicky-game/"
                                    target="_blank">
                                    <img class="img-fluid project-image" src="assets/images/clicky-game.png" alt="Clicky-game" />
                                </a>
                                <div class="desc col-md-8 col-12">
                                    <h3 class="title"><a href="https://bethgrogg.github.io/clicky-game/"
                                            target="_blank">Clicky Game</a></h3>
                                            <p>Try not to click the same image twice!  A react application.</p>
                                    <p class="mb-2"></p>
                                    <p><a href="https://github.com/BethGrogg/clicky-game"
                                            target="_blank">https://github.com/BethGrogg/clicky-game</a>
                                        
                                        <a href="https://bethgrogg.github.io/clicky-game/"
                                            target="_blank">https://bethgrogg.github.io/clicky-game/</a></p>
                                </div>
                               
                            </div>
                            

                            
                            <div class="item row">
                                <a class="col-md-4 col-12" href="https://boxing-celsius-93498.herokuapp.com/"
                                    target="_blank">
                                    <img class="img-fluid project-image" src="assets/images/Burger.png" alt="Burger" />
                                </a>
                                <div class="desc col-md-8 col-12">
                                    <h3 class="title"><a href="https://boxing-celsius-93498.herokuapp.com/"
                                            target="_blank">Burger</a></h3>
                                    <p>The app is designed to allow the user to click on a link to "devour" a burger or they can use an input field and button to add a new burger to the list.  The app utilizes html, css, bootstrap, handlebars, mysql, express and node.</p>
                                    <p class="mb-2"></p>
                                    <p><a href="https://github.com/BethGrogg/burger"
                                            target="_blank">https://github.com/BethGrogg/burger</a>
                                        
                                        <a href="https://boxing-celsius-93498.herokuapp.com/"
                                            target="_blank">https://boxing-celsius-93498.herokuapp.com/</a></p>
                                </div>
                               
                            </div>
                            

                            <div class="item row">
                                <a class="col-md-4 col-12" href="https://rcreveling.github.io/project-one/"
                                    target="_blank">
                                    <img class="img-fluid project-image" src="assets/images/Project 1.png"
                                        alt="2020 Election" />
                                </a>
                                <div class="desc col-md-8 col-12">
                                    <h3 class="title"><a href="https://rcreveling.github.io/project-one/"
                                            target="_blank">2020 Election</a></h3>
                                    <p>An application designed to give users up-to-date, unbiased information about the 2020 election.</p>
                                    <p class="mb-2"></p>
                                    <p><a href="https://github.com/rcreveling/project-one"
                                            target="_blank">https://github.com/rcreveling/project-one</a></p>
                                        <break></break>
                                </div>
                                
                            </div>

                            <div class="item row">
                                <a class="col-md-4 col-12" href="https://bethgrogg.github.io/TriviaGame/"
                                    target="_blank">
                                    <img class="img-fluid project-image" src="assets/images/Friends_Trivia.png"
                                        alt="Friends Trivia Game" />
                                </a>
                                <div class="desc col-md-8 col-12">
                                    <h3 class="title"><a href="https://bethgrogg.github.io/TriviaGame/"
                                            target="_blank">Friends Trivia Game</a></h3>
                                    <p>This is a trivia game based on the television show "Friends". This is a timed game where the user has 5 seconds to answer the question.</p>
                                    <p class="mb-2"></p>
                                    <p><a href="https://github.com/BethGrogg/TriviaGame"
                                            target="_blank">https://github.com/BethGrogg/TriviaGame</a>
                                        <break></break>
                                        <a href="https://bethgrogg.github.io/TriviaGame/"
                                            target="_blank">https://bethgrogg.github.io/TriviaGame/</a>
                                    </p>
                                </div>
                                
                            </div>
                           

                        </div>
                       
                    </div>
                    
                </section>
               


                </div>
            
            <div class="secondary col-lg-4 col-12">
                <aside class="info aside section">
                    <div class="section-inner">
                        <h2 class="heading sr-only">Basic Information</h2>
                        <div class="content">
                            <ul class="list-unstyled">
                                <li><i class="fas fa-map-marker-alt"></i><span class="sr-only">Location:</span>South
                                    Berwick, ME</li>
                                <li><i class="fas fa-envelope"></i><span class="sr-only">Email:</span><a
                                        href="mailto:Bethany.Grogg@gmail.com"
                                        target="_blank">Bethany.Grogg@gmail.com</a></li>
                                <li><i class="fas fa-phone"></i><span class="sr-only">Phone:</span>207-384-4156</li>
                                <li><i class="fas fa-file-pdf"></i><span class="sr-only">Resume:</span><a
                                        href="assets/BethanyGroggResume.pdf" target="_blank">Resume</a></li>
                            </ul>
                        </div>
                        
                    </div>
                    
                </aside>
                


                

                           
                        </div>
                       
                    </div>
                    
             
                

            </div>
            </div>
  );
};
          

export default App;
