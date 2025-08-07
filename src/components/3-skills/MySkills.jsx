import { skills } from "./skills";
import "./skills.css";

const MySkills = () => {
  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    const { category } = skill;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {});

  return (
    <section className="technical-skills">
      <h1 className="title">Mes compétences</h1>
      {Object.entries(groupedSkills).map(([category, skillsInCategory]) => (
        <div key={category} className="skill-category">
          <h2 className="category-title">{category}</h2>
          <div className="skills-grid">
            {skillsInCategory.map((skill, index) => (
              <div className="skill-card" key={index}>
                <div
                  className="skill-icon-container"
                  style={{ position: 'relative' }}
                >
                  <i className={`${skill.className} skill-icon skill-icon-bg`}></i>
                  <i
                    className={`${skill.className} skill-icon skill-icon-colored`}
                    style={{
                      color: skill.color,
                      '--skill-level': `${100 - parseInt(skill.level)}%`,
                    }}
                  ></i>
                </div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default MySkills;
