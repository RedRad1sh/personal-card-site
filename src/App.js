import React, { useState } from 'react';

import './App.less';
import { Header } from "./components/header/header"
import { ReactNebula } from "@flodlc/nebula";
import { nebulaConfig } from './config/nebula-config';
import LandingPage from './components/landing/landing-page';
import { MusicPage } from './components/music/music-page';
import { SkillTreePage } from './components/skill-tree/skill-tree-page';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {

  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(v => !v);

  const location = useLocation();
  const isHome = ['/', ''].includes(location.pathname);
  const showHeader = isHome ? visible : true;

  return (
    <div className="App">
      <div style={{ "position": "fixed", "width": "100%", "height": "100%" }} >
          <ReactNebula config={nebulaConfig} />
      </div>
      <Header visible={showHeader} toggleVisibility={toggleVisibility} isHome={isHome}></Header>
      <Routes>
        <Route index element={<LandingPage visible={visible} />} />
        {/* <Route path="askme" element={<AskMePage />} /> */}
        <Route path="music" element={<MusicPage />} />
        <Route path="skill-tree" element={<SkillTreePage />} />
      </Routes>
      <footer>
        <p>RedRadish © 2025</p>
      </footer>
    </div>
  );
}

export default App;
