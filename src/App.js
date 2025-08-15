import './App.styles.css'
import ExperienceSection from './components/ExperienceSection/ExperienceSection'
import SkillRow from './components/SkillRow/SkillRow'
import resumeData from './data/resumeData'

const App = () => {
  return (
    <div className="body">
        <div className="content">
            <div className="left_column">
                <div className="header">
                    <div className="header_left_spacer"></div>
                    <div className="profile_pic">
                        <img src="matt.png"/>
                    </div>
                </div>
                <div className="contact_details">
                    <div className="contact_row">
                        <i className="fa-brands fa-linkedin-in contact_icon"></i><div className="contact_text">linkedin.com/in/davisalanmatthew</div>
                    </div>
                    <div className="contact_row">
                        <i className="fa-solid fa-phone contact_icon"></i><div className="contact_text">443.742.0355</div>
                    </div>
                    <div className="contact_row">
                        <i className="fa-solid fa-envelope contact_icon"></i><div className="contact_text">davis.alan.matthew@gmail.com</div>
                    </div>
                    <div className="contact_row">
                        <i className="fa-brands fa-github contact_icon"></i><div className="contact_text">davismatt</div>
                    </div>
                    <div className="contact_row">
                        <i className="fa-solid fa-location-dot contact_icon"></i><div className="contact_text">San Francisco Bay Area</div>
                    </div>
                </div>
                <div className="expertise_details">
                    <div className="header_med light">&lt; Technical Skills</div>
                    {resumeData.skills.map(skill => <SkillRow {...skill} />)}
                </div>
                <div className="education_details">
                    <div className="header_med light">&lt; Education</div>
                        <p className="header_small">Eastern Technical High School</p>
                        <p className="details_light">Engineering Major</p>
                        <p className="header_small">DePaul University</p>
                        <p className="details_light">College of Computing and Digital Media - Information Technology</p>
                </div>
            </div>
            <div className="right_column">
                <div className="right_header"></div>
                <div className="right_content">
                    <div className="header_subtext">// Full Stack Engineer</div>
                    <div className="header_big">Matthew Davis</div>
                    <div className="exp_container">
                        <div className="header_med">&lt; About Me</div>
                        <div className="Resume__about">Full Stack Engineer with over 15 years of experience in the tech industry. Proven expertise in modernizing legacy platforms and building scalable web applications using Ruby on Rails, TypeScript, and React.</div>
                        <div className="header_med">&lt; Work Experience</div>
                        {resumeData.experiences.map((experience) => (
                          <ExperienceSection
                            startDate={experience.startDate}
                            endDate={experience.endDate}
                            jobTitle={experience.jobTitle}
                            companyName={experience.companyName}
                            companyLocation={experience.companyLocation}
                            companySummary={experience.companySummary}
                            highlights={experience.highlights}
                          />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App
