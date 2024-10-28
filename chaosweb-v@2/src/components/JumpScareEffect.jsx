// src/components/JumpScareEffect.jsx
import React, { useEffect, useState } from 'react';
import './JumpScareEffect.css';
import jumpScareImage1 from '../assets/creepyImg/jump-scare.jpg';
import jumpScareImage2 from '../assets/creepyImg/jump-scare-2.jpg';
import jumpScareImage3 from '../assets/creepyImg/jump-scare-3.jpg';
import jumpScareImage4 from '../assets/creepyImg/jump-scare-4.jpg';
import jumpScareImage5 from '../assets/creepyImg/jump-scare-5.jpg';

const images = [jumpScareImage1, jumpScareImage2, jumpScareImage3, jumpScareImage4, jumpScareImage5];

const JumpScareEffect = ({ trigger }) => {
    const [visible, setVisible] = useState(false);
    const [currentImage, setCurrentImage] = useState(jumpScareImage1);
    const [position, setPosition] = useState({ top: '50%', left: '50%' });

    useEffect(() => {
        if (trigger) {
            const randomImage = images[Math.floor(Math.random() * images.length)];
            setCurrentImage(randomImage);

            
            const randomTop = `${Math.floor(Math.random() * 80) + 10}%`;
            const randomLeft = `${Math.floor(Math.random() * 80) + 10}%`;
            setPosition({ top: randomTop, left: randomLeft });

            setVisible(true);
            const timer = setTimeout(() => {
                setVisible(false);
            }, 1500); 
            return () => clearTimeout(timer);
        }
    }, [trigger]);

    return (
        <>
            {visible && (
                <div className="jump-scare" style={{ top: position.top, left: position.left }}>
                    <img src={currentImage} alt="Jump Scare" />
                </div>
            )}
        </>
    );
};

export default JumpScareEffect;




















// // src/components/JumpScareEffect.jsx
// import React, { useEffect, useState } from 'react';
// import './JumpScareEffect.css';
// import jumpScareImage1 from '../assets/creepyImg/jump-scare.jpg';
// import jumpScareImage2 from '../assets/creepyImg/jump-scare-2.jpg';
// import jumpScareImage3 from '../assets/creepyImg/jump-scare-3.jpg';
// import jumpScareImage4 from '../assets/creepyImg/jump-scare-4.jpg';
// import jumpScareImage5 from '../assets/creepyImg/jump-scare-5.jpg';

// const images = [jumpScareImage1, jumpScareImage2, jumpScareImage3, jumpScareImage4, jumpScareImage5];

// const JumpScareEffect = ({ trigger }) => {
//     const [visible, setVisible] = useState(false);
//     const [currentImage, setCurrentImage] = useState(jumpScareImage1);

//     useEffect(() => {
//         if (trigger) {
//             // Randomly select an image each time
//             const randomImage = images[Math.floor(Math.random() * images.length)];
//             setCurrentImage(randomImage);
//             setVisible(true);
//             const timer = setTimeout(() => {
//                 setVisible(false);
//             }, 1500); // Display for 1.5 seconds
//             return () => clearTimeout(timer);
//         }
//     }, [trigger]);

//     return (
//         <>
//             {visible && (
//                 <div className="jump-scare">
//                     <img src={currentImage} alt="Jump Scare" />
//                 </div>
//             )}
//         </>
//     );
// };

// export default JumpScareEffect;



