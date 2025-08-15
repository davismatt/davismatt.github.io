const ExperienceSection = ({
  startDate,
  endDate,
  jobTitle,
  companyName,
  companyLocation,
  companySummary,
  highlights
}) => {
  return (
    <div className="exp_section">
      <div className="exp_header">
        <div>{`${jobTitle}   //   ${companyName} - ${companyLocation}`}</div>
        <div className="experienceDates">{startDate} - {endDate}</div>
      </div>
      <div className="exp_highlights">
          {companySummary && <p>{companySummary}</p>}
          {highlights && highlights.length > 0 && (
            <ul>
              {highlights.map(highlight => <li>{highlight}</li>)}
            </ul>
          )}
      </div>
    </div>
  )
}

export default ExperienceSection
