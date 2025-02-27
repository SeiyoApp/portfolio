import projectsData from '$lib/data/projects.json';

export function load() {
  if (!projectsData || !projectsData.projects) {
    // Si les données sont manquantes, fournir des données par défaut
    return {
      status: 404,
    };
  }

  return {
    projects: projectsData.projects
  };
}