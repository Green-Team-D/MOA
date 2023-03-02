import React, { useState } from "react";
import { TargetIdContext } from "./wordCount";

const ParentComponent = ({ children }) => {
  const [targetId, setTargetId] = useState(null);
  return (
    <TargetIdContext.Provider value={{ targetId, setTargetId }}>
      {children}
    </TargetIdContext.Provider>
  );
};

export default ParentComponent;
