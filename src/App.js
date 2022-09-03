import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import MainContent from './components/MainContent.js';
import AdSideBar from './components/AdSideBar.js';
import ContactForm from './components/ContactForm.js';
import Side from './components/Side.js';

function App() {
  return (
    <>
    <NavBar />
    <div className="grid-container">
      <main><MainContent 
      imageURL='https://imgs.search.brave.com/aV2uTvC9WSKbu98SsENCylL1t9SotzedIfI95enO7pw/rs:fit:1200:960:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNkLzA1/L2U4LzNkMDVlOGIw/YTJiNGRiNWFkYzE2/ZTA3ZGQyOWJiYjdi/LmpwZw'
      title='Travel'
      description='The Best Luxury Hotels to stay at while traveling in Europe'
      author='By Nam Doan'
      /></main>
      <div id='ad'><AdSideBar 
      imageURL='https://imgs.search.brave.com/d2oR9F9P13xnGONihWMeIsXSAeV5CrexjSaPPCpfXDY/rs:fit:514:1200:1/g:ce/aHR0cHM6Ly93ZWFk/Mi05NTdiLmt4Y2Ru/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/d2Vla2x5YWRzL2Rv/bGxhci1nZW5lcmFs/L2RvbGxhci1nZW5l/cmFsLWFkLWp1bC0x/OS0yMDIwLzcuanBn/PzA3T2N0MDY'/>
      </div>
      <div id='blog-1'><Side
        imageURL='https://imgs.search.brave.com/qlz0Au22_bjOUzXPakOw4Q9Ve5aX5eq0QZBioCnH7ZE/rs:fit:316:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC53/MTI3MXVuSEZTaTZr/bEU1ekxDV1h3SGFM/SCZwaWQ9QXBp'
        title='Fashion'
        description='Behind the Scenes: Louis Vuitton Virgil Abloh Fashion Show'
        author='By Nam Doan' 
        />
        </div>
      <div id='blog-2'><Side 
        imageURL='https://imgs.search.brave.com/pT1adxxP57K8i__b5v5jZ5w3lkrvgP91nMPDi5gx4Ps/rs:fit:558:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5J/OEdEM1dQbHZuaVFz/VzlnYWlEZzNnSGFH/UyZwaWQ9QXBp'
        title='Lifestyle'
        description='The Best Exercises to do to lose Fat and gain Muscle'
        author='By Nam Doan'
        />
        </div>
      <div id='blog-3'><Side
      imageURL='https://imgs.search.brave.com/jRlPKSPy1B3cRlt1kjQItGLOzgXyi7wgtw6dVTbgW5U/rs:fit:542:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC50/Q2o3aGZHY0NXUF9T/NkNwem9QMmN3SGFH/ZSZwaWQ9QXBp'
      title='Travel'
      description='The Best Places to Travel to this Summer'
      author='By Nam Doan'
      />
      </div>
      <div id='blog-4'><Side
      imageURL='https://imgs.search.brave.com/8X9YRoNGWmLQt44hxh3x0yrWFLGW91bLfRCF1u_7Zxc/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/aXVGT0J0VmM1cVJw/XzhaMnlOeUxRSGFF/OCZwaWQ9QXBp'
      title='Business'
      description='How to start a Successful Online Business in 2022'
      author='By Nam Doan'
      />
      </div>
    </div>
    <ContactForm />
    </>
  );
}

export default App;
