import { useTranslations } from 'next-intl';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const skills = [
  {
    category: 'frontend',
    technologies: ['Next.js', 'React', 'TypeScript', 'HTML', 'CSS', 'JavaScript'],
    icon: '🛸',
    emoji: '🌟',
  },
  {
    category: 'backend',
    technologies: ['NestJS', 'Spring Boot', 'Python', 'Java', 'PHP'],
    icon: '🛰️',
    emoji: '⚡',
  },
  {
    category: 'databases',
    technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL Server'],
    icon: '🌌',
    emoji: '💾',
  },
  {
    category: 'tools',
    technologies: ['Docker', 'Git', 'AWS', 'Postman', 'Figma', 'Vercel'],
    icon: '🔧',
    emoji: '🛠️',
  },
  {
    category: 'analytics',
    technologies: ['ETL', 'Pentaho', 'PowerBI', 'Machine Learning', 'YOLO'],
    icon: '📊',
    emoji: '🤖',
  },
  {
    category: 'platforms',
    technologies: ['Linux', 'WordPress', 'AWS', 'Kali Linux', 'Manjaro'],
    icon: '🌍',
    emoji: '💻',
  },
];

export default function SkillsSection() {
  const t = useTranslations('HomePage');

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Floating Stars */}
      <div className="absolute top-10 left-10 text-yellow-400 animate-pulse">⭐</div>
      <div className="absolute top-20 right-20 text-blue-400 animate-pulse delay-500">✨</div>
      <div className="absolute bottom-20 left-20 text-purple-400 animate-pulse delay-1000">🌟</div>
      <div className="absolute bottom-10 right-10 text-pink-400 animate-pulse delay-700">💫</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-blue-200 dark:border-gray-600 shadow-lg">
            <span className="text-2xl">🛠️</span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {t('skillsSection.badge')}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            {t('skillsSection.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('skillsSection.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 shadow-lg hover:-translate-y-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-100 dark:border-gray-700"
            >
              <CardContent className="p-6 text-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center justify-center gap-2">
                  {t(`skillsSection.categories.${skill.category}`)}
                  <span className="text-sm">{skill.emoji}</span>
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skill.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-300 hover:from-blue-200 hover:to-purple-200 dark:hover:from-blue-800 dark:hover:to-purple-800 transition-colors border border-blue-200 dark:border-blue-700"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-blue-200 dark:border-gray-600 shadow-lg">
            <span className="text-2xl">🏆</span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {t('skillsSection.certifications.title')}
            </span>
          </div>
          <Card className="max-w-4xl mx-auto bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-blue-100 dark:border-gray-700 shadow-xl">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">
                    {t('skillsSection.certifications.certiport.title')}
                  </h4>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                    {t
                      .raw('skillsSection.certifications.certiport.items')
                      .map((item: string, index: number) => (
                        <li key={index}>• {item}</li>
                      ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">
                    {t('skillsSection.certifications.cisco.title')}
                  </h4>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                    {t
                      .raw('skillsSection.certifications.cisco.items')
                      .map((item: string, index: number) => (
                        <li key={index}>• {item}</li>
                      ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
