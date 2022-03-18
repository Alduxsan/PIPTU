const Navbar_css = `
@font-face {
  font-family: quicksand;
  src: url("../fonts/Quicksand/Quicksand-VariableFont_wght.ttf");
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: all 0.4s ease;
  z-index: 1;
  background-color: rgb(38 14 0);
}

nav .nav-content {
  text-align: center;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}
nav .logo a {
  text-decoration: none;
  font-size: 35px;
  color: white;
  padding: 5px;
}
nav.sticky .logo a {
  color: white;
}
.nav-content .nav-links {
  align-items: center;
  display: flex;
  justify-content: space-around;
}

.nav-content .nav-links div {
  list-style: none;
  margin:15px;
}

.nav-links div a {
  font-family: quicksand;
  text-decoration: none;
  color: white;
  font-size: 1.4rem;
  font-weight: 100;
  transition: all 0.3s ease;
}

.nav-links div a:hover {
  transition: .2s all;
  color: #ab8400;

}

.hide {
display:none;
 }

 .responsive_navbar{
   display: none;
   align-items: center;
   height:auto;
   padding:2%;
   justify-content: space-around;
 }

 .responsive_navbar .nav-links {
  flex-direction: column;
  font-family: quicksand;
  text-align: center;
  font-size: 1rem;
}

.nav-links div a{
  font-size: 1rem;
}

.icon{
  width: 40px;
  height: fit-content;
  cursor: pointer;
  animation: fadeIn .5s;
  animation-fill-mode: forwards
}

.icon img{
  width: 100%;
  filter: invert(1)
}

.rotate{
  animation: rotation .5s;
  animation-fill-mode: forwards
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
    opacity: 0;
  }
  to {
    transform: rotate(90deg);
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    transform: translate(2000px);
  }
  to {
    transform: translate(0);
  }
}
@media screen and (max-width: 1100px) {
  
  .responsive_navbar{
    display:flex;
  }

  nav .nav-content {
    display: none;
  }
  
  .link_container{
    margin-bottom: 10px;
  }
}

.
`;
const Profiles_css = `

.hide {display: none;}

.profile_card{
  min-width: 400px;
  display: flex;
  font-family: quicksand, sans-serif;
  margin: 20px;
  justify-content: center;
  transition: box-shadow .5s;
  border-radius: 8px;
  cursor: pointer;
  padding: 15px;
  background: rgba(255, 255, 255, 0.300);
  vertical-align: middle;
}

.profile_card:hover{
  box-shadow:
2px 2px 2px 1px rgba(0, 0, 0, 0.5),
2px 4px 4px 1px rgba(0, 0, 0, 0.5)
}


#imgNameContainer{
  text-align: center;
  border-radius: 6px;
  margin: 10px;
}

.imgContainer{
  margin: auto;
  width: fit-content;
  box-shadow:
  2px 2px 2px 1px rgba(0, 0, 0, .7);  
  border-radius: 8px;
}

.imgContainer img{
  border-radius: 8px;  
}

#detailsContent{
  margin: 10px;
}

#name{
  margin: 10px;
}

slot[name=name]{
  font-size: 2rem;
  text-align: center;
  margin: 0;
}


slot[name=bio]{
  font-size: 1.3rem;
  text-align: justify;
  text-justify: distribute;
  hyphens: auto;
}

@media screen and (max-width: 1100px) {
  .profile_card{
    display: block;
    min-width: 350px;
    max-width: 350px;
  }

  .imgContainer{
    width: fit-content;
    margin: auto;
    text-align: center;
    justify-content: center;
    height: fit-content;
    margin-bottom: 10px;
  }

  slot[name=bio]{
    font-size: 1.3rem;
    text-align: left;
    word-break: normal;
    hyphens: auto;
  }
  #detailsContent{
    width:300px
  }
  }


`;

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
  font-family: quicksand, sans-serif;
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
`;

const ProjectListItem_css = `

    .link-container{
      transition: .5s all;
      border-bottom: 1px solid rgba(240, 255, 240, 0.8);
      padding-bottom: 1%;     
    }

    .link-container:hover {
      color: black;
      background-color: rgba(240, 255, 240, 0.8);
      backdrop-filter: blur(2px);
      color: black;
    }

    .link-container a{
      word-break: break-all;
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
    }

    @media screen and (max-width: 1100px) {
      #date{
        font-weight: 100;
        padding: 1%
      }
    
    }
`;

const FaunaItem_css = `

    .card{
      font-family: quicksand, sans-serif;
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



`;

const Title_css = `
.title {
  margin-top: 100px;
  background-color: rgba(0, 0, 0, 0.151);
  padding: 3%;
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
}

slot[name="title"] { 
  font-family: "Cabin Sketch", sans-serif;
  font-weight: 700;
  font-size: 6rem;
  color: rgb(255, 255, 255);
  text-align: center;
  text-shadow: 2px 2px 2px rgb(0, 0, 0);
}

@media screen and (max-width: 1100px) {

  .title{
    width: 350px;
    margin: auto;
    margin-top: 100px
  }

  slot[name="title"] {
    font-size: 3rem;
  }
  }
}
`;

const Subtitle_css = `

@font-face {
  font-family: "Cabin Sketch";
  src: url("../fonts/Cabin_Sketch/CabinSketch-Bold.ttf");
}

.subtitle { 
  margin: 3%;
}

slot[name="title"] { 
  text-align: center;
  font-weight: 700;
  font-family: "Cabin Sketch", sans-serif;
  font-size: 4.5rem;
  color: rgb(255, 255, 255);
  text-shadow: 2px 2px 2px rgb(0, 0, 0);
}

@media screen and (max-width: 1100px) {
  slot[name="title"] { 
    font-size: 10vw;
  }
  }
`;
const SubNavbarItem_css = `

.sublink_container{
  margin: 15px;
  margin-top: 50px;
  padding: 10px
}

.sublink {
  font-family: quicksand, sans-serif;
  text-decoration: none;
  color: rgb(0, 0, 0);
  font-size: 1.2rem;
  transition: color 0.5s;
  text-align: center;
  transition: all 0.5s
}

.iconContainer {
  height:100px;
  width: fit-content;
  margin: auto;
  margin-bottom: 15px;
}
.iconContainer img{
  height: 100%;
}

.sublink_container:hover {
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  border-radius: 6px;
  filter: invert(1) 
}

@media screen and (max-width: 1100px) {
  
  }

`;

const SubNavbarContainer_css = `
.sublink_container {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

@media screen and (max-width: 1100px) {
  
  .sublink_container{
    display: block;
  }

 
  }
`;

const BookItem_css = `
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

  article{
    font-family: 'Roboto', sans-serif;
    margin: 2%;
  }

  .book_item_container{
    padding: 2%;
    background-color: rgba(240, 255, 240, 0.144);
    border-radius: 6px;
  }

  .sublink{
    text-decoration: none;
    color: black;
    text-transform: uppercase;
    font-size: 1.3rem;
  }

  .img_and_resume_container{
    margin-top: 1%;
    display: flex;

    text-align: justify;
    text-justify: distribute;
    hyphens: auto 
  }

  .book_resume{
    font-family: 'Roboto', sans-serif;
    font-size: 1.3rem;
  }

  .bookImg{
    margin-right: 2%; 
    height:300px;
    float: left;
  }
  img{
    height: 100%;
    border-radius: 6px
  }

  @media screen and (max-width: 1100px) {
    .bookImg{
      margin-right: 0; 
      height:300px;
      float: none;
      width: fit-content;
      margin: auto;
    }

  
`;

const PressItem_css = `

  article{
    font-family: quicksand, sans-serif;
    overflow: hidden;
    border-radius: 6px;
  }
  

  .press_item_container{
    border-radius: 6px;
    display: flex;
    justify-content: center;
    height: 300px;
    background-repeat: no-repeat;
    background-size: cover;
    align-items: flex-end;
    transition: all 0.5s;

  }

  .sublink{
    color: white;
    width: 100%;
    height: fit-content;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 100%;
    padding: 3%;
    background-color: rgba(0, 0, 0, 0.507);
    backdrop-filter: blur(10px);
    border-radius: 0 0 6px 6px;
    text-align: center;
    transition: all 0.5s;
  }
  .press_item_container:hover > .sublink { 
    background-color: rgba(0, 0, 0);
  }

  @media screen and (max-width: 1100px) {
    .press_item_container{
      width: 350px;
    }
  }
  
  
`;

const ActivitiesItem_css = `
@font-face {
  font-family: quicksand;
  src: url("../fonts/Quicksand/Quicksand-VariableFont_wght.ttf");
}
  .activities_item_container{
    margin-bottom: 20px
  }

  .imgContainer{
    width: 100%;
    height: 400px;
    background-size: cover;
    background-attachment: fixed;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #activity-title{
    font-family: "quicksand", sans-serif;
    font-size: 3.5rem;
    font-weight: bolder;
    color: white;
    text-shadow: 1px 1px 1px rgb(0, 0, 0);
    text-align: center;
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    backdrop-filter: blur(5px);
    padding: 2%;
  }

  .activity_text_container{
    padding: 4%;
    background: rgba(255, 255, 255, 0.5); 
    border-radius: 6px;
    margin-top: 10px;
  }

  .activity_text_container p{
    font-family: quicksand, sans-serif;
    font-size: 1.3rem;
    font-weight: 200;
    column-count: 2;
    column-gap: 3%;
    text-align: justify;
    text-justify: distribute;
    hyphens: auto;
  }

  @media screen and (max-width: 1100px) {
    #activity-title{
      font-size: 2rem;
    }

  .activity_text_container p{
    text-align: left;
    word-break: normal;
    column-count: 1
  }
    }
`;

const SciArticle_css = `
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

article{
  font-family: 'Roboto', sans-serif;
  margin: 1%;
  border-radius: 6px;
  padding: 1%;
}

article:hover {
  border-top: 1px solid rgba(0,0,0, 0.3);
  border-bottom: 1px solid rgba(0,0,0, 0.3);
  background-color: rgba(255, 255, 255, 0.2);
}


.art_head_container{
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1%;
  align-items: center;
}

#ArtTitle{
  border-right: 1px solid black;
  padding: 2%
}

details summary { 
  width: 100%;
  cursor: pointer;
  display: flex;
}

#abstract{
  margin: 0;
}

.artAbastract{
  column-count: 2;
  text-align: justify;
  text-justify: distribute;
  hyphens: auto;
}

.artLink{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  text-decoration: none;
  color: black;
}

.iconContainer img{
  width: 40px;
  margin-left: 10px;
}

.artLink:hover{
  font-size: 1.3rem
  
}
@media screen and (max-width: 1100px) {
  summary {
    word-break: break-all;
  }
}
`;

const BookChapter_css = `
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

article{
  width: fit-content;
  font-family: 'Roboto', sans-serif;
  margin: 1%;
  border-radius: 6px;
}

article:hover {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}


.artLink{
  text-decoration: none; 
  color: black;
  width: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1%;
  align-items: center;
}

#ArtTitle{
  border-right: 1px solid black;
  padding: 2%
}

#author_editorial_info{
  width: fit-content;
}

`;

export {
  Navbar_css,
  Profiles_css,
  Artifact3D_css,
  ProjectListItem_css,
  FaunaItem_css,
  Subtitle_css,
  Title_css,
  SubNavbarItem_css,
  SubNavbarContainer_css,
  BookItem_css,
  PressItem_css,
  ActivitiesItem_css,
  SciArticle_css,
  BookChapter_css,
};
