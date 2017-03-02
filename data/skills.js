module.exports = {
  pageData: {
    title: 'Skills',
    sortByText: 'By',
    skillsByOptions: [
      {
        value: 'category',
        text: 'Category'
      },
      {
        value: 'expertise',
        text: 'Expertise Level'
      }
    ],
    skillsByDefaultValue: 'category'
  },
  data: {
    options: {
      category: [
        {
          value: 'frontend',
          text: 'Front-End'
        },
        {
          value: 'backend',
          text: 'Back-End'
        },
        {
          value: 'agile',
          text: 'Agile'
        },
        {
          value: 'social',
          text: 'Social'
        },
        {
          value: 'architecture',
          text: 'Architecture'
        },
        {
          value: 'databases',
          text: 'Databases'
        },
        {
          value: 'devops',
          text: 'DevOps'
        }
      ],
      expertise: [
        {
          value: 'expert',
          text: 'Expert'
        },
        {
          value: 'proficient',
          text: 'Proficient'
        },
        {
          value: 'intermediate',
          text: 'Intermediate'
        },
        {
          value: 'learning',
          text: 'Currently Learning'
        }
      ]
    },
    items: [
      {
        id: 1,
        name: 'Javascript',
        expertise: 'expert',
        category: 'frontend',
        expertiseValue: 5
      },
      {
        id: 2,
        name: 'Sencha ExtJS',
        expertise: 'expert',
        category: 'frontend',
        expertiseValue: 5
      },
      {
        id: 3,
        name: 'Sencha Touch',
        expertise: 'expert',
        category: 'frontend',
        expertiseValue: 5
      },
      {
        id: 4,
        name: 'AngularJS',
        expertise: 'expert',
        category: 'frontend',
        expertiseValue: 5
      },{
        id: 5,
        name: 'HTML/HTML5',
        expertise: 'expert',
        category: 'frontend',
        expertiseValue: 5
      },{
        id: 6,
        name: 'CSS/CSS3',
        expertise: 'expert',
        category: 'frontend',
        expertiseValue: 5
      },
      {
        id: 7,
        name: 'AngularJS 2',
        expertise: 'learning',
        category: 'frontend',
        expertiseValue: 1
      },
      {
        id: 8,
        name: 'Gulp',
        expertise: 'expert',
        category: 'frontend',
        expertiseValue: 5
      },
      {
        id: 9,
        name: 'Webpack/Webpack 2',
        expertise: 'proficient',
        category: 'frontend',
        expertiseValue: 4
      },
      {
        id: 10,
        name: 'Grunt',
        expertise: 'proficient',
        category: 'frontend',
        expertiseValue: 4
      },
      {
        id: 11,
        name: 'SystemJS',
        expertise: 'proficient',
        category: 'frontend',
        expertiseValue: 4
      },
      {
        id: 12,
        name: 'Fusebox',
        expertise: 'learning',
        category: 'frontend',
        expertiseValue: 1
      },
      {
        id: 13,
        name: 'SASS',
        expertise: 'expert',
        category: 'frontend',
        expertiseValue: 5
      },
      {
        id: 14,
        name: 'Bootstrap',
        expertise: 'proficient',
        category: 'frontend',
        expertiseValue: 3
      },
      {
        id: 15,
        name: 'Angular Material',
        expertise: 'expert',
        category: 'frontend',
        expertiseValue: 5
      },
      {
        id: 16,
        name: 'Angular Material 2',
        expertise: 'learning',
        category: 'frontend',
        expertiseValue: 1
      },
      {
        id: 17,
        name: 'SemanticUI',
        expertise: 'proficient',
        category: 'frontend',
        expertiseValue: 4
      },
      {
        id: 18,
        name: 'SemanticUI React',
        expertise: 'proficient',
        category: 'frontend',
        expertiseValue: 3
      },
      {
        id: 19,
        name: 'React/Redux',
        expertise: 'proficient',
        category: 'frontend',
        expertiseValue: 3
      },
      {
        id: 20,
        name: 'NodeJS',
        expertise: 'proficient',
        category: 'backend',
        expertiseValue: 3
      },
      {
        id: 21,
        name: 'Java',
        expertise: 'intermediate',
        category: 'backend',
        expertiseValue: 2
      },
      {
        id: 22,
        name: 'Git',
        expertise: 'expert',
        category: 'devops',
        expertiseValue: 5
      },
      {
        id: 23,
        name: 'Jenkins',
        expertise: 'proficient',
        category: 'devops',
        expertiseValue: 4
      },
      {
        id: 24,
        name: 'Codeship',
        expertise: 'proficient',
        category: 'devops',
        expertiseValue: 3
      },
      {
        id: 25,
        name: 'AWS (Lambdas, API Gateway, EC2)',
        expertise: 'proficient',
        category: 'devops',
        expertiseValue: 3
      },
      {
        id: 26,
        name: 'Web Servers (Apache, nginx)',
        expertise: 'intermediate',
        category: 'devops',
        expertiseValue: 2
      },
      {
        id: 27,
        name: 'Linux, Windows, MacOSX',
        expertise: 'proficient',
        category: 'devops',
        expertiseValue: 3
      },
      {
        id: 28,
        name: 'SCRUM',
        expertise: 'expert',
        category: 'agile',
        expertiseValue: 5
      },
      {
        id: 29,
        name: 'Kanban',
        expertise: 'expert',
        category: 'agile',
        expertiseValue: 5
      },
      {
        id: 30,
        name: 'Technical Leadership',
        expertise: 'expert',
        category: 'social',
        expertiseValue: 5
      },
      {
        id: 31,
        name: 'Personnel Training',
        expertise: 'proficient',
        category: 'social',
        expertiseValue: 4
      },
      {
        id: 32,
        name: 'Research and Innovation',
        expertise: 'expert',
        category: 'architecture',
        expertiseValue: 5
      },
      {
        id: 33,
        name: 'Design Patterns',
        expertise: 'proficient',
        category: 'architecture',
        expertiseValue: 4
      },
      {
        id: 34,
        name: 'MySQL',
        expertise: 'proficient',
        category: 'databases',
        expertiseValue: 4
      },
      {
        id: 35,
        name: 'DynamoDB',
        expertise: 'intermediate',
        category: 'databases',
        expertiseValue: 2
      },
      {
        id: 36,
        name: 'MongoDB',
        expertise: 'proficient',
        category: 'databases',
        expertiseValue: 3
      },
      {
        id: 37,
        name: 'VueJS',
        expertise: 'learning',
        category: 'frontend',
        expertiseValue: 1
      }
    ]
  }
};
