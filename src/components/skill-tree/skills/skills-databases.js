export const dbData = [
    {
        id: 'data-persistence',
        title: 'Data Persistence',
        tooltip: {
            content: 'Working with databases and data access',
        },
        children: [
            {
                id: 'jdbc',
                title: 'JDBC',
                tooltip: {
                    content: 'Connection management, statements, transactions',
                },
                children: []
            },
            {
                id: 'jpa',
                title: 'JPA',
                tooltip: {
                    content: 'EntityManager, JPQL, criteria API',
                },
                children: []
            },
            {
                id: 'sql',
                title: 'SQL',
                tooltip: {
                    content: 'Query optimization, indexing, transactions',
                },
                children: []
            },
            {
                id: 'nosql',
                title: 'NoSQL',
                tooltip: {
                    content: 'MongoDB, Cassandra, Redis, Elasticsearch',
                },
                children: []
            }
        ]
    }
]