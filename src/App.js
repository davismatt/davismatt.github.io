import './App.styles.css'
import ExperienceSection from './components/ExperienceSection/ExperienceSection'
import SkillRow from './components/SkillRow/SkillRow'
import resumeData, { formatDates } from './data/resumeData'

const CONTACTS = [
  { icon: 'fa-brands fa-linkedin-in', text: 'linkedin.com/in/davisalanmatthew', href: 'https://www.linkedin.com/in/davisalanmatthew' },
  { icon: 'fa-solid fa-phone', text: '443.742.0355', href: 'tel:+14437420355' },
  { icon: 'fa-solid fa-envelope', text: 'davis.alan.matthew@gmail.com', href: 'mailto:davis.alan.matthew@gmail.com' },
  { icon: 'fa-brands fa-github', text: 'github.com/davismatt', href: 'https://github.com/davismatt' },
  { icon: 'fa-solid fa-location-dot', text: 'San Francisco Bay Area' }
]

const App = () => {
  return (
    <div className="body">
        <div className="content">
            <div className="left_column">
                <div className="header">
                    <div className="header_left_spacer"></div>
                </div>
                <div className="contact_details">
                    {CONTACTS.map(({ icon, text, href }) => (
                      <div className="contact_row" key={text}>
                        <i className={`${icon} contact_icon`}></i>
                        {href
                          ? <a className="contact_text" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{text}</a>
                          : <div className="contact_text">{text}</div>}
                      </div>
                    ))}
                </div>
                <div className="expertise_details">
                    <div className="header_med light">&lt; Technical Skills</div>
                    {resumeData.skillGroups.map(group => <SkillRow key={group.name} {...group} />)}
                </div>
                <div className="education_details">
                    <div className="header_med light">&lt; Education</div>
                    {resumeData.education.map(({ school, detail }) => (
                      <div key={school}>
                        <p className="header_small">{school}</p>
                        <p className="details_light">{detail}</p>
                      </div>
                    ))}
                </div>
            </div>
            <div className="right_column">
                <div className="right_header"></div>
                <div className="right_content">
                    <div className="header_subtext">// Full Stack Engineer</div>
                    <div className="header_big">Matthew Davis</div>
                    <div className="exp_container">
                        <div className="header_med">&lt; About Me</div>
                        <div className="Resume__about">{resumeData.about}</div>
                        <div className="header_med">&lt; Work Experience</div>
                        {resumeData.experiences.map((experience) => (
                          <ExperienceSection
                            key={experience.companyName}
                            startDate={experience.startDate}
                            endDate={experience.endDate}
                            jobTitle={experience.jobTitle}
                            companyName={experience.companyName}
                            companyLocation={experience.companyLocation}
                            companySummary={experience.companySummary}
                            highlights={experience.highlights}
                          />
                        ))}
                        <div className="earlier_experience">
                          <span className="earlier_label">Earlier</span>
                          {resumeData.earlierExperience.map(({ jobTitle, companyName, startDate, endDate }, i) => (
                            <span key={companyName}>
                              {i > 0 && <span className="earlier_sep">·</span>}
                              <span className="nowrap">{`${jobTitle}, ${companyName} (${formatDates(startDate, endDate)})`}</span>
                            </span>
                          ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App
