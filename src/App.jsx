import React from 'react'
import Navigator from './components/Navigator';
import SkillCard from './components/Skillcard';
import "./style.css"; 
function App() {

  return (
    <div className="app">
      <SkillCard 
        icon= "./assets/icons/js.svg"
        icon2="./assets/icons/js.svg"
        name="JAVASCRIPT & TYPESCRIPT" 
        description="Building consistent and scalable user interfaces quickly with powerful utility classes and component-based frameworks."
        /> 

    </div>
  )
}

export default App;

