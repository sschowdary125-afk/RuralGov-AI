import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Schemes from "./components/Schemes";

import EligibilityForm from "./pages/EligibilityForm";
import ResultsDashboard from "./pages/ResultsDashboard";

import SchemesPage from "./pages/pages";
import HowItWorks from "./pages/HowItWorks";
import Contact from "./pages/Contact";


import Footer from "./components/Footer";


function HomePage() {

return (

<>

<Navbar />

<Hero />

<Schemes />

<Footer />

</>

);

}



function App(){


return(

<Routes>


<Route
path="/"
element={<HomePage />}
/>



<Route
path="/schemes"
element={<SchemesPage />}
/>



<Route
path="/how-it-works"
element={<HowItWorks />}
/>



<Route
path="/contact"
element={<Contact />}
/>



<Route
path="/eligibility/:schemeName"
element={<EligibilityForm />}
/>



<Route
path="/results"
element={<ResultsDashboard />}
/>


</Routes>


);


}


export default App;