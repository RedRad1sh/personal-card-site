export const frameworkData = [
    {
        id: 'frameworks',
        title: 'Frameworks',
        tooltip: {
            content: 'Popular Java frameworks and libraries', 
        },
        children: [
            {
                id: 'spring-framework',
                title: 'Spring Framework',
                tooltip: {
                    content: 'Dependency Injection, AOP, Spring ecosystem',
                },
                children: [
                    {
                        id: 'spring-core',
                        title: 'Spring Core',
                        tooltip: {
                            content: 'IoC container, bean lifecycle, configuration styles',
                        },
                        children: []
                    },
                    {
                        id: 'spring-boot',
                        title: 'Spring Boot',
                        tooltip: {
                            content: 'Auto-configuration, starters, actuators',
                        },
                        children: [
                            {
                                id: 'spring-boot-autoconfig',
                                title: 'Auto-configuration',
                                tooltip: {
                                    content: 'Conditional beans, custom starters',
                                },
                                children: []
                            }
                        ]
                    },
                    {
                        id: 'spring-data',
                        title: 'Spring Data',
                        tooltip: {
                            content: 'Repositories, query methods, JPA, NoSQL support',
                        },
                        children: []
                    },
                    {
                        id: 'spring-security',
                        title: 'Spring Security',
                        tooltip: {
                            content: 'Authentication, authorization, OAuth2, JWT',
                        },
                        children: []
                    },
                    {
                        id: 'spring-cloud',
                        title: 'Spring Cloud',
                        tooltip: {
                            content: 'Microservices patterns, service discovery, config server',
                        },
                        children: []
                    }
                ]
            },
            {
                id: 'hibernate',
                title: 'Hibernate',
                tooltip: {
                    content: 'JPA implementation, ORM, caching, performance tuning',
                },
                children: [
                    {
                        id: 'hibernate-mappings',
                        title: 'Mappings',
                        tooltip: {
                            content: 'Entity relationships, inheritance strategies',
                        },
                        children: []
                    },
                    {
                        id: 'hibernate-performance',
                        title: 'Performance',
                        tooltip: {
                            content: 'Fetch strategies, batch processing, caching',
                        },
                        children: []
                    }
                ]
            },
            {
                id: 'reactive-stacks',
                title: 'Reactive Stacks',
                tooltip: {
                    content: 'Reactive programming frameworks',
                },
                children: [
                    {
                        id: 'spring-webflux',
                        title: 'Spring WebFlux',
                        tooltip: {
                            content: 'Reactive web applications with Project Reactor',
                        },
                        children: []
                    },
                    {
                        id: 'vertx',
                        title: 'Vert.x',
                        tooltip: {
                            content: 'Event-driven application framework',
                        },
                        children: []
                    }
                ]
            }
        ]
    }
]