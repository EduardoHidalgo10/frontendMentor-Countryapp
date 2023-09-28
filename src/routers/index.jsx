import { BrowserRouter,Routes,Route } from "react-router-dom";
import { LandingPage } from "../components/landingPage";
import { CountryDetails } from "../components/details/countrydetails";


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path=":name" element={<CountryDetails/>}/>
            </Routes>
    
        </BrowserRouter>

    )
    
}