import { useState } from 'react';
import CircularProgress from './CircularPercent';

const Skills = () => {

  const [percentage, setPercentage] = useState(0);
  const skills = [
    { name: "Javascript", value: 10 },
    { name: "React", value: 20 },
    { name: "Node.js", value: 30 },
    { name: "Typescript", value: 40 },
    { name: "Mongodb", value: 50 },
  ]

  return (
    <section className="px-8 py-12 mx-auto text-center max-w-5xl" id="habilidades">
      <h3 className="font-jost-semi text-txt-primary tracking-[0.3em] uppercase mb-2 text-[20px]">Habilidades</h3>
      <h4 className="font-jost-reg text-txt-secondary mb-8">Estas son mis skills</h4>
      <div className="flex flex-wrap justify-center gap-4 text-[10px] font-jost-semi tracking-wider mb-12">
        {skills.map((skill, index) => (
          <button
            key={skill.name}
            onClick={() => setPercentage(skill.value)}
            className={`px-5 cursor-pointer transition-colors text-sm hover:text-txt-holder ${index !== skills.length - 1 ? "border-r border-white/40 " : ""}`}
          >
            {skill.name.toUpperCase()}
          </button>
        ))}
      </div>
      <CircularProgress porcentaje={percentage} />
    </section>
  )
}

export default Skills
