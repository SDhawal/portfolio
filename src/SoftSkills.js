import React from 'react';
import './index.css'
import {useState} from 'react';
import SoftSkillBody from './softskill-body';
function SoftSkills(){
    const [softskills] = useState([

        {image_source: 'https://github.com/SDhawal/png-image/blob/master/collaborative.png?raw=true',title: "Collaborative",body: 'I love to work in teams adn distribute the work in the team for a project',id:1},
        {image_source: 'https://github.com/SDhawal/png-image/blob/master/creative.png?raw=true',title: 'Creative',body: 'I love to design websites and mobile applications by making sure they are easy to use',id:2},
        {image_source: 'https://github.com/SDhawal/png-image/blob/master/self-motivated.png?raw=true',title: 'Self Motivated',body: 'I believe in the force that pushes me forward to keep going on.',id:3},
        {image_source: 'https://github.com/SDhawal/png-image/blob/master/supportive.png?raw=true',title: 'Supportive',body: 'No one is perfect in all fields, I believe in this and I am always down to learn skills from other people and help them to the fullest whenevery they want',id:4},

    ]);
    return(
        <div>
            <div>
                <h2>Why To Hire Me ?</h2>
            </div>
            <div>
                <SoftSkillBody skillsToPass={softskills}/>
            </div>
        </div>
    )
}
export default SoftSkills;