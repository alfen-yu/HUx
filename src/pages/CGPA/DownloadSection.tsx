const test = {
  users: [
    {
      id: 1,
      name: "Caitlyn",
      surname: "Kerluke",
      age: 24,
    },
    {
      id: 2,
      name: "Rowan ",
      surname: "Nikolaus",
      age: 45,
    },
    {
      id: 3,
      name: "Kassandra",
      surname: "Haley",
      age: 32,
    },
    {
      id: 4,
      name: "Rusty",
      surname: "Arne",
      age: 58,
    },
  ],
};

function DownloadSection() {
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
    link.setAttribute("download", filename);
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div>
      <h2>
        Your course information will be saved in the browser, you can also
        download it and load it later.
      </h2>
      <div>
        <button
          className="button"
          onClick={() => {
            exportJson(test);
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
