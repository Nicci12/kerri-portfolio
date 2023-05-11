import React, { useEffect } from "react";
import AllRoutes from "./router/AllRoutes";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";



const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="beny_tm_all_wrap">
      <ScrollToTop />
      <AllRoutes />
    </div>
  );
};


export default App;
