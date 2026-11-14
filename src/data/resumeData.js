const DATA = {
  about:
    'Full stack engineer with 10+ years of software experience and roots in technical support and enterprise integrations. ' +
    'Focused on modernizing legacy systems and building fast, reliable web applications with Ruby on Rails, TypeScript, and React. ' +
    'Most recently built AI developer tooling that runs agentic coding workflows in parallel. ' +
    'A customer success background keeps end users, and the teams who support them, at the center of the work.',
  experiences: [
    {
      startDate: '2023',
      endDate: '2026',
      jobTitle: 'Software Engineer III',
      companyName: 'Babylist',
      companyLocation: 'Emeryville, CA',
      highlights: [
        'Shipped customer-facing Sign in with Apple and Google (OAuth), which grew to roughly 40% of all new sign-ups while strengthening account security.',
        'Built Account Hub end to end, the core account page every user relies on to manage their family and track upcoming orders, and led the frontend move to a single-page app architecture with React Router and React Query.',
        'Rebuilt the legacy Guides platform (~1,600 Contentful-driven pages) in modern functional TypeScript with Schema.org structured data, plus a stale-while-revalidate Rails cache that cut cache-miss response times from 8s to under 200ms.',
        'Designed and scaled the price alert pipeline, reliably delivering 100k+ multi-channel notifications per day.',
        'Contributed core updates to the team\'s internal parallelization tooling, including building Conductor, a terminal UI (TUI) that orchestrates multiple agentic Claude instances in parallel across separate git worktrees to speed up AI-assisted development.'
      ]
    },
    {
      startDate: '2021',
      endDate: '2023',
      jobTitle: 'Software Engineer',
      companyName: 'NexHealth',
      companyLocation: 'San Francisco, CA',
      highlights: [
        'Built a full-stack internal tool for managing medical intake forms, automating client onboarding setup and shortening turnaround time.',
        'Implemented multi-factor authentication for internal admin users, tightening access controls to meet enterprise security and compliance requirements.'
      ]
    },
    {
      startDate: '2019',
      endDate: '2021',
      jobTitle: 'Services Engineer',
      companyName: 'Directly',
      companyLocation: 'San Francisco, CA',
      highlights: [
        'Built the core Node.js integration service connecting Salesforce Einstein Bot, Zendesk, and Directly, powering live omnichannel support chat for Ancestry.com\'s entire customer base.',
        'Developed a Node.js/TypeScript microservice linking Microsoft\'s internal CRM (Rave) to the Directly platform, automating secure routing of support tickets to outside experts.'
      ]
    },
    {
      startDate: '2015',
      endDate: '2019',
      jobTitle: 'Customer Success Engineer',
      companyName: 'Capriza',
      companyLocation: 'Palo Alto, CA',
      highlights: [
        'Developed mobile web apps on top of enterprise backends including SAP, PeopleSoft, and SharePoint.',
        'Wrote custom Node.js connectors for client APIs, transforming data across modern REST and legacy SOAP/XML services.',
        'Led the launch of Delta TravelNet, bringing internal travel booking to mobile for 80,000 Delta Air Lines employees.'
      ]
    },
    {
      startDate: '2015',
      endDate: '2015',
      jobTitle: 'Customer Success',
      companyName: 'LaunchPad Central',
      companyLocation: 'San Francisco, CA',
      highlights: [
        'Developed and maintained core features of the company\'s SaaS platform in PHP.'
      ]
    }
  ],
  earlierExperience: [
    { jobTitle: 'Service Technician', companyName: 'Apple', startDate: '2011', endDate: '2015' }
  ],
  skillGroups: [
    {
      name: 'Languages',
      skills: ['Ruby', 'TypeScript', 'JavaScript', 'SQL', 'HTML/CSS', 'PHP', 'Python']
    },
    {
      name: 'Frameworks',
      skills: ['Ruby on Rails', 'React', 'React Router', 'React Query', 'Node.js']
    },
    {
      name: 'APIs & Integrations',
      skills: ['REST', 'SOAP/XML', 'OAuth / SSO', 'Salesforce', 'Zendesk', 'AppsFlyer', 'Contentful']
    },
    {
      name: 'AI & Tools',
      skills: ['Claude / agentic workflows', 'Git', 'JIRA']
    }
  ],
  education: [
    {
      school: 'DePaul University',
      detail: 'College of Computing and Digital Media - Information Technology'
    }
  ]
}

export const formatDates = (startDate, endDate) =>
  startDate === endDate ? startDate : `${startDate} – ${endDate}`

export default DATA
