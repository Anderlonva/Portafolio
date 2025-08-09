import React from 'react';
import { DiReact, DiNodejs, DiJava, DiPostgresql, DiMongodb } from 'react-icons/di';
import { SiSpringboot, SiOracle, SiBootstrap, SiMaterialui } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

export const Skills = () => {
  const skills = [
    { name: 'React', icon: <DiReact size={40} />, level: 85 },
    { name: 'Node.js', icon: <DiNodejs size={40} />, level: 80 },
    { name: 'Java', icon: <DiJava size={40} />, level: 75 },
    { name: 'Spring Boot', icon: <SiSpringboot size={40} />, level: 70 },
    { name: 'PostgreSQL', icon: <DiPostgresql size={40} />, level: 85 },
    { name: 'MongoDB', icon: <DiMongodb size={40} />, level: 80 },
    { name: 'Oracle Cloud', icon: <SiOracle size={40} />, level: 70 },
    { name: 'AWS', icon: <FaAws size={40} />, level: 65 },
    { name: 'Bootstrap', icon: <SiBootstrap size={40} />, level: 90 },
    { name: 'Material UI', icon: <SiMaterialui size={40} />, level: 85 },
  ];

  return (
    <section id="skills" className="py-5 skills-section bg-light">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2 className="section-title">Habilidades Técnicas</h2>
          <p className="section-subtitle">Tecnologías que domino y utilizo regularmente</p>
        </div>
        
        <div className="row">
          {skills.map((skill, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
              <div className="skill-card">
                <div className="skill-icon">
                  {skill.icon}
                </div>
                <h5 className="skill-name mt-3">{skill.name}</h5>
                <div className="progress mt-2">
                  <div 
                    className="progress-bar" 
                    role="progressbar" 
                    style={{ width: `${skill.level}%` }}
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {skill.level}%
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};