export const extendedData = [
    {
        id: 'java-fundamentals',
        title: 'Java Fundamentals',
        tooltip: {
            content: 'Basic understanding of Java syntax, data types, and control structures.',
        },
        children: [
            {
                id: 'object-oriented-programming',
                title: 'Object-Oriented Programming (OOP)',
                color: 'alternative',
                tooltip: {
                    content: 'Understanding of OOP principles like classes, objects, inheritance, polymorphism, etc.',
                },
                children: [
                    {
                        id: 'design-patterns',
                        title: 'Design Patterns',
                        tooltip: {
                            content: 'Learn common design patterns like Singleton, Factory, Observer, etc.',
                        },
                        children: [],
                    },
                ],
            },
            {
                id: 'collections-and-generics',
                title: 'Collections and Generics',
                tooltip: {
                    content: 'In-depth knowledge of Java Collections Framework and use of generics for type safety.',
                },
                children: [],
            },
            {
                id: 'multithreading',
                title: 'Multithreading',
                tooltip: {
                    content: 'Understanding of concurrent programming and synchronization in Java.',
                },
                children: [
                    {
                        id: 'concurrency-frameworks',
                        title: 'Concurrency Frameworks',
                        tooltip: {
                            content: 'Familiarity with libraries like java.util.concurrent for efficient multithreading.',
                        },
                        children: [],
                    },
                ],
            },
            {
                id: 'exceptions-and-error-handling',
                title: 'Exceptions and Error Handling',
                tooltip: {
                    content: 'Handling exceptions and errors gracefully to ensure robust code.',
                },
                children: [],
            },
        ],
    },
    {
        id: 'advanced-java',
        title: 'Advanced Java Concepts',
        tooltip: {
            content: 'Deep dive into advanced Java topics and APIs.',
        },
        children: [
            {
                id: 'streams-and-lambdas',
                title: 'Streams and Lambdas',
                tooltip: {
                    content: 'Working with Java 8+ features for functional programming style.',
                },
                children: [],
            },
            {
                id: 'nio-and-io',
                title: 'NIO and I/O Operations',
                tooltip: {
                    content: 'Non-blocking I/O operations for efficient file and network handling.',
                },
                children: [],
            },
            {
                id: 'reflection-and-annotations',
                title: 'Reflection and Annotations',
                tooltip: {
                    content: 'Using reflection for dynamic class loading and annotations for metadata.',
                },
                children: [],
            },
        ],
    },
    {
        id: 'frameworks-and-libraries',
        title: 'Frameworks and Libraries',
        tooltip: {
            content: 'Explore popular Java frameworks and libraries for development.',
        },
        children: [
            {
                id: 'spring-framework',
                title: 'Spring Framework',
                tooltip: {
                    content: 'In-depth knowledge of Spring for building enterprise-level applications.',
                },
                children: [
                    {
                        id: 'spring-boot',
                        title: 'Spring Boot',
                        tooltip: {
                            content: 'Building standalone Spring applications with minimal configuration.',
                        },
                        children: [],
                    },
                    {
                        id: 'spring-data',
                        title: 'Spring Data',
                        tooltip: {
                            content: 'Data access and persistence using Spring Data repositories.',
                        },
                        children: [],
                    },
                ],
            },
            {
                id: 'hibernate',
                title: 'Hibernate',
                tooltip: {
                    content: 'Object-relational mapping (ORM) for database interaction in Java applications.',
                },
                children: [],
            },
            {
                id: 'testing-frameworks',
                title: 'Testing Frameworks',
                tooltip: {
                    content: 'Familiarity with JUnit, TestNG, and other testing frameworks for Java.',
                },
                children: [],
            },
        ],
    },
    {
        id: 'web-development',
        title: 'Web Development with Java',
        tooltip: {
            content: 'Building web applications using Java-based technologies.',
        },
        children: [
            {
                id: 'servlets-and-jsp',
                title: 'Servlets and JSP',
                tooltip: {
                    content: 'Understanding web technologies for server-side Java development.',
                },
                children: [],
            },
            {
                id: 'spring-mvc',
                title: 'Spring MVC',
                tooltip: {
                    content: 'Building web applications using the Model-View-Controller pattern with Spring.',
                },
                children: [],
            },
            {
                id: 'restful-web-services',
                title: 'RESTful Web Services',
                tooltip: {
                    content: 'Designing and implementing REST APIs for web applications.',
                },
                children: [],
            },
        ],
    },
    {
        id: 'databases-and-persistence',
        title: 'Databases and Persistence',
        tooltip: {
            content: 'Working with databases and data persistence in Java applications.',
        },
        children: [
            {
                id: 'sql-and-relational-databases',
                title: 'SQL and Relational Databases',
                tooltip: {
                    content: 'Mastering SQL queries and working with databases like MySQL, PostgreSQL, etc.',
                },
                children: [],
            },
            {
                id: 'nosql-databases',
                title: 'NoSQL Databases',
                tooltip: {
                    content: 'Understanding and using NoSQL databases like MongoDB, Cassandra, etc.',
                },
                children: [],
            },
            {
                id: 'jpa-and-spring-data-jpa',
                title: 'JPA and Spring Data JPA',
                tooltip: {
                    content: 'Working with JPA for object-relational mapping and Spring Data JPA repositories.',
                },
                children: [],
            },
        ],
    },
    {
        id: 'build-and-automation-tools',
        title: 'Build and Automation Tools',
        tooltip: {
            content: 'Using tools for building, testing, and deploying Java applications.',
        },
        children: [
            {
                id: 'maven',
                title: 'Maven',
                tooltip: {
                    content: 'Managing project dependencies and build lifecycles with Apache Maven.',
                },
                children: [],
            },
            {
                id: 'gradle',
                title: 'Gradle',
                tooltip: {
                    content: 'Automating build processes with Gradle for Java projects.',
                },
                children: [],
            },
        ],
    },
    {
        id: 'version-control',
        title: 'Version Control',
        tooltip: {
            content: 'Managing code versions and collaboration with version control systems.',
        },
        children: [
            {
                id: 'git',
                title: 'Git',
                tooltip: {
                    content: 'Proficient in using Git for version control and collaboration on projects.',
                },
                children: [],
            },
        ],
    },
    {
        id: 'software-architecture',
        title: 'Software Architecture',
        tooltip: {
            content: 'Understanding architectural patterns and best practices for Java applications.',
        },
        children: [
            {
                id: 'microservices',
                title: 'Microservices Architecture',
                tooltip: {
                    content: 'Designing and building applications using the microservices architectural style.',
                },
                children: [],
            },
            {
                id: 'mvc-architecture',
                title: 'MVC Architecture',
                tooltip: {
                    content: 'Understanding and implementing the Model-View-Controller pattern in Java applications.',
                },
                children: [],
            },
            {
                id: 'design-principles',
                title: 'Design Principles',
                tooltip: {
                    content: 'Applying SOLID principles and other design patterns for scalable and maintainable code.',
                },
                children: [],
            },
        ],
    },
    {
        id: 'security-and-authentication',
        title: 'Security and Authentication',
        tooltip: {
            content: 'Implementing security measures and user authentication in Java applications.',
        },
        children: [
            {
                id: 'authentication-methods',
                title: 'Authentication Methods',
                tooltip: {
                    content: 'Understanding various authentication methods like JWT, OAuth, etc.',
                },
                children: [],
            },
            {
                id: 'secure-coding-practices',
                title: 'Secure Coding Practices',
                tooltip: {
                    content: 'Writing secure code to protect against common vulnerabilities.',
                },
                children: [],
            },
            {
                id: 'encryption-and-hashing',
                title: 'Encryption and Hashing',
                tooltip: {
                    content: 'Implementing encryption and hashing techniques for data security.',
                },
                children: [],
            },
        ],
    },
    {
        id: 'deployment-and-devops',
        title: 'Deployment and DevOps',
        tooltip: {
            content: 'Managing deployment processes and adopting DevOps practices for Java applications.',
        },
        children: [
            {
                id: 'containers-and-docker',
                title: 'Containers and Docker',
                tooltip: {
                    content: 'Containerizing Java applications for consistent deployment across environments.',
                },
                children: [],
            },
            {
                id: 'continuous-integration',
                title: 'Continuous Integration',
                tooltip: {
                    content: 'Implementing CI/CD pipelines for automated testing and deployment.',
                },
                children: [],
            },
            {
                id: 'monitoring-and-logging',
                title: 'Monitoring and Logging',
                tooltip: {
                    content: 'Setting up monitoring and logging solutions for Java applications.',
                },
                children: [],
            },
        ],
    },
    {
        id: 'cloud-platforms',
        title: 'Cloud Platforms',
        tooltip: {
            content: 'Deploying and managing Java applications on cloud platforms.',
        },
        children: [
            {
                id: 'aws',
                title: 'Amazon Web Services (AWS)',
                tooltip: {
                    content: 'Using AWS services like EC2, S3, Lambda, etc., for Java application deployment.',
                },
                children: [],
            },
            {
                id: 'azure',
                title: 'Microsoft Azure',
                tooltip: {
                    content: 'Deploying Java applications on the Azure cloud platform.',
                },
                children: [],
            },
            {
                id: 'google-cloud-platform',
                title: 'Google Cloud Platform (GCP)',
                tooltip: {
                    content: 'Utilizing GCP services for hosting and managing Java applications.',
                },
                children: [],
            },
        ],
    },
];

export const data = [
    {
        id: 'java-fundamentals',
        title: 'Java Fundamentals',
        tooltip: {
            content: 'Basic understanding of Java syntax, data types, and control structures.',
        },
        children: [
            {
                id: 'object-oriented-programming',
                title: 'Object-Oriented Programming (OOP)',
                color: 'alternative',
                tooltip: {
                    content: 'Understanding of OOP principles like classes, objects, inheritance, polymorphism, etc.',
                },
                children: [
                    {
                        id: 'design-patterns',
                        title: 'Design Patterns',
                        tooltip: {
                            content: 'Learn common design patterns like Singleton, Factory, Observer, etc.',
                        },
                        children: [],
                    },
                ],
            },
            {
                id: 'collections-and-generics',
                title: 'Collections and Generics',
                tooltip: {
                    content: 'In-depth knowledge of Java Collections Framework and use of generics for type safety.',
                },
                children: [],
            },
            {
                id: 'multithreading',
                title: 'Multithreading',
                tooltip: {
                    content: 'Understanding of concurrent programming and synchronization in Java.',
                },
                children: [
                    {
                        id: 'concurrency-frameworks',
                        title: 'Concurrency Frameworks',
                        tooltip: {
                            content: 'Familiarity with libraries like java.util.concurrent for efficient multithreading.',
                        },
                        children: [],
                    },
                ],
            },
            {
                id: 'exceptions-and-error-handling',
                title: 'Exceptions and Error Handling',
                tooltip: {
                    content: 'Handling exceptions and errors gracefully to ensure robust code.',
                },
                children: [],
            },
        ],
    },
]