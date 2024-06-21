const HeaderMobile = (props) => {
    const handleOpen = () => {
        props.setMenu(true)
    }
    return (
        <div className="header-mobile">
            <img src="./images/icon-hamburger.svg" onClick={handleOpen}/>
            <img src="./images/logo.svg" />
        </div>
    )
}
export default HeaderMobile