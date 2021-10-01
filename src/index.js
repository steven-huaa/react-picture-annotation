import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { default as ReactPictureAnnotation } from "./ReactPictureAnnotation";

const App = () => {
  const [pageSize, setPageSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const onResize = () => {
    setPageSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const onSelect = (selectedId) => {};
  const onChange = (data) => {};

  return (
    <div className="App">
      <ReactPictureAnnotation
        image="https://source.unsplash.com/random/800x600"
        onSelect={onSelect}
        onChange={onChange}
        width={pageSize.width}
        height={pageSize.height}
      />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
