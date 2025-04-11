import { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    chrome.storage.local.get(['targetOption'], (result) => {
      const { targetOption } = result;

      if (inputRef.current) {
        if (targetOption === '_parent') inputRef.current.checked = false;
        if (targetOption === '_blank') inputRef.current.checked = true;
      }
    });
  }, []);

  const handleToggle = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    const { checked } = event.currentTarget;
    if (checked) {
      return chrome.storage.local.set({ targetOption: '_blank' });
    }
    chrome.storage.local.set({ targetOption: '_parent' });
  };

  return (
    <div className="container">
      <input
        ref={inputRef}
        type="checkbox"
        className="toggle_input"
        id="toggle"
        onClick={(event) => handleToggle(event)}
      />
      <label className="toggle_label" htmlFor="toggle">
        <div className="toggle"></div>
        <h4 className="current">Current</h4>
        <h4 className="new">New</h4>
      </label>
    </div>
  );
}

export default App;
