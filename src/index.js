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

  const idata = [
    {
      id: "BRa2xX",
      mark: {
        x: 84.393063583815,
        y: 107.51445086705202,
        width: 211.56069364161849,
        height: 83.2369942196532,
        type: "RECT"
      },
      comment: "Google"
    },
    {
      id: "QtPJeW",
      mark: {
        x: 469.3641618497109,
        y: 86.70520231213872,
        width: 221.96531791907518,
        height: 149.1329479768786,
        type: "RECT"
      },
      comment: "Mozilla"
    },
    {
      id: "czysBh",
      mark: {
        x: 153.757225433526,
        y: 322.5433526011561,
        width: 201.15606936416185,
        height: 83.23699421965318,
        type: "RECT"
      },
      comment: "IPsoft"
    }
  ];

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
        annotationData={idata}
      />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
