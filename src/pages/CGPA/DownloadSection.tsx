interface Course {
  courseName: string;
  credits: number;
  grade: string;
}

function exportJson(obj: object) {
    const jsonObj = JSON.stringify(obj, null, 2);
    const filename = "courses.json";
    const contentType = "application/json;charset=utf-8";
    const blob = new Blob([jsonObj], {
      type: contentType,
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = filename;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  }

function DownloadSection(props: Course[]) {


  // function uploadJSON() {

  // }

  console.log(props);

  return (
    <div>
      <h2>
        Your course information will be saved in the browser. You can also
        download it as a backup and load it later.
      </h2>
      <div>
        <button
          className="button"
          onClick={() => {
            exportJson(props);
          }}
        >
          Download JSON
        </button>
        <button className="button">Upload JSON</button>
      </div>
    </div>
  );
}

export default DownloadSection;