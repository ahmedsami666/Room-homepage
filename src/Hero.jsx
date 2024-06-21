import Header from "./Header"
import HeaderMobile from "./HeaderMobile";

var currentWidth = window.innerWidth
var mobile = false
if (currentWidth <= 768) {
  mobile = true
} else {
  mobile = false
}

const Hero = (props) => {
    return (
        <div className={`hero item${props.currentItem} ${props.clicked ? "slide" : null}`}>
            {mobile ? 
            <HeaderMobile menu={props.menu} setMenu={props.setMenu}/>: 
            <Header />}    
        </div>
    )
}
export default Hero