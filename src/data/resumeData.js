const DATA = {
  experiences: [
    {
      startDate: '2023',
      endDate: '2025',
      jobTitle: 'Software Engineer III',
      companyName: 'Babylist',
      companyLocation: 'Emeryville, CA',
      companySummary: 'Babylist is a universal baby registry and e-commerce store for expecting parents. The platform also offers price comparisons, expert guides, and a mobile app to help families plan and prepare for a new arrival.',
      highlights: [
        'Built customer-facing SSO integration enabling users to sign in with Apple or Google',
        'Refactored legacy Guides platform to modern, functional TypeScript along with a new stale-while-revalidate architecture within the Rails backend.',
        'Migrated web-to-app attribution linking from Firebase to AppsFlyer and implemented deferred deep linking support.',
        'Implementation of a scalable and performant price alert infrastructure, delivering over 100k price change notifications through multiple channels per day.'
      ]
    },
    {
      startDate: '2021',
      endDate: '2023',
      jobTitle: 'Software Engineer',
      companyName: 'NexHealth',
      companyLocation: 'San Francisco, CA',
      companySummary: 'NexHealth provides a modern patient and provider experience for online booking. My focus was full-stack development of new application features as well as maintenance and support through bug fixes and rake tasks.',
      highlights: [
        'Developed internal tooling such as medical form setup management to reduce onboarding turnaround.',
        'Design and implementation of multi-factor authentication in SaaS application, leading to new deals with security-focused clients.'
      ]
    },
    {
      startDate: '2019',
      endDate: '2021',
      jobTitle: 'Services Engineer',
      companyName: 'Directly',
      companyLocation: 'San Francisco, CA',
      companySummary: 'Directly was a leader in the virtual assistant industry, providing a powerful and human-oriented approach to support automation using a combination of advanced AI and gig-powered answers through an Expert network.',
      highlights: [
        'Built node service integrating Salesforce EinsteinBot, Zendesk, and Directly to power Ancestry.com live support chat for all Ancestry customers.',
        'Built Node.js/Typescript service powering Directly integration with Microsoft\'s internal CRM Rave allowing Micrsoft to outsource service tickets to Directly Experts.'
      ]
    },
    {
      startDate: '2015',
      endDate: '2019',
      jobTitle: 'Customer Success Engineer',
      companyName: 'Capriza',
      companyLocation: 'Palo Alto, CA',
      highlights: [
        'Development of web-based mobile applications and integration with customer backend systems such as SAP, PeopleSoft, and Sharepoint.',
        'Development of Node.js-based connectors for integrating with customer APIs including REST-based and SOAP/XML.',
        'Development and launch of the Delta TravelNet app, mobilizing the internal booking process for 80,000 Delta Airlines employees.',
      ]
    },
    {
      startDate: '2015',
      endDate: '2015',
      jobTitle: 'Customer Success',
      companyName: 'LaunchPad Central',
      companyLocation: 'San Francisco, CA',
      highlights: [
        'Full-stack PHP development using Symfony framework; maintaining and upgrading existing SaaS platform.',
        'SQL database management of platform data and user metadata.',
      ]
    },
    {
      startDate: '2011',
      endDate: '2015',
      jobTitle: 'Service Technician',
      companyName: 'Apple',
      companyLocation: 'Chicago, IL',
    },
    {
      startDate: '2009',
      endDate: '2011',
      jobTitle: 'Web Developer',
      companyName: 'Wood Floors Plus Inc',
      companyLocation: 'Baltimore, MD',
    }
  ],
  skills: [
    {
      name: 'Ruby on Rails',
      confidence: 95
    },
    {
      name: 'Javascript',
      confidence: 85
    },
    {
      name: 'TypeScript',
      confidence: 85
    },
    {
      name: 'SQL',
      confidence: 75
    },
    {
      name: 'PHP',
      confidence: 40
    },
    {
      name: 'Python',
      confidence: 30
    },
    {
      name: 'HTML/CSS',
      confidence: 80
    },
    {
      name: 'React',
      confidence: 85
    },
    {
      name: 'Angular',
      confidence: 20
    },
    {
      name: 'JIRA',
      confidence: 70
    },
    {
      name: 'Git',
      confidence: 70
    },
    {
      name: 'Salesforce',
      confidence: 50
    }
  ]
}

export default DATA
