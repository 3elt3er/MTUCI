// Компонент маршрутизации
import {useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import MainPage from "../pages/MainPage.jsx";
import SubmissionPage from "../pages/SubmissionPage.jsx";
import BudgetKvot from "../pages/BudgetKvot.jsx";
import PaidTraining from "../pages/PaidTraining.jsx";
import IndividualAchievements from "../pages/IndividualAchievements.jsx";
import Quotas from "../pages/Quotas.jsx";
import Activities from "../pages/Activities.jsx";
import Hostel from "../pages/Hostel.jsx";
import Deferment from "../pages/Deferment.jsx";
import Numbers from "../pages/Numbers.jsx";
import FacultetIt from "../pages/facultets/FacultetIt.jsx";
import FacultetKiib from "../pages/facultets/FacultetKiib.jsx";
import FacultetRit from "../pages/facultets/FacultetRit.jsx";
import FacultetSis from "../pages/facultets/FacultetSis.jsx";
import FacultetCimk from "../pages/facultets/FacultetCimk.jsx";
import FacultetZaoch from "../pages/facultets/FacultetZaoch.jsx";
import FacultetFastZaoch from "../pages/facultets/FacultetFastZaoch.jsx";
import FacultetOchZaoch from "../pages/facultets/FacultetOchZaoch.jsx";
import MagaOch from "../pages/facultets/MagaOch.jsx";
import MagaZaoch from "../pages/facultets/MagaZaoch.jsx";
import MagaOchZaoch from "../pages/facultets/MagaOchZaoch.jsx";
import Scripts from "../pages/Scripts.jsx";
import Verification from "../pages/Verification.jsx";
import DovuzEge from "../pages/dovuz/DovuzEge.jsx";
import DovuzOge from "../pages/dovuz/DovuzOge.jsx";
import DovuzVi from "../pages/dovuz/DovuzVi.jsx";

const AppRouter = () => {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  return (
    <Router basename='/MTUCI/'>
      <ScrollToTop/>
      <div className="App">
        <Routes>
          <Route path="/*" element={<MainPage/>}/>
          <Route path="/submission" element={<SubmissionPage/>}/>
          <Route path="/budget-bvi" element={<BudgetKvot/>}/>
          <Route path="/paid-training" element={<PaidTraining/>}/>
          <Route path="/individual-achievements" element={<IndividualAchievements/>}/>
          <Route path="/quotas" element={<Quotas/>}/>
          <Route path="/activities" element={<Activities/>}/>
          <Route path="/hostel" element={<Hostel/>}/>
          <Route path="/deferment" element={<Deferment/>}/>
          <Route path="/numbers" element={<Numbers/>}/>
          <Route path="/facultet-it" element={<FacultetIt/>}/>
          <Route path="/facultet-kiib" element={<FacultetKiib/>}/>
          <Route path="/facultet-rit" element={<FacultetRit/>}/>
          <Route path="/facultet-sis" element={<FacultetSis/>}/>
          <Route path="/facultet-cimk" element={<FacultetCimk/>}/>
          <Route path="/facultet-zaochniy" element={<FacultetZaoch/>}/>
          <Route path="/facultet-fast-zaochniy" element={<FacultetFastZaoch/>}/>
          <Route path="/facultet-ochno-zaochniy" element={<FacultetOchZaoch/>}/>
          <Route path="/facultet-magistratura-ochno" element={<MagaOch/>}/>
          <Route path="/facultet-magistratura-zaochno" element={<MagaZaoch/>}/>
          <Route path="/facultet-magistratura-ochno-zaochno" element={<MagaOchZaoch/>}/>
          <Route path="/scripts" element={<Scripts/>}/>
          <Route path="/verification" element={<Verification/>}/>
          <Route path="/dovuz-ege" element={<DovuzEge/>}/>
          <Route path="/dovuz-oge" element={<DovuzOge/>}/>
          <Route path="/dovuz-vi" element={<DovuzVi/>}/>
          {/*<Route path="/*" element={<Error/>}/>*/}
    </Routes>
      </div>
</Router>
)
  ;
};

export default AppRouter;
