import Navbar from "./BoardingPlans/Navbar";
import Hero from "./BoardingPlans/Hero";
import SecondPlan from "./BoardingPlans/SecondPlan";
import Third from "./BoardingPlans/ThirdPlan";
import Forth from "./BoardingPlans/Forth";
import FithedPlan from "./BoardingPlans/FithedPlan";
import SixPlan from "./BoardingPlans/SixPlan";
import Seven from "./BoardingPlans/Seven";
import EightPlan from "./BoardingPlans/EightPlan";
import FooterPlan from "./BoardingPlans/FooterPlan";
import LonBar from "./BoardingPlans/LonBar";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <div>
        <Navbar />
        <Hero />
        <SecondPlan />
        <Third />
        <Forth />
        <FithedPlan />
        <SixPlan />
        <Seven />
        <EightPlan />
       
      </div>
    </>
  );
}

export default App;
