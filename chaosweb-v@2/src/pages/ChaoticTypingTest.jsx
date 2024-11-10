import { useState, useEffect } from 'react';
import './ChaoticTypingTest.css';

const ChaoticTypingTest = () => {
  const paragraph = "This is your typing paragraph. Try to type it accurately despite the chaos!";
  const [typedText, setTypedText] = useState('');
  const [scrambledText, setScrambledText] = useState(paragraph);

  const scrambleParagraph = () => {
    const scrambledParagraph = paragraph.split('').sort(() => Math.random() - 0.5).join('');
    setScrambledText(scrambledParagraph);

    const randomSize = Math.random() * (2 - 0.8) + 0.8;
    const randomRotation = Math.random() * 360;
    const randomX = Math.random() * 50;
    const randomY = Math.random() * 50;

    const scrambledTextEl = document.getElementById('scrambled-text');
    scrambledTextEl.style.fontSize = `${randomSize}em`;
    scrambledTextEl.style.transform = `rotate(${randomRotation}deg) translate(${randomX}%, ${randomY}%)`;
  };

  const randomLetterOrEmoji = () => {
    const lettersAndEmojis = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz😊😂😎🎉✨💥🔥';
    return lettersAndEmojis[Math.floor(Math.random() * lettersAndEmojis.length)];
  };

  const chaoticTyping = (event) => {
    const typedChar = event.key;
    setTypedText((prevText) => prevText + typedChar);

    for (let i = 0; i < 100; i++) {
      const chaoticElement = document.createElement('div');
      chaoticElement.textContent = randomLetterOrEmoji();
      chaoticElement.classList.add('random-effect');
      chaoticElement.style.left = `${event.clientX + Math.random() * 300 - 50}px`;
      chaoticElement.style.top = `${event.clientY + Math.random() * 300 - 50}px`;
      document.body.appendChild(chaoticElement);
      setTimeout(() => chaoticElement.remove(), 2000);
    }
  };

  useEffect(() => {
    const scrambleInterval = setInterval(() => {
      scrambleParagraph();
    }, 3000);

    window.addEventListener('keydown', chaoticTyping);
    window.addEventListener('click', chaoticTyping);

    const titles = document.querySelectorAll('.floating-title');
    titles.forEach(title => {
      const randomX = Math.random() * 100;
      const randomY = Math.random() * 100;
      title.style.top = `${randomY}vh`;
      title.style.left = `${randomX}vw`;
    });

    return () => {
      clearInterval(scrambleInterval);
      window.removeEventListener('keydown', chaoticTyping);
      window.removeEventListener('click', chaoticTyping);
    };
  }, []);

  return (
    <div className="chaotic-typing-test">
      <div id="floating-title-1" className="floating-title">ChAOtiC TYpiNg UniVeRSe</div>
      <div id="floating-title-2" className="floating-title">Welcome to chaosWeb</div>

      <div id="container">
        <div id="scrambled-text">{scrambledText}</div>
        <div id="typed-output">{typedText}</div>
      </div>

      <div className="chaotic-element" style={{ width: '100px', height: '100px', top: '10%', left: '20%' }}></div>
      <div className="chaotic-element" style={{ width: '80px', height: '80px', top: '30%', left: '70%' }}></div>
      <div className="chaotic-element" style={{ width: '120px', height: '120px', top: '50%', left: '40%' }}></div>
      <div className="chaotic-element" style={{ width: '60px', height: '60px', top: '70%', left: '10%' }}></div>
      <div className="chaotic-element" style={{ width: '90px', height: '90px', top: '80%', left: '60%' }}></div>

      <div className="thunderbolt" style={{ left: '30%', top: '10%', animationDelay: '0.5s' }}></div>
      <div className="thunderbolt" style={{ left: '70%', top: '30%', animationDelay: '0.15s' }}></div>
      <div className="thunderbolt" style={{ left: '50%', top: '60%', animationDelay: '0.01s' }}></div>

      <div className="thunderbolt" style={{ left: '90%', top: '90%', animationDelay: '0.5s' }}></div>
      <div className="thunderbolt" style={{ left: '100%', top: '30%', animationDelay: '0.15s' }}></div>
      <div className="thunderbolt" style={{ left: '120%', top: '60%', animationDelay: '0.01s' }}></div>
    </div>
  );
};

export default ChaoticTypingTest;
