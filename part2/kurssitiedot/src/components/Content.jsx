import Part from "./Part";

const Content = (props) => {
    const sum = props.parts.reduce((acc,item) => acc + item.exercises, 0);
    return (
    <>
        {props.parts.map(parts =>
            <Part key={parts.id} part={parts}/>
        )}
      <p><b>Total of {sum} exercises</b></p>
      <hr/>
    </>
    )
}

export default Content;