import React from "react"
import ReactDOM from "react-dom"
import "./style.css"


const render = ReactDOM.render

const getName = () => ""

let color = "#555"

let containerStyle = {
  color: "white",
  backgroundColor: color,
  padding: "5px"
}

const App = () => (
  <main>
    <div />
    <div style={containerStyle}>
      
      <p>{getName()}</p>
      <ul class="navigation">
        <li class = "navli"><a href="#" title="aller à la section 1">about</a></li>
        < li class="navli"><a href="#" title="aller à la section 2">carrer</a></li>
    
    </ul>
    </div>


  </main>
)

render(<App />, document.getElementById("root"))
