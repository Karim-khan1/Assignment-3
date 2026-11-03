import Management from "./features/Management.jsx";
import {
    Routes,
    Route
} from "react-router-dom";


import Layout from "./components/Layout.jsx";
import ScrollToTop from "./components/ScrolltoTop.jsx";


import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Education from "./pages/Education.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import PocketDimension from "./pages/Pocket-Dimension.jsx";
import PersonalWebsite from "./pages/Personal-Website.jsx";


function App() {

    return (

        <>

            <ScrollToTop />


            <Routes>

                <Route element={<Layout />}>


                    <Route
                        path="/"
                        element={<Home />}
                    />


                    <Route
                        path="/about"
                        element={<About />}
                    />


                    <Route
                        path="/projects"
                        element={<Projects />}
                    />


                    <Route
                        path="/education"
                        element={<Education />}
                    />


                    <Route
                        path="/services"
                        element={<Services />}
                    />


                    <Route path="/manage" element={<Management />} />

                    <Route
                        path="/contact"
                        element={<Contact />}
                    />


                    <Route
                        path="/projects/pocket-dimension"
                        element={<PocketDimension />}
                    />


                    <Route
                        path="/projects/personal-website"
                        element={<PersonalWebsite />}
                    />


                </Route>


            </Routes>

        </>

    );

}


export default App;