// import React, { useEffect, useState } from "react";
// import { getStorage, ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
// import { v4 as uuidv4 } from "uuid";
// import "tailwindcss/tailwind.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDownload, faUpload } from "@fortawesome/free-solid-svg-icons";
// import multer from "multer";
// import express from "express";
// import cors from "cors";

// const app = express();
// app.use(cors());
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });
// const upload = multer({ storage: storage });

// function Photo() {
//   const [img, setImg] = useState(null);
//   const [imgUrl, setImgUrl] = useState([]);
//   const [fileName, setFileName] = useState("Choose Image");
//   const [isUploading, setIsUploading] = useState(false);
//   const storage = getStorage();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const storageRef = ref(storage, "files");
//         const listRef = await listAll(storageRef);
//         const urls = await Promise.all(
//           listRef.items.map((item) => getDownloadURL(item))
//         );
//         setImgUrl(urls);
//       } catch (error) {
//         console.error("Error fetching images:", error);
//       }
//     };

//     fetchData();
//   }, []); // Fetch images only once when the component mounts

//   const handleClick = () => {
//     if (img!== null &&!isUploading) {
//       setIsUploading(true);
//       const imgRef = ref(storage, `files/${uuidv4()}`);
//       upload.single("file")(req, res, (err) => {
//         if (err) {
//           console.error("Error uploading image:", err);
//           setIsUploading(false);
//           return;
//         }
//         uploadBytes(imgRef, img)
//         .then((snapshot) => {
//             console.log("Uploaded an image!");
//             getDownloadURL(imgRef)
//             .then((url) => {
//                 setImgUrl((prevUrls) => [...prevUrls, url]);
//                 setFileName("Choose Image");
//                 setIsUploading(false);
//               })
//             .catch((error) => {
//                 console.error("Error getting download URL:", error);
//                 setIsUploading(false);
//               });
//           })
//         .catch((error) => {
//             console.error("Error uploading image:", error);
//             setIsUploading(false);
//           });
//       });
//     } else {
//       alert("Please choose an image first.");
//     }
//   };

//   const handleFileChange = (e) => {
//     setImg(e.target.files[0]);
//     setFileName(e.target.files[0].name);
//   };

//   return (
//     <div className="flex flex-col mt-10 h-screen bg-gray-300 bg-opacity-50">
//       <div className="container mx-auto mt-10 flex-1">
//         <div className="grid grid-cols-3 gap-4">
//           {imgUrl.map((dataVal, index) => (
//             <div key={index} className="relative rounded-lg overflow-hidden border border-black">
//               <img src={dataVal} alt={`Image ${index}`} className="object-cover h-60 w-full" />
//               <button className="absolute bottom-0 right-0 bg-white bg-opacity-50 py-1 px-2 rounded-full border border-gray-300 flex items-center justify-center">
//                 <a href={dataVal} download className="text-gray-500 hover:text-gray-700">
//                   <FontAwesomeIcon icon={faDownload} />
//                 </a>
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//       <footer className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 py-4 px-4">
//         <div className="flex justify-center">
//           <label htmlFor="fileInput" className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700">
//             <FontAwesomeIcon icon={faUpload} className="mr-2" />
//             {fileName}
//           </label>
//           <input type="file" id="fileInput" onChange={handleFileChange} className="hidden" />
//           <button onClick={handleClick} className={`bg-blue-500 text-white px-4 py-2 rounded ml-4 hover:bg-blue-700 ${(!img || isUploading)? 'opacity-50 cursor-not-allowed' : ''}`}>
//             {isUploading? 'Uploading...' :'Upload'}
//           </button>
//         </div>
//       </footer>
//     </div>
//   );
// }

// app.post("/upload", upload.single("file"), (req, res) => {
//   // Handle file upload here
// });

// export default Photo;