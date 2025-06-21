import React from 'react';

import './App.less';
import { Header } from "./components/header/header"
import { ReactNebula } from "@flodlc/nebula";
import { nebulaConfig } from './config/nebula-config';
import { LandingPage } from './components/landing/landing-page';
import { AskMePage } from './components/askme/askme-page';
import { MusicPage } from './components/music/music-page';
import { SkillTreePage } from './components/skill-tree/skill-tree-page';
import { Routes, Route } from 'react-router-dom';
import { SetStateAction } from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { visible: false }
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

 toggleVisibility() {
    this.setState(prevState => ({ visible: !prevState.visible }));
  }

  render() {
    const visible = this.state.visible

    return (
      <div className="App">
        <div style={{ "position": "fixed", "width": "100%", "height": "100%" }} >
          <ReactNebula config={nebulaConfig} />
        </div>
        <Header visible={visible} toggleVisibility={this.toggleVisibility}></Header>
        <Routes>
          <Route index element={<LandingPage visible={visible} />} />
          <Route path="askme" element={<AskMePage />} />
          <Route path="music" element={<MusicPage />} />
          <Route path="skill-tree" element={<SkillTreePage />} />
        </Routes>
        <footer>
          <p>RedRadish © 2025</p>
        </footer>
      </div>
    );
  }
}

export default App;
