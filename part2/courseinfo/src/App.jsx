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

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <ul>
      {courses.map(course => 
        <li key={course.id}>
          <Course course={course}/>
        </li>
      )}
    </ul>
  )
}

export default App