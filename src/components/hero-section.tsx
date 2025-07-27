import { ArrowRight, Code2, Rocket, Star } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950 text-white overflow-hidden">
      {/* Starfield Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Stars */}
        <div className="absolute top-20 left-10 animate-pulse">
          <Star className="w-4 h-4 text-yellow-300 fill-current" />
        </div>
        <div className="absolute top-32 right-20 animate-pulse delay-1000">
          <Star className="w-3 h-3 text-blue-300 fill-current" />
        </div>
        <div className="absolute top-60 left-1/4 animate-pulse delay-500">
          <Star className="w-5 h-5 text-purple-300 fill-current" />
        </div>
        <div className="absolute bottom-40 right-1/3 animate-pulse delay-700">
          <Star className="w-4 h-4 text-pink-300 fill-current" />
        </div>
        <div className="absolute top-1/3 right-10 animate-pulse delay-300">
          <Star className="w-3 h-3 text-green-300 fill-current" />
        </div>
        <div className="absolute bottom-60 left-20 animate-pulse delay-1200">
          <Star className="w-4 h-4 text-orange-300 fill-current" />
        </div>

        {/* Small Stars Pattern */}
        <div className="absolute inset-0 opacity-60">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(2px 2px at 20px 30px, #fff, transparent),
                               radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent),
                               radial-gradient(1px 1px at 90px 40px, #fff, transparent),
                               radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.6), transparent),
                               radial-gradient(2px 2px at 160px 30px, #fff, transparent)`,
              backgroundRepeat: 'repeat',
              backgroundSize: '200px 100px',
            }}
          ></div>
        </div>
      </div>

      {/* Floating Astronaut */}
      <div className="absolute top-20 right-10 opacity-30 hidden lg:block animate-bounce">
        <div className="text-8xl">👨‍🚀</div>
      </div>

      {/* Floating Planets */}
      <div className="absolute top-40 left-20 opacity-40 hidden md:block">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-pulse shadow-lg"></div>
      </div>
      <div className="absolute bottom-32 right-32 opacity-35 hidden lg:block">
        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce shadow-lg"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Professional Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20 shadow-xl">
            <Rocket className="w-5 h-5 text-yellow-300" />
            <span className="text-sm font-medium text-blue-100">
              Harold Gonzalo Osorio Flores - Desarrollador Full Stack
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block mb-2">Desarrollador</span>
            <span className="bg-gradient-to-r from-yellow-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              Full Stack
            </span>{' '}
            <span className="block mt-2">& Ingeniero de Sistemas</span>
          </h1>

          {/* Professional Description */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Especializado en Next.js, React, NestJS y Spring Boot. Experiencia en el diseño e
            implementación de soluciones tecnológicas escalables con sólidos conocimientos en bases
            de datos SQL.
          </p>

          {/* Professional Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 max-w-2xl mx-auto">
            <div className="flex-1 text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-xl">
              <div className="text-3xl font-bold text-yellow-300">6+</div>
              <div className="text-sm text-blue-200">Proyectos Completados</div>
              <div className="text-2xl mt-1">💻</div>
            </div>
            <div className="flex-1 text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-xl">
              <div className="text-3xl font-bold text-purple-300">2+</div>
              <div className="text-sm text-blue-200">Años de Experiencia</div>
              <div className="text-2xl mt-1">⚡</div>
            </div>
            <div className="flex-1 text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-xl">
              <div className="text-3xl font-bold text-blue-300">100%</div>
              <div className="text-sm text-blue-200">Compromiso</div>
              <div className="text-2xl mt-1">🎯</div>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-gray-900 font-semibold px-8 py-4 text-lg group shadow-2xl"
              asChild
            >
              <Link href="#proyectos">
                Ver Proyectos
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm bg-transparent shadow-xl"
              asChild
            >
              <Link href="#contacto">
                <Code2 className="mr-2 w-5 h-5" />
                Contactar
              </Link>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center text-blue-200">
            <div className="flex items-center gap-2">
              <span>📧</span>
              <span>haroldosorio32@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📱</span>
              <span>+51 938205664</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>Arequipa, Perú</span>
            </div>
          </div>

          {/* Professional Quote */}
          <div className="mt-8 max-w-2xl mx-auto">
            <p className="text-lg text-blue-200 italic">
              `Comprometido con las mejores prácticas de desarrollo y la entrega de soluciones de
              alta calidad`
            </p>
          </div>
        </div>
      </div>

      {/* Floating Rocket */}
      <div className="absolute bottom-20 left-10 opacity-60 hidden lg:block animate-bounce">
        <div className="text-6xl">🚀</div>
      </div>

      {/* Space Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-full flex flex-col items-center justify-center shadow-xl">
          <div className="text-white text-xs mb-1">🌍</div>
          <div className="w-1 h-2 bg-blue-300 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
