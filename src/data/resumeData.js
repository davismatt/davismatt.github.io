const DATA = {
  experiences: [
    {
      startDate: '2023',
      endDate: '2026',
      jobTitle: 'Software Engineer III',
      companyName: 'Babylist',
      companyLocation: 'Emeryville, CA',
      highlights: [
        'Architected and deployed customer-facing SSO integrations (Apple and Google OAuth), streamlining user authentication and enhancing platform security.',
        'Led the architectural overhaul of the legacy Guides platform, migrating code to modern, functional TypeScript and implementing a stale-while-revalidate caching layer in the Rails backend to drastically reduce latency.',
        'Migrated web-to-app attribution linking from Firebase to AppsFlyer, successfully implementing deferred deep linking support across the mobile ecosystem.',
        'Designed and scaled a high-throughput price alert infrastructure, managing the reliable delivery of 100k+ multi-channel notifications daily.'
      ]
    },
    {
      startDate: '2021',
      endDate: '2023',
      jobTitle: 'Software Engineer',
      companyName: 'NexHealth',
      companyLocation: 'San Francisco, CA',
      highlights: [
        'Engineered a full-stack medical form internal management tool, automating client onboarding setups and significantly reducing operational turnaround time.',
        'Architected and implemented internal multi-factor authentication (MFA) for administrative users, tightening platform access controls to meet enterprise-level security and compliance standards.',
        'Developed and executed targeted Ruby Rake tasks for complex, backend database migrations and automated data-state corrections, ensuring platform consistency.'
      ]
    },
    {
      startDate: '2019',
      endDate: '2021',
      jobTitle: 'Services Engineer',
      companyName: 'Directly',
      companyLocation: 'San Francisco, CA',
      highlights: [
        'Engineered a core Node.js integration service orchestrating data between Salesforce EinsteinBot, Zendesk, and Directly to power live omni-channel support chat for the entire Ancestry.com customer base.',
        'Developed a high-reliability Node.js/TypeScript microservice linking Microsoft\'s internal CRM (Rave) with the Directly platform, automating secure ticket routing to external network experts.'
      ]
    },
    {
      startDate: '2015',
      endDate: '2019',
      jobTitle: 'Customer Success Engineer',
      companyName: 'Capriza',
      companyLocation: 'Palo Alto, CA',
      highlights: [
        'Developed web-based mobile applications that integrated seamlessly with heavy enterprise backends, including SAP, PeopleSoft, and SharePoint.',
        'Built custom Node.js connectors to interface with diverse client APIs, managing data transformation across both modern RESTful and legacy SOAP/XML protocols.',
        'Led the deployment and launch of the Delta TravelNet application, successfully mobilizing the internal travel booking workflows for 80,000 Delta Airlines employees.',
      ]
    },
    {
      startDate: '2015',
      endDate: '2015',
      jobTitle: 'Customer Success',
      companyName: 'LaunchPad Central',
      companyLocation: 'San Francisco, CA',
      highlights: [
        'Contributed to full-stack PHP development utilizing the Symfony framework, maintaining and upgrading core features for the existing SaaS platform.'
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
