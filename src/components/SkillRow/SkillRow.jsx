const SkillRow = ({
  name,
  skills
}) => {
  return (
    <div className="skill_group">
      <div className="skill_group_name">{name}</div>
      <div className="skill_group_list">
        {skills.map((skill, i) => (
          <span key={skill}>
            <span className="nowrap">{skill}{i < skills.length - 1 ? ' ·' : ''}</span>
            {i < skills.length - 1 ? ' ' : ''}
          </span>
        ))}
      </div>
    </div>
  )
}

export default SkillRow
