const Navbar_css = `
:host{
}
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css")
@import url("https://fonts.googleapis.com/css2?family=Cabin+Sketch&display=swap");

body {
margin: 0;
font-family: Arial, Helvetica, sans-serif;
}

.topnav {
background-color: rgba(56, 20, 0);
width: 100%;
height: 130px;
color: rgb(0, 0, 0);
display: flex;
justify-content: center;
align-items: center;
text-align: center;
font-size: 2.6rem;
font-family: "Cabin Sketch", cursive;
}

.sticky{
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}

.link_container{
display: flex;
height: 100%;
justify-content: center;
align-items: center;
margin: 8px;

}
.link_container a {
text-decoration: none;
color: rgb(231, 231, 231);
transition: 0.3s all;
display: flex;
list-style: none;
text-shadow: 1.5px 1.5px 1px rgb(0, 0, 0);
padding: 8px;
}

.link_container :hover {
background-color: rgb(41, 14, 0);
transition: 1.0s all;
display: flex;
height: 100%;
justify-content: center;
align-items: center;
border-radius: 6px;
 }

.active {
display:none;
 }

@media screen and (max-width: 1100px) {
.topnav {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height:auto;
}

.topnav.responsive a {
  float: none;
  display: block;
  text-align: left;
  align-items: center;
  text-align: center;
}

.link_container{
  width: 100%;
}

.link_container a{
  width: 100%;
  justify-content: center;
}

}
`;
const Profiles_css = `
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@200;700&display=swap');


.profile_card{
  display: flex;
  margin: auto;
  width:90%;
  margin-bottom: 10px;
  padding-bottSom: 10px;
  font-family: 'M PLUS Rounded 1c', sans-serif;
}

details{
  width: fit-content;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.2);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(1px);
  padding: 20px;
  height: min-content;

}

.nameContainer p{
  font-size: 2rem;
  font-weight: bolder;
  color:rgb(0, 0, 0);
  font-weight: bold;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  margin: auto;
}

summary{
  list-style: none;
  cursor: pointer; 
}


#name:hover{
  color: rgb(255, 255, 255);
  width: 600px;
}

.imgNameContainer{
  margin-right: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(1px);
  height: auto;
  padding: 20px;
  border-radius: 8px;

}


.imgContainer img{
  width: 100%;
  border-radius: 8px;
  box-shadow: 1px 2px 3px black;
}

.bioContainer{
  border-radius: 8px;
  margin: auto;
 
}
.bio{
  text-align: justify;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  line-height: 1.5;
  font-size: 1.3rem;
  column-count: 2;
}
.bio a{
  text-decoration: none;
  color: rgb(255, 255, 255);
  cursor: pointer;
}

.bio a:hover{
  color: green;
  cursor: pointer;
}



@media screen and (max-width: 1100px) {
  .profile_card{
    display: block;
  }

  .imgNameContainer{
    margin: auto;
  }

  .imgContainer{
    width: fit-content;
    margin: auto;
    text-align: center;
    justify-content: center;
    height: fit-content;
    margin-bottom: 10px;
  }
  }

  
  
`;

const SubContent_css = `
.subsection{
  font-family: 'M PLUS Rounded 1c', sans-serif;
  justify-content: center;
  margin: auto;
  text-align: justify;
}

.imgContainer{
  font-size: 3rem;
  color: rgb(255, 255, 255);
  text-shadow: 1px 1px 1px rgb(0, 0, 0);
  padding: 1%
}

.subsection_content::first-letter{
    font-size:3em;
    line-height: 1;
  }

.subsection_content{
  margin-top: 10px;
  line-height: 1.5;
  font-size: 1.3rem;
  column-count: 2;
  column-rule:1px dotted silver ;
  column-gap:2rem;
}

.projectsList{
  color: rgba(56, 20, 0);
  line-height: 1.5;
  font-size: 1.3rem;
  justify-content: center;
  margin: auto;
  text-align: justify;
  background-color: rgba(255, 255, 255, 0.2);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(1px);
  border-radius: 8px;
  padding: 50px;
}

.projectsList h3{
  font-size: 2rem;
}

.projectsList li{
  color: black;
  margin: 10px;
}
`

const Artifact3D_css = `
.sketchfab-embed-wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
}

iframe{
  border-radius: 6px;
  width: 80%;
  margin: auto;
  margin-bottom: 15px;
  
}

.artifactTitle{
  justify-content: center;
  align-self: center;
  font-size: 13px; 
  font-weight: normal; 
  margin: 5px; 
  color: #000000;
}

.artifactTitle a{
  font-weight: bold; 
  color: #000000; 
  font-family: 'M PLUS Rounded 1c', sans-serif;
  text-decoration: none;
  text-align: center;
  font-size: 2rem;
}

.sketchfab-embed-wrapper{
  text-align: center;
}

.textFooter{
  font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;
}
.textFooter a{
  font-weight: bold; color: #000000; 
}
`

const ProjectListItem_css = `

  .link-container a{
    text-decoration: none;
    color: rgb(231, 231, 231);
    transition: 0.3s all;
    }
    
    .link_container :hover {
    background-color: rgb(41, 14, 0);
    transition: 1.0s all;
    display: flex;
    height: 100%;
    border-radius: 6px;
     }
`


export { Navbar_css, Profiles_css, SubContent_css, Artifact3D_css, ProjectListItem_css };
