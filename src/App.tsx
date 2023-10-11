import React from 'react';
import Home from './components/pages/Home';
import Header from './components/sections/Navigation/Header';
import Footer from './components/sections/Footer';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import IndustryDirectory from './components/pages/IndustryDirectory';
import RequestADemo from './components/pages/RequestADemo';
import Approve from './components/pages/Approve';
import Partnerships from './components/pages/Partnerships';
import Definitions from './components/pages/Definitions';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TermsAndConditions from './components/pages/TermsAndConditions';
import Report from './components/pages/Report';
import Monitor from './components/pages/Monitor';
import LetsChat from './components/sections/LetsChat';
import ScrollToTop from './components/sections/Navigation/ScrollToTop';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/request-a-demo" element={<RequestADemo />}/>
          <Route path="/directory" element={<IndustryDirectory />}/>
          <Route path="/approve" element={<Approve />}/>
          <Route path="/monitor" element={<Monitor />}/>
          <Route path="/report" element={<Report />}/>
          <Route path="/partnerships" element={<Partnerships />}/>
          <Route path="/definitions" element={<Definitions />}/>
          <Route path="/privacy-policy" element={<PrivacyPolicy />}/>
          <Route path="/terms-conditions" element={<TermsAndConditions />}/>
      </Routes>
      <Footer />
      <LetsChat />
      <ScrollToTop />
    </div>
  );
}

export default App;
