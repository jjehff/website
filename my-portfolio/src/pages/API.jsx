import { useState } from 'react';

function PhotoAPI() {
  const [imgUrl, setImgUrl] = useState(null);

  const fetchPhoto = async () => {
    const res = await fetch('https://website-2-tab4.onrender.com/');
    const data = await res.json();
    setImgUrl(data.url);
  };

  return (
    <div className="text-center">
      <button onClick={fetchPhoto}>Get Photo</button>
      <img src={imgUrl}/>
    </div>
  );
}

export default PhotoAPI;
