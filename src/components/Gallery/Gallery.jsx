import React, { useEffect, useState } from "react";
import { imageDb } from '../../firebase/firebase';
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import 'tailwindcss/tailwind.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faUpload } from '@fortawesome/free-solid-svg-icons';

function Photos() {
  const [img, setImg] = useState('');
  const [imgUrl, setImgUrl] = useState([]);
  const [fileName, setFileName] = useState('Choose Image');
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const imgs = await listAll(ref(imageDb, 'files'));
        const urls = await Promise.all(imgs.items.map(async (val) => await getDownloadURL(val)));
        setImgUrl(urls);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchData();
  }, []); // Fetch images only once when the component mounts

  const handleClick = () => {
    if (img !== null && !isUploading) {
      setIsUploading(true);
      const imgRef = ref(imageDb, `files/${v4()}`);
      uploadBytes(imgRef, img)
        .then((value) => {
          console.log(value);
          getDownloadURL(value.ref)
            .then((url) => {
              setImgUrl((data) => [...data, url]); // Append the new URL to the existing array
              setFileName('Choose Image');
              setIsUploading(false);
            })
            .catch((error) => {
              console.error("Error getting download URL:", error);
              setIsUploading(false);
            });
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
          setIsUploading(false);
        });
    } else {
      alert("Please choose an image first.");
    }
  };

  const handleFileChange = (e) => {
    setImg(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  return (
    <div className="flex flex-col mt-10 h-screen bg-gray-300 bg-opacity-50">
  <div className="container mx-auto mt-10 flex-1">
    <div className="grid grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {imgUrl.map((dataVal, index) => (
        <div key={index} className="relative rounded-lg overflow-hidden border border-black p-2">
          <img src={dataVal} alt={`Image ${index}`} className="object-cover h-60 w-full" />
          <button className="absolute bottom-0 right-0 bg-white bg-opacity-50 py-1 px-2 rounded-full border border-gray-300 flex items-center justify-center">
            <a href={dataVal} download className="text-gray-500 hover:text-gray-700">
              <FontAwesomeIcon icon={faDownload} />
            </a>
          </button>
        </div>
      ))}
    </div>
  </div>
  <footer className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 py-4 px-4">
    <div className="flex justify-center">
      <label htmlFor="fileInput" className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700">
        <FontAwesomeIcon icon={faUpload} className="mr-2" />
        {fileName}
      </label>
      <input type="file" id="fileInput" onChange={handleFileChange} className="hidden" />
      <button onClick={handleClick} className={`bg-blue-500 text-white px-4 py-2 rounded ml-4 hover:bg-blue-700 ${(!img || isUploading)? 'opacity-50 cursor-not-allowed' : ''}`}>
        {isUploading? 'Uploading...' : 'Upload'}
      </button>
    </div>
  </footer>
</div>
  );
}

export default Photos;