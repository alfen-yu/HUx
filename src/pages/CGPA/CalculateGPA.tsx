import { useState } from "react";

interface Course {
  courseName: string,
  credits: number
}

function CalculateGPA() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [courseName, setCourseName] = useState('');
  const [credits, setCredits] = useState(3);

  function addCourse() {
    if (courseName.trim() === '') return;
    setCourses([...courses, { courseName, credits }]);
    setCourseName('');
    setCredits(3);
  }

  return (
    <div className="add-course">
      <input type="text" placeholder="Enter course name" value={courseName} onChange={(e) => setCourseName(e.target.value)} />
      <select name="credit hours" className="dropdown-gpa" value={credits} onChange={(e) => setCredits(parseInt(e.target.value))}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <button onClick={addCourse}>Add Courses</button>
      <div>
        {courses.map((item, index) => (
          <div key={index}>
            <p>Course: {item.courseName}</p>
            <p>Credits: {item.credits}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CalculateGPA