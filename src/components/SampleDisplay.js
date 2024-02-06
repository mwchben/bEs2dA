import React, { useState, useEffect } from "react";

//import { Button } from "react-bootstrap";

import sampleService from "../services/sampleService";

function SampleDisplay() {
  const [samples, setSamples] = useState(null);

  useEffect(() => {
    if (!samples) {
      getSamples();
    }
  });

  const getSamples = async () => {
    let res = await sampleService.getAll();
    console.log(res);
    setSamples(res);
  };

  const renderProduct = (sample) => {
    return (
      <li key={sample._id}>
        <h3>{sample.name}</h3>
        <p>{sample.description}</p>
      </li>
    );
  };

  return (
    <div className="App">
      <ul>
        {samples && samples.length > 0 ? (
          samples.map((sample) => renderProduct(sample))
        ) : (
          <p>No products found</p>
        )}
      </ul>
    </div>
  );
}

export default SampleDisplay;
