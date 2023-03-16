// import logo from './logo.svg';
// import './App.css';

import React, { useState } from 'react';
import LeftDiv from './LeftDiv';
import ChangePicButton from './ChangePicButton';

const App = () => {
    const img1="https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80";
    const img2="https://thumbs.dreamstime.com/b/lion-looking-up-brown-background-panthera-leo-39254558.jpg";
    let toggleimg=true;
    
  const [imageUrl, setImageUrl] = useState(img1);

  
  const handleChangePic = () => {
    if (toggleimg){
        setImageUrl(img2);
        toggleimg=false;


    }
    else{
        setImageUrl(img1);
        toggleimg=true;

    }


  
  };

  return (
    <div className="app">
      <LeftDiv imageUrl={imageUrl} />
      <ChangePicButton onClick={handleChangePic} />
    </div>
  );
};

export default App;


// import React from 'react';
// import './App.css';
// import LeftDiv from './LeftDiv';
// import ChangePicButton from './ChangePicButton';

// const App = () => {
//   const [imageUrl, setImageUrl] = React.useState('https://picsum.photos/200');
  
//   const handleChangePic = () => {
//     setImageUrl(`https://picsum.photos/200?random=${Math.random()}`);
//   };

//   return (
//     <div className="app">
//       <LeftDiv imageUrl={imageUrl} />
//       <ChangePicButton onClick={handleChangePic} />
//     </div>
//   );
// };

// export default App;


//   );
// }

// export default App;
// import React, { useState } from 'react';

// function App() {
//   const [imageSrc, setImageSrc] = useState('https://www.google.com/url?sa=i&url=https%3A%2F%2Ffileinfo.com%2Fextension%2Fjpg&psig=AOvVaw1Lcu78vxg8BAQjz5gB0wEf&ust=1679023871896000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLCc073B3_0CFQAAAAAdAAAAABAH'); // default image
//   // const [imageSrc, setImageSrc] = useState('); // default image

//   const handleImageChange = () => {
//     // Change the image source to a new image
//     setImageSrc('https://www.google.com/url?sa=i&url=https%3A%2F%2Ffileinfo.com%2Fextension%2Fjpg&psig=AOvVaw1Lcu78vxg8BAQjz5gB0wEf&ust=1679023871896000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLCc073B3_0CFQAAAAAdAAAAABAH');
//   };

//   return (
//     <div style={{ display: 'flex', alignItems: 'center' }}>
//       <div style={{ width: '50%' }}>
//         <img src={imageSrc} alt="example" style={{ maxWidth: '100%' }} />
//       </div>
//       <div style={{ marginLeft: '20px' }}>
//         <button onClick={handleImageChange}>Change Pic</button>
//       </div>
//     </div>
//   );
// }

// export default App;
