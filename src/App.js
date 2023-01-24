import React, { useEffect } from "react";
import AllRoutes from "./router/AllRoutes";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedCursor from "react-animated-cursor";
import AOS from "aos";



const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="beny_tm_all_wrap">
      <AnimatedCursor
        innerSize={0}
        outerSize={22}
        color="146, 197, 218"
        outerAlpha={0.8}
        innerScale={0.9}
        outerScale={0}
      />
      <ScrollToTop />
      <AllRoutes />
    </div>
  );
};


export default App;
