import { useState } from "react";
import "./gpa.css";
import "../../assets/global.css";

interface Course {
  courseName: string;
  credits: number;
  grade: string;
}

function CalculateGPA() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [courseName, setCourseName] = useState("");
  const [credits, setCredits] = useState(3);
  const [grade, setGrade] = useState("A+");

  function addCourse() {
    if (courseName.trim() === "") return;
    setCourses([...courses, { courseName, credits, grade }]);
    setCourseName("");
    setCredits(3);
  }

  return (
    <div className="gpa-container">
      <h1>CGPA Calculator</h1>
      <p>
        A grade point average (GPA) is a calculated average of the letter grades
        you will earn at Habib University following a 0 to 4.0 scale. It
        represents a student’s average performance in their studies over a
        stated period of time. Every semester, you will receive a GPA based on
        the grades you earned in all of your courses during that semester.
        Semester GPA is represented by SGAP. Throughout your University life,
        you will also maintain a cumulative GPA, which is an ongoing average of
        all your semesters beginning from semester 2. Cumulative GPA is often
        denoted by CGPA.
      </p>
      <div className="add-course-fields">
        <input
          type="text"
          placeholder="Enter course name"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />
        <select
          name="credits"
          value={credits}
          onChange={(e) => setCredits(parseInt(e.target.value))}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <select
          name="grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        >
          <option value="A+">A+</option>
          <option value="A">A</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B">B</option>
          <option value="B-">B-</option>
          <option value="C+">C+</option>
          <option value="C">C</option>
          <option value="C-">C-</option>
          <option value="F">F</option>
        </select>
      </div>
      <button className="button" onClick={addCourse}>Add Course</button>
      <div>
        {courses.map((item, index) => (
          <div key={index}>
            <p>Course: {item.courseName}</p>
            <p>Credits: {item.credits}</p>
            <p>Letter Grade: {item.grade}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalculateGPA;