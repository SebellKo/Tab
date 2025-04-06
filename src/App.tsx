import './App.css';

function App() {
  return (
    <div className="container">
      <input type="checkbox" className="toggle_input" id="toggle" />
      <label className="toggle_label" htmlFor="toggle">
        <div className="toggle"></div>
        <h4 className="current">Current</h4>
        <h4 className="new">New</h4>
      </label>
    </div>
  );
}

export default App;
