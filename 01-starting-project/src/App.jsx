import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import { CORE_CONCEPTS } from "./data";
import TabButton from "./components/Tab/TabButton";
import TabContent from "./components/Tab/TabContent";
import { useState } from "react";


function App() {
  const [activeTabIndex, setActiveTabIndex] = useState(Object.keys(CORE_CONCEPTS)[0])

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <div id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((concept) => <CoreConcept key={concept.title} {...concept} />)}
          </ul>
        </div>

        <div id="examples">
          <menu>
            {CORE_CONCEPTS.map(({ title }, index) => <TabButton key={index} handleClick={() => setActiveTabIndex(index)} active={activeTabIndex === index}>{title}</TabButton>)}
          </menu>
          <TabContent concept={CORE_CONCEPTS[activeTabIndex]} />
        </div>
      </main>
    </div>
  );
}

export default App;
