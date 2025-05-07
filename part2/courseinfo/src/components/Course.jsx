const Header = (props) => <h1>{props.course}</h1>

const Content = ( {parts} ) => (
  <div>
    <ul>
      {parts.map(part =>
        <li key={part.id}>
          <Part part={part} />
        </li>
      )}
    </ul>
    <Total parts={parts} />
  </div>
)

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = ( {parts} ) => (
  <p>Number of exercises {parts.reduce((sum, num) => sum + num.exercises, 0)}</p>
)

const Course = ( {course} ) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </div>
  )
}

export default Course