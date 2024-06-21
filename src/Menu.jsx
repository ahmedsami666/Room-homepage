const Menu = (props) => {
    const handleClose = () => {
        props.setMenu(false)
    }
    return (
        <div className="menu">
            <img src="./images/icon-close.svg" onClick={handleClose}/>
            <span>home</span>
            <span>shop</span>
            <span>about</span>
            <span>contact</span>
        </div>
    )
}
export default Menu