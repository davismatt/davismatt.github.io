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
    <article className="exp_section">
      <header className="exp_header">
        <h3 className="exp_title">
          <span className="exp_role">{jobTitle}</span>
          <span className="exp_sep" aria-hidden="true">·</span>
          <span className="exp_company">{companyName}</span>
          <span className="exp_sep" aria-hidden="true">·</span>
          <span className="exp_location">{companyLocation}</span>
        </h3>
        <p className="experienceDates">
          <time dateTime={startDate}>{startDate}</time>
          {startDate !== endDate && <> – <time dateTime={endDate}>{endDate}</time></>}
        </p>
      </header>
      <div className="exp_highlights">
          {companySummary && <p>{companySummary}</p>}
          {highlights && highlights.length > 0 && (
            <ul>
              {highlights.map(highlight => <li key={highlight}>{highlight}</li>)}
            </ul>
          )}
      </div>
    </article>
  )
}

export default ExperienceSection
