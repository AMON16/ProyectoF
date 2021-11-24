import React from 'react'
import {
    Link,
    Outlet,
} from "react-router-dom";

function learn() {
    return (
        <div>
            <h1>Learn component</h1>
            <h4>learn to learn</h4>
            <Link to="/learn/courses" className="btn btn-success">courses</Link>{" "}
            <Link to="/learn/bundles" className="btn btn-primary">bundle</Link>
            <Outlet/>
        </div>
    )
}
function Courses() {
  const courseList = ["React", "Angula", "Vue", "Nodejs"]
  const ramdomCourseName = courseList[Math.floor(Math.random()*courseList.length)]
  return (
    <div>
      <h1>Curses list</h1>
      <h4>Courses card</h4>
      <hr />
      <h4>NavLink</h4>
      <NavLink to={`/learn/courses/${ramdomCourseName}`}
        style={({ isActive }) => {
          return {
          backgroundColor: isActive ? "pink" : ''
        }
      }}>
        {ramdomCourseName}
      </NavLink>
      <NavLink to={`/learn/courses/💩`} className="btn btn-light">
        💩💩
      </NavLink>
      <Outlet />
      {/* autlet a CourseId() */}
    </div>
  )
}
function Bundles() {
  return (
    <div>
      <h1>Bundle list</h1>
      <h4>Bundle card</h4>
    </div>
  )
}

export default {learn, Courses, Bundles}