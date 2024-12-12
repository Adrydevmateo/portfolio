import skillList from "@/data/skill";

export default function Skills() {
  return (
    <section>
      <h2>Skills</h2>
      <div>
        {skillList.map((skill) => (
          <div className="skill" key={skill.name}>
            {<skill.icon />}
            <p className="skill__name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
