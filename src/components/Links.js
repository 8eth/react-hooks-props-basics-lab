import React from 'react';

function Links(props) {
  return (
    <>    
        <h3>Links</h3>
        <a href = {props.github} > {props.github} </a>
        <a href = {props.linkedin}> {props.linkedin} </a>
    </>
  )
}

export default Links;

// import React from "react";

// function Links({ github, linkedin }) {
//   return (
//     <div id="links">
//       <h3>Links</h3>
//       {/* <p>{props.bio}</p> */}
//       <a href={github}>{github}</a>
//       <a href={linkedin}>{linkedin}</a>
//     </div>
//   );
// }

// export default Links;