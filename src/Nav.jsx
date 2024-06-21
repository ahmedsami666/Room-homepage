const Nav = (props) => {
    const handleLeft = () => {
        if (props.currentItem === 0){
            props.setCurrentItem(2)
        } else {
            props.setCurrentItem(props.currentItem - 1)
        }
        props.setClicked(true)
        setTimeout(() => {
            props.setClicked(false)
        }, 500);
    }
    const handleRight = () => {
        if (props.currentItem === 2) {
            props.setCurrentItem(0)
        } else {
            props.setCurrentItem(props.currentItem + 1)
        }
        props.setClicked(true)
        setTimeout(() => {
            props.setClicked(false)
        }, 500);
    }
    return (
        <div className="nav">
            <div onClick={handleLeft}>
            <img src="./images/icon-angle-left.svg" />
            </div>
            <div onClick={handleRight}>
            <img src="./images/icon-angle-right.svg" />
            </div>
        </div>
    )
}
export default Nav