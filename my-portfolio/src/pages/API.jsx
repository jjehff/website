import { useState } from 'react';

function PhotoAPI() {
  const [imgUrl, setImgUrl] = useState(null);

  const fetchPhoto = async () => {
    const res = await fetch('http://localhost:1234/api/photo');
    const data = await res.json();
    setImgUrl(data.url);
  };

  return (
    <div className="text-center">
      <button onClick={fetchPhoto}>Photo</button>
      <img src={imgUrl}/>
    </div>
  );
}

export default PhotoAPI;

