import { useRef } from "react";

interface Course {
  courseName: string;
  credits: number;
  grade: string;
}

function exportJson(courses: Course[]) {
  if (!courses.length) {
    alert("Empty course list");
    return;
  }

  const jsonObj = JSON.stringify(courses, null, 2);
  const filename = "courses.json";
  const contentType = "application/json;charset=utf-8";
  const blob = new Blob([jsonObj], { type: contentType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = filename;
  link.style.display = "none";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}

interface DownloadSectionProps {
  courseList: Course[];
  onUpload: (courses: Course[]) => void;
}

function DownloadSection({ courseList, onUpload }: DownloadSectionProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.includes("json") && !file.name.endsWith(".json")) {
      alert("Please select a valid JSON file");
      return;
    }

    const reader = new FileReader();
    reader.readAsText(file, "UTF-8");

    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);

        let coursesArray: Course[];

        if (Array.isArray(json)) {
          coursesArray = json;
        } else if (json && Array.isArray(json.courses)) {
          // if its wrapped in an object like { courses: [...] }
          coursesArray = json.courses;
        } else if (json && typeof json === "object") {
          // if its an object, try to find an array property
          const arrayProperty = Object.values(json).find((value) =>
            Array.isArray(value)
          );
          if (arrayProperty) {
            coursesArray = arrayProperty as Course[];
          } else {
            throw new Error("No valid course array found in the JSON file");
          }
        } else {
          throw new Error(
            "Invalid format: expected an array of courses or object containing courses"
          );
        }

        const isValidCourseArray = coursesArray.every(
          (course) =>
            course &&
            typeof course.courseName === "string" &&
            typeof course.credits === "number" &&
            typeof course.grade === "string"
        );

        if (!isValidCourseArray) {
          throw new Error("Invalid course data structure");
        }

        onUpload(coursesArray);
        alert(
          `File uploaded successfully! Loaded ${coursesArray.length} courses.`
        );

        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } catch (error) {
        console.error("Upload error:", error);
        alert(
          `Invalid JSON file: ${
            error instanceof Error ? error.message : "Unknown error"
          }`
        );
      }
    };

    reader.onerror = () => {
      alert("Error reading file");
    };
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      <h2>
        Your course information will be saved in the browser. You can also
        download it as a backup and load it later.
      </h2>
      <div>
        <button className="button" onClick={() => exportJson(courseList)}>
          Download JSON
        </button>
        <button className="button" onClick={triggerFileUpload}>
          Upload JSON
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept=".json,application/json"
          onChange={handleFileUpload}
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
}

export default DownloadSection;
