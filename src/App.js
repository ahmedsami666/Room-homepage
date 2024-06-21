import CopyRight from "./copyRight";
import Hero from "./Hero";
import Nav from "./Nav";
import Content from "./Content";
import About from "./About";
import Menu from "./Menu";
import React from "react";

function App() {
  var [currentItem, setCurrentItem] = React.useState(0)
  var [clicked, setClicked] = React.useState(false)
  var [menu, setMenu] = React.useState(false)
  return (
    <div className="main">
      {menu ? 
      <Menu menu={menu} setMenu={setMenu}/> :
      null
      }
      <Hero currentItem={currentItem} clicked={clicked} menu={menu} setMenu={setMenu}/>
      <Nav currentItem={currentItem} setCurrentItem={setCurrentItem} clicked={clicked} setClicked={setClicked}/>
      <Content currentItem={currentItem} clicked={clicked}/>
      <About />
      <CopyRight />
    </div>
  );
}

export default App;