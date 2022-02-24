import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a id="sitename" href="#">
              Collab Compiler
            </a>
          </li>
          <li>
            <a href="#">Code</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
        </ul>
      </nav>
      <div className="text">
        <textarea
          rows={27}
          cols={64}
          placeholder={"Enter your code here"}
        ></textarea>
      </div>
    </div>
  );
}

export default App;
