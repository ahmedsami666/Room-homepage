import data from "./data"

const Content = (props) => {
    return (
        <div className="content">
            <h1 className={`${props.clicked ? "clicked-heading" : null}`}>{data[props.currentItem].title}</h1>
            <p className={`${props.clicked ? "clicked-p" : null}`}>{data[props.currentItem].content}</p>
            <span className={`${props.clicked ? "clicked-span" : null}`}>Shop now</span>
            <img src="./images/icon-arrow.svg"/>
        </div>
    )
}
export default Content