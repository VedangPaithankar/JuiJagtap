import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import { initializeApp } from 'firebase/app';
import { useParams } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import React from 'react'

const firebaseConfig = {
  apiKey: "AIzaSyBkD2s8YqrqvIXIPMbVd1m1-zZoeBWuQs4",
  authDomain: "jui-jagtap.firebaseapp.com",
  projectId: "jui-jagtap",
  storageBucket: "jui-jagtap.appspot.com",
  messagingSenderId: "380448849012",
  appId: "1:380448849012:web:fb3e46ae5fe66068c2e521",
  measurementId: "G-1S95KKYFFQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

function Workflow() {
  const { name, id } = useParams();
  const [images, setImages] = useState([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    const fetchImages = async () => {
        const storageRef = ref(storage, `gs://jui-jagtap.appspot.com/${id}`);
        const imageList = await listAll(storageRef);

        const urls = await Promise.all(imageList.items.map(async (item) => {
          return getDownloadURL(item);
        }));

        setImages(urls);
        imageRefs.current = Array(urls.length).fill(null).map(() => React.createRef());
    };

    fetchImages();
  }, [id, storage]);

  return (
    <div className="text-center justify-center mt-[100px] md:mt-[160px] mx-12">
      <h1 className='text-[30px] md:text-[75px] mb-20 font-fam-bold text-[#373737]'>{name}</h1>
      {images.map((image, index) => (
        <div key={index} ref={imageRefs.current[index]}>
          <img
            src={image}
            alt={`image-${index + 1}`}
            className={`image-section`}
          />
        </div>
      ))}
      {id === "2" ? (
        <div className='m-10 mb-20 text-center font-fam-bold text-[#173127] text-[30px] md:text-[60px]'>
          Stay Tuned!
        </div>
      ) : null}
    </div>
  );
}

export default Workflow;
