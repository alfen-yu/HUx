import "./gpa.css";

function Instructions() {
  return (
    <div className="instructions">
      <h1>Instructions to Calculate CGPA</h1>
      <p>
        You can use GPA calculator to calculate your SGPA and CGPA. In order to
        calculate your SGPA, enter the courses of that particular semester. In
        order to calculate your CGPA, enter the courses of all the semesters.
        Read the following points carefully to calculate your correct GPA:
      </p>

      <ol>
        <li>
          A mathematical formula for calculating GPA or CGPA is to divide the
          Total Quality Points by the Total Attempted Credits. Quality points
          are derived by multiplying credits for the individual course by the
          numeric value of "letter grade" earned in the course, as listed in the
          official grading scale of the University
        </li>
        <li>
          Grades A+ to F earned in a course are counted towards the calculation
          of SGPA and CGPA.
        </li>
        <li>
          Grade F replaced by R or R*, upon repeating a course, will not be
          counted towards the calculation of GPA/SGPA.
        </li>
        <li>
          Following grades will not be counted towards the calculation of SGPA
          or CGPA: Audit (A), Withdraw (W), Incomplete (I), Transfer (T),
          Suspended (S), Credit (CR), Non-Credit (NCR).
        </li>
        <li>
          In case of a change of major, earned grades of the following courses
          will be transferred to the new major and shall be counted towards the
          calculation of CGPA in the student’s transcript:
          <ul>
            <li>Earned grades of all Habib Liberal Core Courses attended.</li>
            <li>
              Earned grades of all course that fulfill the requirement of the
              new major.
            </li>
            <li>
              Courses with pass grades that that may be eligible for transfer to
              fulfill the graduation requirement(s) of the new major.
            </li>
          </ul>
        </li>
        <li>
          In case of a change of major, all other courses (and their grades)
          that are not transferred to the new major shall be mentioned on the
          transcript; however, their respective grades shall not be counted
          towards the calculation of SGPA and CGPA.
        </li>
      </ol>
    </div>
  );
}

export default Instructions;
