/* eslint-disable react/prop-types */

const Header = (props) => {
    return (
      <h1>{props.course.name}</h1>
    )
  }
  
  const Content = (props) => {
    return (
      <p>
        {props.parts.name} {props.parts.exercises}
      </p>
    )
  }
  
  const Total = (props) => {
    return (
      <p>
        Number of exercises {props.parts.reduce((total, part) => total + part.exercises, 0)}
      </p>
    )
  }
  
  
  
  const Course = ({course}) => {
    return (
      <div>
        <Header course={course}/>
        <hr/>
        <h3>Course Parts</h3>
        {course.parts.map((part) => {
          return (
            <Content key={part.id} parts={part}/>
          )
        }
        )}
        <Total parts={course.parts}/>
      </div>
    )
  } 

    export default Course;