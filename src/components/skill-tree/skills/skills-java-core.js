export const javaCoreData = [
    {
        id: 'core-java',
        title: 'Core Java',
        tooltip: {
            content: 'Fundamental Java concepts and core language features',
        },
        children: [
            {
                id: 'java-fundamentals',
                title: 'Java Fundamentals',
                tooltip: {
                    content: 'Basic syntax, data types, operators, control structures, and basic I/O operations',
                },
                children: [
                    {
                        id: 'jvm-architecture',
                        title: 'JVM Architecture',
                        tooltip: {
                            content: 'Understanding JVM components: classloader, memory areas, execution engine',
                        },
                        children: []
                    },
                    {
                        id: 'java-memory-model',
                        title: 'Java Memory Model',
                        tooltip: {
                            content: 'Heap vs stack memory, garbage collection mechanisms',
                        },
                        children: []
                    }
                ]
            },
            {
                id: 'object-oriented-programming',
                title: 'Object-Oriented Programming',
                color: 'alternative',
                tooltip: {
                    content: 'Mastering OOP principles: abstraction, encapsulation, inheritance, polymorphism',
                },
                children: [
                    {
                        id: 'advanced-oop',
                        title: 'Advanced OOP Concepts',
                        tooltip: {
                            content: 'Composition vs inheritance, interfaces, abstract classes, enums',
                        },
                        children: []
                    },
                    {
                        id: 'design-patterns',
                        title: 'Design Patterns',
                        tooltip: {
                            content: 'Gang of Four patterns, modern patterns, anti-patterns',
                        },
                        children: [
                            {
                                id: 'creational-patterns',
                                title: 'Creational Patterns',
                                tooltip: {
                                    content: 'Singleton, Factory, Abstract Factory, Builder, Prototype',
                                },
                                children: []
                            },
                            {
                                id: 'structural-patterns',
                                title: 'Structural Patterns',
                                tooltip: {
                                    content: 'Adapter, Decorator, Facade, Composite, Proxy',
                                },
                                children: []
                            },
                            {
                                id: 'behavioral-patterns',
                                title: 'Behavioral Patterns',
                                tooltip: {
                                    content: 'Observer, Strategy, Command, Iterator, State',
                                },
                                children: []
                            }
                        ]
                    }
                ]
            },
            {
                id: 'collections-framework',
                title: 'Collections Framework',
                tooltip: {
                    content: 'Complete understanding of Java Collections API and algorithms',
                },
                children: [
                    {
                        id: 'list-implementations',
                        title: 'List Implementations',
                        tooltip: {
                            content: 'ArrayList vs LinkedList, Vector, CopyOnWriteArrayList',
                        },
                        children: []
                    },
                    {
                        id: 'map-implementations',
                        title: 'Map Implementations',
                        tooltip: {
                            content: 'HashMap, TreeMap, LinkedHashMap, ConcurrentHashMap',
                        },
                        children: []
                    },
                    {
                        id: 'sets-and-queues',
                        title: 'Sets and Queues',
                        tooltip: {
                            content: 'HashSet, TreeSet, PriorityQueue, BlockingQueue implementations',
                        },
                        children: []
                    }
                ]
            },
            {
                id: 'exception-handling',
                title: 'Exception Handling',
                tooltip: {
                    content: 'Exception hierarchy, custom exceptions, best practices',
                },
                children: []
            },
            {
                id: 'generics',
                title: 'Generics',
                tooltip: {
                    content: 'Type parameters, bounded types, wildcards, type erasure',
                },
                children: []
            },
            {
                id: 'multithreading',
                title: 'Multithreading',
                tooltip: {
                    content: 'Thread lifecycle, synchronization, concurrent programming',
                },
                children: [
                    {
                        id: 'executors-framework',
                        title: 'Executors Framework',
                        tooltip: {
                            content: 'Thread pools, ForkJoinPool, ScheduledExecutorService',
                        },
                        children: []
                    },
                    {
                        id: 'concurrent-collections',
                        title: 'Concurrent Collections',
                        tooltip: {
                            content: 'ConcurrentHashMap, BlockingQueue, CopyOnWrite collections',
                        },
                        children: []
                    },
                    {
                        id: 'modern-concurrency',
                        title: 'Modern Concurrency',
                        tooltip: {
                            content: 'CompletableFuture, Reactive Streams, Virtual Threads (Project Loom)',
                        },
                        children: []
                    }
                ]
            },
            {
                id: 'java-io-nio',
                title: 'I/O and NIO',
                tooltip: {
                    content: 'File handling, streams, channels, buffers, selectors',
                },
                children: []
            },
            {
                id: 'java8-features',
                title: 'Java 8+ Features',
                tooltip: {
                    content: 'Lambdas, Stream API, Optional, new Date/Time API, modules',
                },
                children: [
                    {
                        id: 'functional-programming',
                        title: 'Functional Programming',
                        tooltip: {
                            content: 'Functional interfaces, method references, higher-order functions',
                        },
                        children: []
                    },
                    {
                        id: 'stream-api',
                        title: 'Stream API',
                        tooltip: {
                            content: 'Intermediate/terminal operations, collectors, parallel streams',
                        },
                        children: []
                    }
                ]
            }
        ]
    },
]