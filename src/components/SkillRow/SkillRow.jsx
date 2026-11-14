const SkillRow = ({
  name,
  skills
}) => {
  return (
    <div className="skill_group">
      <h3 className="skill_group_name">{name}</h3>
      <ul className="skill_group_list">
        {skills.map(skill => <li key={skill}>{skill}</li>)}
      </ul>
    </div>
  )
}

export default SkillRow
