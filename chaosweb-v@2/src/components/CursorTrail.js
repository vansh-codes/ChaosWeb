import { useEffect } from "react";

const CursorTrail = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const trail = document.createElement('div');
      trail.className = 'trail';
      document.body.appendChild(trail);

      // Position the trail at the mouse position
      trail.style.left = `${e.pageX - 10}px`;
      trail.style.top = `${e.pageY - 10}px`;

      // Remove the trail after the animation ends
      setTimeout(() => {
        trail.remove();
      }, 500); // This matches the fade animation duration
    };

    // Attach event listener on mount
    document.addEventListener('mousemove', handleMouseMove);

    // Clean up event listener on unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null; // This component doesn’t render any visible elements
};

export default CursorTrail;
