import "./App.css";
import SplitText from "./components/SplitText";
import Dock from "./components/Dock";
import { IoIosHome } from "react-icons/io";
import { FaDatabase, FaUserCircle } from "react-icons/fa";
import { IoAnalytics } from "react-icons/io5";
import { introToData } from "./content/Intro";
import { dataCuration, dataCitation } from "./content/DataCuration"

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

const items = [
  {
    icon: <IoIosHome size={18} />,
    label: "Home",
    onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
  },
  {
    icon: <FaUserCircle size={18} />,
    label: "Contributions",
    onClick: () =>
      document
        .getElementById("contributions")
        ?.scrollIntoView({ behavior: "smooth", block: "start" }),
  },
  {
    icon: <FaDatabase size={18} />,
    label: "Data",
    onClick: () =>
      document
        .getElementById("data")
        ?.scrollIntoView({ behavior: "smooth", block: "start" }),
  },
  {
    icon: <IoAnalytics size={18} />,
    label: "Analysis",
    onClick: () =>
      document
        .getElementById("analysis")
        ?.scrollIntoView({ behavior: "smooth", block: "start" }),
  },
];

function App() {
  return (
    <>
      {/* Hero section */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center pb-32 bg-neutral-200 text-black"
      >
        <h1>
          <SplitText
            text="NFL Prediction"
            className="text-5xl md:text-7xl font-bold text-center"
            delay={100}
            duration={0.5}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </h1>
        <h2 className="mt-2 text-2xl">Fall 2025 Data Science Project</h2>
        <h3 className="mt-2 max-w-md text-grey-900 text-center">
          Andrew Weil, Corey Gross, Kai Fosshage, Ben Scrivanich, Allison
          Bejeck, Stephen Griffin
        </h3>
      </section>

      {/* Below section with slightly different color */}
      <section
        id="contributions"
        className="min-h-screen flex items-center justify-center bg-neutral-200 text-grey-700 pb-32"
      >
        <div className="max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Contributions</h2>
          <p className="text-grey-700">This is the contributions section</p>
        </div>
      </section>

      <section
        id="data"
        className="min-h-screen flex items-center justify-center bg-neutral-200 text-grey-700 pb-32"
      >
        <div className="max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Data</h2>
          <p className="text-grey-700">{introToData}</p>
          <br></br>
          <p className="text-grey-700">{dataCuration}</p>
          <br></br>
          <p>{dataCitation}</p>
          <a href="https://nflverse.com">nflverse.com</a>
        </div>
      </section>

      <section
        id="analysis"
        className="min-h-screen flex items-center justify-center bg-neutral-200 text-grey-700 pb-32"
      >
        <div className="max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Analysis</h2>
          <p className="text-grey-700">This is the analytics section</p>
        </div>
      </section>

      <Dock
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </>
  );
}

export default App;
