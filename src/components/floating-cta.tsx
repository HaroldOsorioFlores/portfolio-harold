'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const threshold = 1000; // Show after scrolling 1000px
      setIsVisible(scrolled > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded ? (
        <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg shadow-2xl border border-blue-200 dark:border-gray-600 p-4 max-w-sm animate-in slide-in-from-bottom-2">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">🚀</span>
              </div>
              <div>
                <p className="font-semibold text-gray-800 dark:text-white text-sm">
                  ¿Necesitas ayuda?
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Harold está aquí para ayudarte
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(false)}
              className="h-6 w-6 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
            ¿Tienes un proyecto en mente? Conversemos sobre cómo puedo ayudarte a desarrollar tu
            solución tecnológica
          </p>

          <div className="space-y-2">
            <Button
              size="sm"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-xs shadow-lg"
              asChild
            >
              <Link
                href={`https://wa.me/51938205664?text=Hola Harold, me gustaría hablar sobre mi proyecto...`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Enviar Mensaje Whatsapp
              </Link>
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="w-full text-xs bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border-blue-200 dark:border-gray-600 hover:bg-blue-50 dark:hover:bg-gray-600"
              asChild
            >
              <Link
                href={
                  'mailto:haroldosorio32@gmail.com?subject=Consulta sobre proyecto&body=Hola Harold,%0D%0A%0D%0AMe interesa hablar sobre mi proyecto...'
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Enviar Email
              </Link>
            </Button>
          </div>
        </div>
      ) : (
        <Button
          onClick={() => setIsExpanded(true)}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-full w-14 h-14 shadow-2xl animate-bounce"
        >
          <span className="text-xl">🚀</span>
        </Button>
      )}
    </div>
  );
}
