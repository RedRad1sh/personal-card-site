export const ciCdData = [{
        id: 'devops',
        title: 'DevOps and Deployment',
        tooltip: {
            content: 'CI/CD, monitoring, and infrastructure',
        },
        children: [
            {
                id: 'containers',
                title: 'Containers',
                tooltip: {
                    content: 'Docker, container orchestration',
                },
                children: [
                    {
                        id: 'kubernetes',
                        title: 'Kubernetes',
                        tooltip: {
                            content: 'Pods, deployments, services, Helm',
                        },
                        children: []
                    }
                ]
            },
            {
                id: 'ci-cd',
                title: 'CI/CD Pipelines',
                tooltip: {
                    content: 'Jenkins, GitHub Actions, GitLab CI',
                },
                children: []
            },
            {
                id: 'monitoring',
                title: 'Monitoring',
                tooltip: {
                    content: 'Metrics, logging, tracing',
                },
                children: [
                    {
                        id: 'prometheus-grafana',
                        title: 'Prometheus/Grafana',
                        tooltip: {
                            content: 'Metric collection and visualization',
                        },
                        children: []
                    },
                    {
                        id: 'elk',
                        title: 'ELK Stack',
                        tooltip: {
                            content: 'Log aggregation and analysis',
                        },
                        children: []
                    }
                ]
            }
        ]
    }
]