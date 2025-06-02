import { useState } from "react";
import "./gpa.css";
import "../../assets/global.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretUp, faSquareCaretDown, faTrash } from "@fortawesome/free-solid-svg-icons";
import Instructions from "./Instructions";
import DownloadSection from "./DownloadSection";
import useLocalStorage from "../../hooks/useLocalStorage";

interface Course {
  courseName: string;
  credits: number;
  grade: string;
}

export default function CalculateGPA() {
  const [courses, setCourses] = useLocalStorage<Course[]>("courses", []);
  const [courseName, setCourseName] = useState("");
  const [credits, setCredits] = useState(3);
  const [grade, setGrade] = useState("A+");
  const [showAll, setShowAll] = useState(false);

  const handleUpload = (uploadedCourses: Course[]) => {
    setCourses(uploadedCourses);
  };

  function addCourse() {
    if (courseName.trim() === "") return;
    setCourses([{ courseName, credits, grade }, ...courses]);
    setCourseName("");
    setCredits(3);
  }

  function deleteCourse(index: number) {
    const updatedCourses = courses.filter((_, i) => i !== index);
    setCourses(updatedCourses);
  }

  // function renderCourses(list: Course[]) {
  //   list.map(item, index) => {

  //   }
  // }


  // courses.map((item, index) => (
  //             <div key={index} className="course-details">
  //               <p>{item.courseName.toUpperCase()}</p>
  //               <p>{item.credits}</p>
  //               <p>{item.grade}</p>
  //               <button
  //                 onClick={() => deleteCourse(index)}
  //                 className="delete-button"
  //               >
  //                 <FontAwesomeIcon icon={faTrash} />
  //               </button>
  //             </div>
  //           ))

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
          name="course field"
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
        {showAll
          ? courses.map((item, index) => (
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
            ))
          : courses.slice(0, 5).map((item, index) => (
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

      <button className="button" onClick={() => {setShowAll(!showAll)}}>
        {showAll ? (<>Collapse Courses <FontAwesomeIcon icon={faSquareCaretUp}/></>) : (<>Expand Courses <FontAwesomeIcon icon={faSquareCaretDown}/></>)}
      </button>

      <Instructions />

      <DownloadSection courseList={courses} onUpload={handleUpload} />
    </div>
  );
}
