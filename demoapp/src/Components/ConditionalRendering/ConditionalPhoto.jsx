// import React from "react";
// import "./ConditionalPhoto.css";

// const ConditionalPhoto = () => {
//   const [image, setImage] = React.useState("");
//     const [height, setHeight] = React.useState("");
//     const [width, setWidth] = React.useState("");
//   const imageRef = React.useRef(null);

//   function useDisplayImage() {
//     const [result, setResult] = React.useState("");

//     function uploader(e) {
//       const imageFile = e.target.files[0];

//       const reader = new FileReader();
//       reader.addEventListener("load", (e) => {
//         setResult(e.target.result);
//       });

//       reader.readAsDataURL(imageFile);
//     }

//     return { result, uploader };
//   }

//   function imgSize() {
//     var myImg = document.querySelector("#imagefile");
//     var realWidth = myImg.naturalWidth;
//     var realHeight = myImg.naturalHeight;
//     console.log(realHeight);
//     alert(
//       "Original width=" + realWidth + ", " + "Original height=" + realHeight
//     );
//     return [realHeight, realWidth];
//   }

//   const { result, uploader } = useDisplayImage();

//   return (
//     <div>
//       <input
//         type="file"
//         onChange={(e) => {
//           setImage(e.target.files[0]);
//           uploader(e);
//         }}
//       />
//       {result && <img id="imgfile" ref={imageRef} src={result} alt="" />}
//       <p>
//         <button type="button" onClick={()=>{setHeight()}}>
//           Get Original Image Size
//         </button>
//       </p>
//     </div>
//   );
// };

// export default ConditionalPhoto;
