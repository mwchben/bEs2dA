import React, { useState, useEffect } from "react";

//import { Button } from "react-bootstrap";

import bnbService from "../services/bnbService";

function ShowBnbs() {
  const [bnbs, setBnbs] = useState(null);

  useEffect(() => {
    if (!bnbs) {
      getBnbs();
    }
  });

  const getBnbs = async () => {
    let res = await bnbService.getAll();
    console.log(res);
    setBnbs(res);
  };

  const renderBNBS = (BNB) => {
    return (
      <li key={BNB._id}>
        <h3>{BNB.name}</h3>
        <p>{BNB.description}</p>
      </li>
    );
  };

  return (
    <div className="App">
      <ul>
        {bnbs && bnbs.length > 0 ? (
          bnbs.map((bnbs) => renderBNBS(bnbs))
        ) : (
          <p>No BNBS found</p>
        )}
      </ul>
    </div>
  );
}

export default ShowBnbs;
