import { Canvas } from "@react-three/fiber";

import Experience from "./components/experience";

function App() {
  return (
    <div className="app">
      <Canvas>
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;
