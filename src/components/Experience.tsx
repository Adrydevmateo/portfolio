import "@css/experience.css";
import experienceList from "@data/experience";

export default function Experience() {
  return (
    <section>
      <h2>Experience</h2>
      {experienceList.map((experience) => (
        <div className="experience" key={experience.id}>
          <h3>
            {experience.position} @ <span>{experience.company}</span>
          </h3>
          <p>{experience.country}</p>
          <div>
            <h4>Summary:</h4>
            <ul>
              <li>{experience.summary}</li>
            </ul>
          </div>
          <div>
            <h4>Responsabilities:</h4>
            <ul>
              {experience.responsabilities.map((responsability) => (
                <li key={responsability}>{responsability}</li>
              ))}
            </ul>
          </div>
          <div className="experience__technologies">
            <h4>Technologies:</h4>
            <ul>
              {experience.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
