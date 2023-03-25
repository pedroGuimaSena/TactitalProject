import React from "react";
import '../App.css';
import './HeroSection.css';
import './pages/Home';

function HeroSection() {
    return (
        <div className='hero-container'>
                <iframe
                 width="1148" 
                 height="564" 
                 src="https://www.youtube.com/embed/xVOwcb3cONs" 
                 title="Disciplina - Bruce Lee" 
                 frameborder="0" 
                 allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                 allowfullscreen>
                </iframe>
        </div>
    );
}

export default HeroSection;