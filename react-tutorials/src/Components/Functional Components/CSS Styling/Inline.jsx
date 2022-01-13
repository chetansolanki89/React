import React from "react";

const heading = { fontSize: "50px", color: "blue" };

const Inline = () => {
  return (
    <div>
      <h1 style={heading}>Inline</h1>
      <h1 className="error">Error</h1>
      {/* CSS is applied to child component also, this may lead to CSS conflicts */}
      {/* <h1 className={styles.success}>Success</h1>  */}
      {/*This will give error, as CSS modules cannot be used in child components. We can't accidently use the class that was designed for some other component*/}

    </div>
  );
};

export default Inline;
