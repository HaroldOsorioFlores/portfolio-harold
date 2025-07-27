'use client';

import type React from 'react';

import { Mail, Phone, MapPin, CheckCircle, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Floating Space Elements */}
      <div className="absolute top-10 left-10 text-3xl animate-pulse opacity-30">🛰️</div>
      <div className="absolute top-20 right-20 text-2xl animate-bounce opacity-20">🌟</div>
      <div className="absolute bottom-20 left-20 text-4xl animate-pulse delay-1000 opacity-25">
        📡
      </div>
      <div className="absolute bottom-10 right-10 text-3xl animate-bounce delay-500 opacity-30">
        🚀
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-blue-200 dark:border-gray-600 shadow-lg">
            <span className="text-2xl">📧</span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Información de Contacto
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Conversemos sobre tu Proyecto
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            ¿Listo para desarrollar tu próxima solución tecnológica? Contactemos para discutir tu
            proyecto
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 max-w-3xl mx-auto">
          {/* Contact Info */}
          <div className="md:space-y-4 space-y-4 grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4">
            {/* Contact Details */}
            <Card className="shadow-2xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-blue-100 dark:border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                  Información de Contacto
                  <span className="text-sm">📞</span>
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white">Email</p>
                      <p className="text-gray-600 dark:text-gray-300">haroldosorio32@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white">Teléfono</p>
                      <p className="text-gray-600 dark:text-gray-300">+51 938205664</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white">Ubicación</p>
                      <p className="text-gray-600 dark:text-gray-300">Arequipa, Perú</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full flex items-center justify-center">
                      <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white">LinkedIn</p>
                      <a
                        href="https://linkedin.com/in/harold-gonzalo-osorio-flores"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                      >
                        harold-gonzalo-osorio-flores
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full flex items-center justify-center">
                      <Github className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white">GitHub</p>
                      <a
                        href="https://github.com/HaroldOsorioFlores"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                      >
                        HaroldOsorioFlores
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Schedule Meeting */}
            <Card className="shadow-2xl border-0 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">📧</div>
                <Mail className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                <h3 className="text-xl font-semibold mb-2">Contacta por Email</h3>
                <p className="text-blue-100 mb-4">
                  Envíame un mensaje directo para discutir tu proyecto y cómo puedo ayudarte
                </p>
                <Button
                  className="bg-white text-blue-600 hover:bg-gray-100 w-full shadow-lg"
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
              </CardContent>
            </Card>
            {/* Response Time */}
            <div className="md:col-span-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 shadow-lg">
              <div className="flex items-center gap-2 text-green-700 dark:text-green-400">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Respuesta garantizada en 24 horas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
