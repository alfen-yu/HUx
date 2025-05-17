import { useState } from "react";

function CalculateGPA() {
  // const [courses, setCourses] = useState([]);
  const [value, setValue] = useState('');

  return (
    <div className="add-course">
      <input type="field" placeholder="Enter course name" value={value} onChange={(e) => setValue(e.target.value)} />
      <select name="credit hours" className="dropdown-gpa">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      {/* <input type="button" value="Add Course" onClick={setCourses(courses.push(value))}/> */}
      {/* <button onClick={setCourses(courses.push(value))}>Add Courses</button> */}
    </div>
  )
}

export default CalculateGPA