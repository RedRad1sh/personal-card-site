export const extendedData = [
    {
        id: 'jvm-ecosystem',
        title: 'JVM Ecosystem',
        tooltip: {
            content: 'Languages and tools that run on JVM',
        },
        children: [
            {
                id: 'jvm-languages',
                title: 'JVM Languages',
                tooltip: {
                    content: 'Kotlin, Scala, Groovy, Clojure',
                },
                children: []
            },
            {
                id: 'build-tools',
                title: 'Build Tools',
                tooltip: {
                    content: 'Maven, Gradle, Ant',
                },
                children: [
                    {
                        id: 'dependency-management',
                        title: 'Dependency Management',
                        tooltip: {
                            content: 'Transitive dependencies, conflict resolution, BOM',
                        },
                        children: []
                    },
                    {
                        id: 'multi-module-projects',
                        title: 'Multi-module Projects',
                        tooltip: {
                            content: 'Project structure, inter-module dependencies',
                        },
                        children: []
                    }
                ]
            },
            {
                id: 'testing',
                title: 'Testing',
                tooltip: {
                    content: 'Unit, integration, and functional testing',
                },
                children: [
                    {
                        id: 'junit',
                        title: 'JUnit 5',
                        tooltip: {
                            content: 'Annotations, assertions, parameterized tests, extensions',
                        },
                        children: []
                    },
                    {
                        id: 'mockito',
                        title: 'Mockito',
                        tooltip: {
                            content: 'Mocking, stubbing, verification, argument matchers',
                        },
                        children: []
                    },
                    {
                        id: 'test-containers',
                        title: 'Test Containers',
                        tooltip: {
                            content: 'Integration testing with real databases and services',
                        },
                        children: []
                    }
                ]
            }
        ]
    },
    {
        id: 'web-development',
        title: 'Web Development',
        tooltip: {
            content: 'Building web applications with Java',
        },
        children: [
            {
                id: 'servlet-api',
                title: 'Servlet API',
                tooltip: {
                    content: 'Request/response cycle, filters, listeners',
                },
                children: []
            },
            {
                id: 'spring-mvc',
                title: 'Spring MVC',
                tooltip: {
                    content: 'Controllers, view resolution, form handling',
                },
                children: []
            },
            {
                id: 'rest-api',
                title: 'REST API Development',
                tooltip: {
                    content: 'REST principles, HATEOAS, documentation',
                },
                children: [
                    {
                        id: 'spring-rest',
                        title: 'Spring REST',
                        tooltip: {
                            content: '@RestController, exception handling, validation',
                        },
                        children: []
                    },
                    {
                        id: 'openapi',
                        title: 'OpenAPI/Swagger',
                        tooltip: {
                            content: 'API documentation, code generation',
                        },
                        children: []
                    }
                ]
            },
            {
                id: 'web-security',
                title: 'Web Security',
                tooltip: {
                    content: 'OWASP top 10, CSRF, CORS, security headers',
                },
                children: []
            },
            {
                id: 'templating-engines',
                title: 'Templating Engines',
                tooltip: {
                    content: 'Thymeleaf, FreeMarker, JSP/JSTL',
                },
                children: []
            }
        ]
    },
    {
        id: 'performance',
        title: 'Performance Optimization',
        tooltip: {
            content: 'Techniques for improving application performance',
        },
        children: [
            {
                id: 'jvm-tuning',
                title: 'JVM Tuning',
                tooltip: {
                    content: 'GC algorithms, heap sizing, JIT optimization',
                },
                children: []
            },
            {
                id: 'profiling',
                title: 'Profiling',
                tooltip: {
                    content: 'CPU/memory profiling, flame graphs',
                },
                children: []
            },
            {
                id: 'database-optimization',
                title: 'Database Optimization',
                tooltip: {
                    content: 'Indexing, query optimization, connection pooling',
                },
                children: []
            },
            {
                id: 'caching',
                title: 'Caching Strategies',
                tooltip: {
                    content: 'Cache-aside, write-through, Redis, Hazelcast',
                },
                children: []
            }
        ]
    }
];