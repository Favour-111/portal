import React from "react";

function map() {
  const items = ["garri", "epa", "sugar", "coldwater"];
  return (
    <div>
      {items.map((cont) => {
        return <h3>{cont}</h3>;
      })}
    </div>
  );
}

export default map;
