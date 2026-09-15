import './App.css'
import {useState} from "react";
import HelloWorld from "./components/HelloWorld.tsx";

function App() {
  const [counter, setCounter] = useState<number>(0);
  return(
      <>
          <section id="id-center">
              <div>
                  {counter > 3 ?
                      <div>Important things</div>
                      :
                      <div>Some things</div>}
              </div>

              <HelloWorld name={counter.toString()}/>
              <button onClick={() => setCounter(counter + 1)}>Count ++</button>
              <button onClick={() => setCounter(counter - 1)}>Count --</button>

          </section>
      </>
  )
}

export default App