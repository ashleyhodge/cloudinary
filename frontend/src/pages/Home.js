import { useEffect, useState } from "react";
import { Image } from 'cloudinary-react'


const Home = () => {
  const [imageIds, setImageIds] = useState();

  const loadImages = async () => {
    try {
      const res = await fetch('/api/images');
      const data = await res.json();
      setImageIds(data);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    loadImages();
  }, [])
  return(
    <div>
      <p>Home</p>
      {imageIds && imageIds.map((imageId, index) => (
        <Image key={index}
          cloudName="decfxx7f2"
          publicId={imageId}
          width='300'
          crop='scale'
        />
      ))}
    </div>
  )
}

export default Home;