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
transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
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

#name{
  width: 400px;
  text-align: center;
  margin: auto;
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
  font-family: 'M PLUS Rounded 1c', sans-serif;
  line-height: 1.5;
  font-size: 1.3rem;
  column-count: 2;
  text-align: justify;
  text-justify: distribute;
  hyphens: auto 
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
  text-justify: distribute;
  hyphens: auto 
}

.imgContainer{
  font-size: 3rem;
  color: rgb(255, 255, 255);
  text-shadow: 1px 1px 1px rgb(0, 0, 0);
  padding: 1%;
  box-shadow:
  0px 3px 10px 0px rgba(0, 0, 0, 0.8),
  0px 3px 10px 0px rgba(0, 0, 0, 0.8),
  0px 3px 10px 0px rgba(0,0,0,.8);
}

.subsection_content::first-letter{
    font-size:3em;
    line-height: 1;
  }

.subsection_content{
  line-height: 1.5;
  font-size: 1.3rem;
  column-count: 2;
  column-rule:1px dotted silver ;
  column-gap:2rem;
  padding: 4%;
  background-color: rgba(56, 20, 0,.8);
  color: rgba(255, 255, 255,1);
  border-radius: 8px;
}

.projectsList{
  color: rgba(56, 20, 0);
  line-height: 1.5;
  font-size: 1.3rem;
  justify-content: center;
  margin: auto;
  background-color: rgba(255, 255, 255, 0.2);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(1px);
  border-radius: 8px;
  padding: 50px;
  text-align: justify;
  text-justify: distribute;
  hyphens: auto 
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

.artifactWrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  margin: 20px;
  border-radius: 8px;
  padding: 2%;
}

iframe{
  border-radius: 6px;
  width: 80%;
  margin: auto;
  margin-bottom: 15px;
  margin-top: 20px;
  box-shadow:
    0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.70),
    0px 1px 18px 0px rgba(0,0,0,.12);
    transition: box-shadow .5s;
}

iframe:hover{
  box-shadow:
    0px 3px 5px -1px rgba(0, 0, 0, 0.9),
    0px 6px 10px 0px rgba(0, 0, 0, 0.9),
    0px 1px 18px 0px rgba(0,0,0,.9);
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

    .link-container{
      transition: .5s all;
      padding: 15px;
    }

    .link-container:hover {
      color: black;
      background-color: rgba(240, 255, 240, 0.144);
      backdrop-filter: blur(2px);
      border-radius: 6px;
      color: black;
    }

    .link-container a{
    text-decoration: none;
    color: rgb(231, 231, 231);
    font-size: 1.3rem;
    }
    .link-container:hover a{
      color: black;
      }

    #date{
      margin: 0;
      width: fit-content;
      color: white;
      font-weight: bolder;
      padding: 6px 100px 6px 6px;
      border-radius: 6px;
      background-color: rgba(56, 20, 0, 0.7);
    }
`

const FaunaItem_css = `
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@200;700&display=swap');

    .card{
      font-family: "M PLUS Rounded 1c", sans-serif;
      width: fit-content;
      margin: 20px;
      justify-content: center;
      transition: box-shadow .5s;
      border-radius: 8px;
    }

    .card:hover{
      box-shadow:
    2px 2px 2px 1px rgba(0, 0, 0, 0.5),
    2px 4px 4px 1px rgba(0, 0, 0, 0.5)
    }

    details{
      cursor: pointer;
      border-radius: 8px;
      list-style: none;
      width: min-content;
      background-color: rgba(255, 255, 255, 0.5);
      -webkit-backdrop-filter: blur(2px);
      backdrop-filter: blur(1px);
      border-radius: 8px;
      padding: 20px;
      border: 1px solid rgba(0, 0, 0, 0.3)
    }
    
    summary{
      height: 394px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 0;
    }

    #imgNameContainer{
      position:relative;
      width: 300px;
      height: 300px;
      text-align: center;
    }

    #itemImg{
      width: 100%
    }

    #name p{
      font-size: 2rem;
      text-align: center;
      margin: 0;
    }

    #detailsContent{
      padding: 10px;
      text-align: justify;
      text-justify: distribute;
      hyphens: auto 
    }



`

const Title_css=`
.title {
  background-color: rgba(0, 0, 0, 0.151);
  text-align: center;
  font-family: "Cabin Sketch", cursive;
  font-size: 6rem;
  color: rgb(255, 255, 255);
  text-shadow: 2px 2px 2px rgb(0, 0, 0);
  padding: 3%;
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
}
`

const Subtitle_css = `
.subtitle {
  text-align: center;
  font-family: "Cabin Sketch", cursive;
  font-size: 4rem;
  color: rgb(255, 255, 255);
  text-shadow: 2px 2px 2px rgb(0, 0, 0);
  padding: 2%;
}
`
const SubNavbarItem_css=`
.link_card {
  margin: 20px;
  text-align: center;
  width: max-content;
  padding: 10px;
}

.iconContainer {
  height: 50%;
  margin: auto;
  margin-bottom: 15px;
}

.link_card img {
  height: 100%;
}

.sublink {
  font-family: "M PLUS Rounded 1c", sans-serif;
  text-decoration: none;
  margin: 15px;
  color: rgb(0, 0, 0);
  font-size: 150%;
  transition: color 0.5s;
  text-align: center;
  margin: auto;
}

.link_card:hover {
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  filter: invert(1)
  
}
`

const SubNavbarContainer_css=`
.sublink_container {
  align-items: center;
  display: flex;
  height: 200px;
  width: fit-content;
  justify-content: space-evenly;
  padding: 2%;
  margin:auto;
}
`

const BookItem_css = `

  .book_item_container{
    padding: 2%;
  }

  .sublink{
    text-decoration: none;
    text-align: center;
    color: black;
    text-transform: uppercase;
    font-size: 1.5rem;
  }

  .img_and_resume_container{
    margin-top: 1%;
    padding: 1%;
    display: flex;
    flex-direction: row;
    width: fit-content;
    justify-content: center;
    text-align: justify;
    text-justify: distribute;
    hyphens: auto 
  }

  .book_resume{
    width: 65%;
    margin-right: 2%;
    font-size: 1.3rem
  }

  .bookImg{
    max-height: 500px;
    width: auto;
  }

  img{
    width: 100%;
    border-radius: 6px
  }
`

export { Navbar_css, Profiles_css, SubContent_css, Artifact3D_css, ProjectListItem_css, FaunaItem_css, Subtitle_css, Title_css, SubNavbarItem_css, SubNavbarContainer_css, BookItem_css};
