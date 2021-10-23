
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Work from './components/work/Work';
import Testimonial from './components/testimonial/Testimonial';
import Contact from './components/contact/Contact';
import './app.scss'
import { useState } from 'react';

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
  <div className="app">  
    <Topbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
    {/* Section */}
    <div className="sections">
      <Intro/>
      <Portfolio/>
      <Work/>
      <Testimonial/>
      <Contact/>
    </div>
  </div>
  );
}

export default App;
