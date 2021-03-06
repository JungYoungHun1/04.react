import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/file-list").then((response) => {
      setFiles(response.data);
    });
  }, []);
  return (
    <div className="App">
      <form
        method="post"
        action="http://localhost:8080/file-save"
        encType="multipart/form-data"
      >
        <input type="file" name="file" />
        <br />
        <input type="submit" value="전송" />
      </form>
      <div>
        {files.length !== 0 &&
          files.map((file) => (
            <li key={file.id}>
              <a href={`http://localhost:8080/file-download/${file.id}`}>
                {file.id} - {file.originalFilename}
              </a>
            </li>
          ))}
      </div>
    </div>
  );
}

export default App;
