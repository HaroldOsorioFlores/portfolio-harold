'use client';

import { useState } from 'react';
import { ExternalLink, Calendar, Users, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ProjectModal } from '@/components/project-modal';
import { projects } from '@/lib/data';

export default function ProjectsSection() {
  const t = useTranslations('HomePage');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  // Categorías desde las traducciones
  const categories = [
    { key: 'all', emoji: '🌌' },
    { key: 'web', emoji: '🌐' },
    { key: 'ai', emoji: '🤖' },
    { key: 'marketplace', emoji: '🏪' },
    { key: 'backend', emoji: '⚙️' },
    { key: 'ecommerce', emoji: '🛒' },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section
      id="proyectos"
      className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Floating Space Elements */}
      <div className="absolute top-10 left-10 text-4xl animate-bounce opacity-20">🚀</div>
      <div className="absolute top-20 right-20 text-3xl animate-pulse opacity-30">🌟</div>
      <div className="absolute bottom-20 left-20 text-4xl animate-bounce delay-1000 opacity-20">
        🛸
      </div>
      <div className="absolute bottom-10 right-10 text-3xl animate-pulse delay-500 opacity-30">
        ⭐
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-blue-200 dark:border-gray-600 shadow-lg">
            <span className="text-2xl">💼</span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {t('projectsSection.badge')}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            {t('projectsSection.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            {t('projectsSection.description')}
          </p>

          {/* Project Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.key}
                variant={selectedCategory === category.key ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.key)}
                className={
                  selectedCategory === category.key
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg'
                    : 'hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-blue-200 dark:border-gray-600'
                }
              >
                <span className="mr-2">{category.emoji}</span>
                {t(`projectsSection.categories.${category.key}`)}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group cursor-pointer hover:shadow-2xl transition-all duration-300 shadow-lg hover:-translate-y-4 overflow-hidden bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-blue-100 dark:border-gray-700"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 text-3xl animate-pulse">{project.emoji}</div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100 shadow-lg">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t('projectsSection.viewDetails')}
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <Calendar className="w-4 h-4" />
                  {project.date}
                  <Users className="w-4 h-4 ml-2" />
                  {project.client}
                </div>

                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge
                      variant="secondary"
                      className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                    >
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                    <TrendingUp className="w-4 h-4" />
                    <span className="font-semibold">{project.metrics.cost_reduction}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
