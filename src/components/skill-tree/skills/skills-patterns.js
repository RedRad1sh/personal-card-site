export const patternData = [
    {
        id: 'architecture',
        title: 'Software Architecture',
        tooltip: {
            content: 'Designing scalable and maintainable systems',
        },
        children: [
            {
                id: 'design-principles',
                title: 'Design Principles',
                tooltip: {
                    content: 'SOLID, DRY, KISS, YAGNI',
                },
                children: []
            },
            {
                id: 'architectural-patterns',
                title: 'Architectural Patterns',
                tooltip: {
                    content: 'Layered, hexagonal, CQRS, event sourcing',
                },
                children: []
            },
            {
                id: 'microservices',
                title: 'Microservices',
                tooltip: {
                    content: 'Service decomposition, inter-service communication',
                },
                children: [
                    {
                        id: 'service-discovery',
                        title: 'Service Discovery',
                        tooltip: {
                            content: 'Eureka, Consul, Zookeeper',
                        },
                        children: []
                    },
                    {
                        id: 'api-gateway',
                        title: 'API Gateway',
                        tooltip: {
                            content: 'Routing, aggregation, edge functions',
                        },
                        children: []
                    },
                    {
                        id: 'distributed-transactions',
                        title: 'Distributed Transactions',
                        tooltip: {
                            content: 'Saga pattern, eventual consistency',
                        },
                        children: []
                    }
                ]
            },
            {
                id: 'cloud-native',
                title: 'Cloud Native',
                tooltip: {
                    content: '12-factor apps, cloud patterns',
                },
                children: []
            }
        ]
    }
]