import React, { useState, useEffect } from "react";
import { FetchData } from "../../utils/service";

export default function TestingApiCalls() {
  const [data, setData] = useState([]);

  useEffect(() => {
    FetchData().then((data) => {
      setData(data);
    });
  });

  return (
    <div>
      {data.map((item) => (
        <div>{<img src={item.src} width="150" height="150" alt="" />} {item.name}</div>
      ))}
    </div>
  );
}
