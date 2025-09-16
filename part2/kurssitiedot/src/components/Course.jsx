import Content from "./Content";
import Header from "./Header";


const Course = (props) => {
  return (
    <>
        {props.courses.map(course =>
           <>
                <Header key={course.id} courseName={course.name} />
                <Content key={course.id} parts={course.parts} /> 
           </>
        )}  
    </>
  )
}

export default Course;