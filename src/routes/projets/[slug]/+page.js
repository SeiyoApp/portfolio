import projects from '$lib/data/projects.json';

export function load({ params }) {
    const project = projects.projects.find(p => p.slug === params.slug);
    
    if (!project) {
        throw new Error('Project not found');
    }

    return {
        project
    };
}