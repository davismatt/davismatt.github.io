const SkillRow = ({
  name,
  confidence
}) => {
  return (
    <div className="skill_row">
      <div className="skill_text">{name}</div>
      <div className="skill_bar">
        <div className="skill_fill" style={{width: `${confidence}%`}}></div>
      </div>
    </div>
  )
}

export default SkillRow
