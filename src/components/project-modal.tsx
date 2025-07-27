'use client';

import { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Users,
  TrendingUp,
  Target,
  Clock,
  ExternalLink,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Project {
  id: number;
  title: string;
  client: string;
  date: string;
  description: string;
  image: string;
  technologies: string[];
  metrics: {
    cost_reduction: string;
    performance_improvement: string;
    user_satisfaction: string;
  };
  gallery: string[];
  category: string;
  link: string | null;
}

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: Readonly<ProjectModalProps>) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="!max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-800 dark:text-white">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 w-full">
          {/* Image Gallery */}
          <div className="relative">
            <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
              <Image
                src={project.gallery[currentImageIndex] || '/placeholder.svg'}
                alt={`${project.title} - Imagen ${currentImageIndex + 1}`}
                fill
                className="object-cover"
              />

              {project.gallery.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-800"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-800"
                    onClick={nextImage}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </>
              )}
              {project.link && (
                <Button
                  size="sm"
                  className="absolute bottom-4 left-4 bg-white text-gray-900 hover:bg-gray-100 shadow-lg w-auto"
                  asChild
                >
                  <Link
                    className="w-4 h-4"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Proyecto
                  </Link>
                </Button>
              )}
            </div>

            {/* Image Indicators */}
            {project.gallery.length > 1 && (
              <div className="flex justify-center gap-2 mt-4">
                {project.gallery.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Project Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                Información del Proyecto
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Users className="w-4 h-4" />
                  <span className="font-medium">Cliente:</span>
                  <span>{project.client}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">Año:</span>
                  <span>{project.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Target className="w-4 h-4" />
                  <span className="font-medium">Categoría:</span>
                  <Badge
                    variant="secondary"
                    className="bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                  >
                    {project.category}
                  </Badge>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-medium text-gray-800 dark:text-white mb-2">Descripción</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                Resultados e Impacto
              </h3>
              <div className="space-y-4">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-2 text-green-700 dark:text-green-400 mb-1">
                    <TrendingUp className="w-4 h-4" />
                    <span className="font-medium">Reducción de Costos</span>
                  </div>
                  <div className="text-2xl font-bold text-green-800 dark:text-green-300">
                    {project.metrics.cost_reduction}
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 mb-1">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">Mejora de Performance</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-800 dark:text-blue-300">
                    {project.metrics.performance_improvement}
                  </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                  <div className="flex items-center gap-2 text-purple-700 dark:text-purple-400 mb-1">
                    <Target className="w-4 h-4" />
                    <span className="font-medium">Satisfacción del Cliente</span>
                  </div>
                  <div className="text-2xl font-bold text-purple-800 dark:text-purple-300">
                    {project.metrics.user_satisfaction}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Stack Tecnológico
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-lg text-white text-center">
            <h3 className="text-xl font-semibold mb-2">¿Interesado en un proyecto similar?</h3>
            <p className="mb-4 text-blue-100">
              Conversemos sobre cómo puedo ayudarte a alcanzar resultados similares
            </p>
            <Button
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => {
                onClose();
                document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Iniciar Conversación
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
