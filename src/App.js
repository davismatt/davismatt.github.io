import './App.styles.css'
import ExperienceSection from './components/ExperienceSection/ExperienceSection'
import SectionHeading from './components/SectionHeading/SectionHeading'
import SkillRow from './components/SkillRow/SkillRow'
import resumeData, { formatDates } from './data/resumeData'

const PDF_PATH = '/Matthew-Davis-Resume.pdf'

const CONTACTS = [
  { icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn', text: 'linkedin.com/in/matthewalandavis', href: 'https://www.linkedin.com/in/matthewalandavis' },
  { icon: 'fa-solid fa-phone', label: 'Phone', text: '443.742.0355', href: 'tel:+14437420355' },
  { icon: 'fa-solid fa-envelope', label: 'Email', text: 'davis.alan.matthew@gmail.com', href: 'mailto:davis.alan.matthew@gmail.com' },
  { icon: 'fa-brands fa-github', label: 'GitHub', text: 'github.com/davismatt', href: 'https://github.com/davismatt' },
  { icon: 'fa-solid fa-location-dot', label: 'Location', text: 'San Francisco Bay Area' }
]

const App = () => {
  return (
    <>
      <a className="pdf_button no-print" href={PDF_PATH} download>
        <i className="fa-solid fa-file-arrow-down" aria-hidden="true"></i> Download PDF
      </a>
      <main className="body">
        <div className="content">
          <aside className="left_column">
            <address className="contact_details">
              <ul>
                {CONTACTS.map(({ icon, label, text, href }) => (
                  <li className="contact_row" key={text}>
                    <i className={`${icon} contact_icon`} aria-hidden="true"></i>
                    <span className="visually_hidden">{label}: </span>
                    {href
                      ? <a className="contact_text" href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}>{text}</a>
                      : <span className="contact_text">{text}</span>}
                  </li>
                ))}
              </ul>
            </address>
            <section className="expertise_details">
              <SectionHeading light>Technical Skills</SectionHeading>
              {resumeData.skillGroups.map(group => <SkillRow key={group.name} {...group} />)}
            </section>
            <section className="education_details">
              <SectionHeading light>Education</SectionHeading>
              {resumeData.education.map(({ school, detail }) => (
                <div key={school}>
                  <h3 className="header_small">{school}</h3>
                  <p className="details_light">{detail}</p>
                </div>
              ))}
            </section>
          </aside>
          <div className="right_column">
            <div className="right_header" aria-hidden="true"></div>
            <div className="right_content">
              <header className="name_header">
                <p className="header_subtext">Full Stack Engineer</p>
                <h1 className="header_big">Matthew Davis</h1>
              </header>
              <section className="about_section">
                <SectionHeading>About Me</SectionHeading>
                <p className="Resume__about">{resumeData.about}</p>
              </section>
              <section className="experience_section">
                <SectionHeading>Work Experience</SectionHeading>
                {resumeData.experiences.map((experience) => (
                  <ExperienceSection key={experience.companyName} {...experience} />
                ))}
                <p className="earlier_experience">
                  <span className="earlier_label">Earlier</span>
                  {resumeData.earlierExperience.map(({ jobTitle, companyName, startDate, endDate }) => (
                    <span className="earlier_item" key={companyName}>
                      {`${jobTitle}, ${companyName} (${formatDates(startDate, endDate)})`}
                    </span>
                  ))}
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
