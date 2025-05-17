import { useState } from "react";
import "./gpa.css";
import "../../assets/global.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

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

  function deleteCourse(index: number) {
    const updatedCourses = courses.filter((_, i) => i !== index);
    setCourses(updatedCourses);
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
      <button className="button" onClick={addCourse}>
        Add Course
      </button>
      <div className="course-list">
        {courses.map((item, index) => (
          <div key={index} className="course-details">
            <p>{item.courseName.toUpperCase()}</p>
            <p>{item.credits}</p>
            <p>{item.grade}</p>
            <button
              onClick={() => deleteCourse(index)}
              className="delete-button"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        ))}
      </div>
      <button className="button">Calculate CGPA</button>

      <h1>Instructions to Calculate CGPA</h1>
      <p>
        You can use GPA calculator to calculate your SGPA and CGPA. In order to
        calculate your SGPA, enter the courses of that particular semester. In
        order to calculate your CGPA, enter the courses of all the semesters.
        Read the following points carefully to calculate your correct GPA:
      </p>

      <h2>Your course information will be saved in the browser, you can also download it and load it later.</h2>

    </div>
  );
}

export default CalculateGPA;
