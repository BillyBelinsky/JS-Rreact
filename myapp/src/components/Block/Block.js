import Content from "../../../../../../Lesson 28/Homework (Lesson 28)/myapp/src/components/Content/Content"

function Block (props) {
    console.log(props)
    return (
        <div>
            <h2>{props.title}</h2>
            <img>{props.url}</img>
        </div>
    )
}

export default Block