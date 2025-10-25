"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { CheckCircle, DollarSign, Smartphone, TrendingUp, Users, Clock, Star, PlayCircle, Shield, Zap } from 'lucide-react'

interface Question {
  id: number
  question: string
  options: string[]
  type: 'multiple' | 'intention'
}

const questions: Question[] = [
  {
    id: 1,
    question: "¿Cuál es tu situación financiera actual?",
    options: [
      "Necesito urgentemente ingresos extra",
      "Quiero complementar mis ingresos actuales",
      "Busco independencia financiera total",
      "Solo quiero probar si realmente funciona"
    ],
    type: 'multiple'
  },
  {
    id: 2,
    question: "¿Cuánto tiempo tienes disponible por día?",
    options: [
      "Menos de 1 hora (súper ocupado/a)",
      "1 a 2 horas (tiempo ajustado)",
      "2 a 4 horas (tiempo razonable)",
      "Más de 4 horas (tiempo flexible)"
    ],
    type: 'multiple'
  },
  {
    id: 3,
    question: "¿Ya has intentado ganar dinero online antes?",
    options: [
      "Nunca lo intenté, soy principiante total",
      "Lo intenté pero no funcionó",
      "Ya gano algo, pero muy poco",
      "He probado varias cosas sin éxito"
    ],
    type: 'multiple'
  },
  {
    id: 4,
    question: "¿Qué te motiva más a buscar ingresos extra?",
    options: [
      "Pagar las cuentas al día",
      "Realizar un sueño específico",
      "Tener más libertad y seguridad",
      "Ayudar a mi familia"
    ],
    type: 'intention'
  },
  {
    id: 5,
    question: "¿Cuál es tu mayor miedo sobre ganar dinero online?",
    options: [
      "Ser estafado o caer en una trampa",
      "No poder aprender",
      "No tener dinero para invertir",
      "No tener tiempo suficiente"
    ],
    type: 'multiple'
  },
  {
    id: 6,
    question: "Si pudieras generar ingresos extra, ¿cuál sería el primer uso?",
    options: [
      "Pagar deudas y organizarme",
      "Invertir en algo que siempre quise",
      "Ahorrar para emergencias",
      "Mejorar la vida de mi familia"
    ],
    type: 'intention'
  },
  {
    id: 7,
    question: "¿Tienes acceso regular a internet desde tu celular?",
    options: [
      "Sí, uso el celular todo el día",
      "Sí, pero solo en algunos momentos",
      "Tengo, pero prefiero la computadora",
      "Tengo acceso limitado"
    ],
    type: 'multiple'
  },
  {
    id: 8,
    question: "¿Cuánto te gustaría ganar por mes como ingreso extra?",
    options: [
      "$200 a $600 USD (ya cambiaría todo)",
      "$600 a $1,200 USD (sería increíble)",
      "$1,200 a $2,000 USD (mi sueño)",
      "Más de $2,000 USD (libertad total)"
    ],
    type: 'intention'
  },
  {
    id: 9,
    question: "¿Qué harías si tuvieras certeza de que algo funciona?",
    options: [
      "Empezaría inmediatamente",
      "Estudiaría un poco más antes",
      "Pediría opinión a alguien",
      "Esperaría el momento perfecto"
    ],
    type: 'multiple'
  },
  {
    id: 10,
    question: "¿Cuál es tu mayor dificultad financiera hoy?",
    options: [
      "El dinero no alcanza a fin de mes",
      "Tengo deudas que me preocupan",
      "No puedo realizar mis sueños",
      "Vivo ajustado, sin ahorros"
    ],
    type: 'multiple'
  },
  {
    id: 11,
    question: "Si te mostrara un método simple y comprobado, tú:",
    options: [
      "Prestarías atención total",
      "Lo analizarías con cuidado",
      "Lo probarías con cautela",
      "Seguirías exactamente como enseña"
    ],
    type: 'intention'
  },
  {
    id: 12,
    question: "¿Qué más te atrae de la idea de ingresos automáticos?",
    options: [
      "Ganar dinero mientras duermo",
      "No depender solo de mi trabajo",
      "Tener más tiempo para lo importante",
      "Seguridad financiera para siempre"
    ],
    type: 'intention'
  },
  {
    id: 13,
    question: "¿Estás dispuesto/a a dedicar algunas semanas para cambiar tu vida?",
    options: [
      "Sí, estoy determinado/a",
      "Sí, pero con algunas dudas",
      "Tal vez, depende de qué sea",
      "Necesito saber más detalles"
    ],
    type: 'intention'
  }
]

export default function QuizRendaAutomatica() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResult, setShowResult] = useState(false)
  const [started, setStarted] = useState(false)

  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const startQuiz = () => {
    setStarted(true)
  }

  if (!started) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
        <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8">
          <div className="max-w-6xl mx-auto">
            {/* Header com prueba social - MOBILE OPTIMIZED */}
            <div className="text-center mb-8 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4 sm:mb-6">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                <span className="text-sm sm:text-lg font-semibold text-emerald-700 bg-emerald-100 px-3 sm:px-4 py-2 rounded-full text-center">
                  Ya ayudamos a más de 7,800 personas en todo el mundo
                </span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm sm:text-base text-gray-600 font-medium text-center">4.9/5 - Más de 2,300 reseñas</span>
              </div>
            </div>

            {/* Hero Section - MOBILE FIRST */}
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 items-center mb-12 sm:mb-16">
              <div className="text-center lg:text-left order-2 lg:order-1">
                <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  Descubre Tu{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                    Perfil Ideal
                  </span>
                  <br />
                  Para Ganar Dinero Online{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                    Aún en 2025
                  </span>
                </h1>
                <p className="text-base sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
                  En solo 3 minutos, descubre si tienes el perfil perfecto para el 
                  <strong className="text-emerald-600"> Método Ingresos Automáticos</strong> y 
                  cómo puedes empezar a generar tus primeros ingresos extra este mismo mes.
                </p>
                
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center lg:justify-start">
                  <div className="flex items-center gap-2 bg-white px-3 sm:px-4 py-2 rounded-full shadow-md mx-auto sm:mx-0">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium whitespace-nowrap">100% desde tu celular</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 sm:px-4 py-2 rounded-full shadow-md mx-auto sm:mx-0">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium whitespace-nowrap">Sin experiencia previa</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 sm:px-4 py-2 rounded-full shadow-md mx-auto sm:mx-0">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium whitespace-nowrap">Resultados comprobados</span>
                  </div>
                </div>

                <Button 
                  onClick={startQuiz}
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold px-6 sm:px-10 py-4 sm:py-6 text-lg sm:text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                >
                  <PlayCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 flex-shrink-0" />
                  Comenzar Test Gratuito
                </Button>
              </div>

              <div className="relative order-1 lg:order-2">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center" 
                    alt="Persona exitosa trabajando con laptop"
                    className="w-full h-[250px] sm:h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 text-white">
                    <p className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">María Elena, Colombia</p>
                    <p className="text-xs sm:text-sm opacity-90">"En 2 meses generé $800 USD extra"</p>
                  </div>
                </div>
                
                {/* Elementos flotantes - RESPONSIVE */}
                <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-white p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <DollarSign className="w-4 h-4 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-gray-900">+$1,200 USD</p>
                      <p className="text-xs text-gray-600">este mes</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-emerald-600 text-white p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Zap className="w-4 h-4 sm:w-6 sm:h-6 flex-shrink-0" />
                    <div>
                      <p className="text-xs sm:text-sm font-bold">24/7</p>
                      <p className="text-xs opacity-90">Automático</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonios - MOBILE OPTIMIZED */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-12 sm:mb-16">
              <div className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-xl border border-emerald-100 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" 
                    alt="Carlos testimonial"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Carlos R.</p>
                    <p className="text-xs sm:text-sm text-gray-600">México</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-2 sm:mb-3">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  "Increíble! En mi primer mes ya recuperé la inversión y ahora genero $600 USD mensuales extra. El método es súper fácil de seguir."
                </p>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-xl border border-emerald-100 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face" 
                    alt="Ana testimonial"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Ana L.</p>
                    <p className="text-xs sm:text-sm text-gray-600">Argentina</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-2 sm:mb-3">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  "Soy mamá soltera y esto cambió mi vida. Trabajo solo 2 horas al día y ya pude pagar todas mis deudas. ¡Gracias!"
                </p>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-xl border border-emerald-100 hover:shadow-2xl transition-all duration-300 sm:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" 
                    alt="Roberto testimonial"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Roberto M.</p>
                    <p className="text-xs sm:text-sm text-gray-600">Chile</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-2 sm:mb-3">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  "Tenía miedo de las estafas online, pero esto es 100% real. Ya llevo 4 meses generando ingresos constantes. Lo recomiendo totalmente."
                </p>
              </div>
            </div>

            {/* Beneficios - MOBILE OPTIMIZED */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              <div className="text-center group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto shadow-xl group-hover:shadow-2xl">
                  <Smartphone className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Solo Necesitas tu Celular</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base px-2">Funciona 100% desde tu smartphone, desde cualquier lugar del mundo, las 24 horas del día.</p>
              </div>

              <div className="text-center group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto shadow-xl group-hover:shadow-2xl">
                  <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Método Paso a Paso</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base px-2">Sistema simple y probado que cualquier persona puede seguir, sin conocimientos técnicos previos.</p>
              </div>

              <div className="text-center group hover:scale-105 transition-all duration-300 sm:col-span-2 lg:col-span-1">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto shadow-xl group-hover:shadow-2xl">
                  <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Resultados Reales</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base px-2">Miles de personas comunes generando ingresos extra reales todos los días con este método.</p>
              </div>
            </div>

            {/* CTA final - MOBILE OPTIMIZED */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl sm:rounded-3xl blur-xl opacity-20"></div>
              <div className="relative bg-gradient-to-r from-emerald-600 to-green-600 p-6 sm:p-12 rounded-2xl sm:rounded-3xl text-white text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                  ¿Listo para descubrir tu potencial?
                </h2>
                <p className="text-emerald-100 mb-6 sm:mb-8 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed px-2">
                  Responde algunas preguntas rápidas y descubre si tienes el perfil ideal 
                  para empezar a ganar dinero online hoy mismo.
                </p>
                <Button 
                  onClick={startQuiz}
                  size="lg"
                  className="w-full sm:w-auto bg-white text-emerald-600 hover:bg-emerald-50 font-bold px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
                >
                  <PlayCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 flex-shrink-0" />
                  Comenzar Test Gratuito Ahora
                </Button>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-6 sm:mt-8 text-emerald-100">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">Solo 3 minutos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">100% confidencial</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">Resultado inmediato</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
        <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8">
          <div className="max-w-5xl mx-auto">
            {/* Resultado - MOBILE OPTIMIZED */}
            <Card className="border-2 border-emerald-200 shadow-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-emerald-600 to-green-600 text-white relative">
                <div className="absolute inset-0 opacity-10">
                  <img 
                    src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=300&fit=crop" 
                    alt="Celebration background"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative text-center py-6 sm:py-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl">
                    <CheckCircle className="w-8 h-8 sm:w-12 sm:h-12 text-emerald-600" />
                  </div>
                  <CardTitle className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4 px-2">
                    🎉 ¡FELICITACIONES! ¡Tienes el perfil IDEAL!
                  </CardTitle>
                  <p className="text-emerald-100 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto px-4">
                    Tus respuestas muestran que estás completamente listo para el Método Ingresos Automáticos
                  </p>
                </div>
              </CardHeader>
              
              <CardContent className="p-4 sm:p-12">
                <div className="text-center mb-8 sm:mb-12">
                  <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 px-2">
                    Basado en tus respuestas, identificamos que tú:
                  </h2>
                  
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12">
                    <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-4 sm:p-8 rounded-xl sm:rounded-2xl border-2 border-emerald-200 hover:shadow-xl transition-all duration-300">
                      <CheckCircle className="w-8 h-8 sm:w-12 sm:h-12 text-emerald-600 mx-auto mb-3 sm:mb-4" />
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Tienes la motivación correcta</h3>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">Demuestras el deseo genuino de cambiar tu situación financiera y mejorar tu vida.</p>
                    </div>
                    <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-4 sm:p-8 rounded-xl sm:rounded-2xl border-2 border-emerald-200 hover:shadow-xl transition-all duration-300">
                      <CheckCircle className="w-8 h-8 sm:w-12 sm:h-12 text-emerald-600 mx-auto mb-3 sm:mb-4" />
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Estás dispuesto a actuar</h3>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">Tus respuestas muestran que no eres solo otro curioso, sino alguien que toma acción.</p>
                    </div>
                    <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-4 sm:p-8 rounded-xl sm:rounded-2xl border-2 border-emerald-200 hover:shadow-xl transition-all duration-300">
                      <CheckCircle className="w-8 h-8 sm:w-12 sm:h-12 text-emerald-600 mx-auto mb-3 sm:mb-4" />
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Tienes el perfil ideal</h3>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">Te adaptas perfectamente a nuestro método comprobado y exitoso.</p>
                    </div>
                    <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-4 sm:p-8 rounded-xl sm:rounded-2xl border-2 border-emerald-200 hover:shadow-xl transition-all duration-300">
                      <CheckCircle className="w-8 h-8 sm:w-12 sm:h-12 text-emerald-600 mx-auto mb-3 sm:mb-4" />
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Puedes empezar hoy</h3>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">Tienes todo lo que necesitas para iniciar tu jornada hacia la libertad financiera.</p>
                    </div>
                  </div>

                  {/* Imagen de éxito - MOBILE OPTIMIZED */}
                  <div className="relative mb-8 sm:mb-12">
                    <img 
                      src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=300&fit=crop" 
                      alt="Equipo exitoso celebrando"
                      className="w-full h-48 sm:h-64 object-cover rounded-xl sm:rounded-2xl shadow-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl sm:rounded-2xl"></div>
                    <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 text-white">
                      <p className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">+7,800 personas ya cambiaron su vida</p>
                      <p className="text-sm sm:text-lg opacity-90">Tú puedes ser el próximo éxito</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-2xl sm:rounded-3xl p-4 sm:p-8 mb-8 sm:mb-12">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                      🚨 ATENCIÓN: ¡Esta es tu oportunidad!
                    </h3>
                    <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-lg leading-relaxed">
                      Las personas con tu perfil son exactamente las que más éxito tienen con nuestro método. 
                      De las <strong>7,800 personas que ya hemos ayudado</strong>, quienes tenían respuestas similares a las tuyas 
                      fueron las que lograron los mejores resultados.
                    </p>
                    <p className="text-gray-700 font-semibold text-sm sm:text-lg">
                      No dejes pasar esta oportunidad. Tu situación financiera puede cambiar 
                      <strong className="text-emerald-600"> este mismo mes</strong>.
                    </p>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl sm:rounded-3xl blur-xl opacity-20"></div>
                    <div className="relative bg-gradient-to-r from-emerald-600 to-green-600 p-6 sm:p-12 rounded-2xl sm:rounded-3xl text-white">
                      <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                        Ahora mira el video que cambiará tu vida
                      </h3>
                      <p className="text-emerald-100 mb-6 sm:mb-8 text-base sm:text-xl leading-relaxed max-w-3xl mx-auto px-2">
                        Preparé un video especial mostrando exactamente cómo funciona el Método Ingresos Automáticos 
                        y cómo puedes empezar hoy mismo, aunque seas principiante total.
                      </p>
                      <Button 
                        size="lg"
                        className="w-full sm:w-auto bg-white text-emerald-600 hover:bg-emerald-50 font-bold px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
                      >
                        <PlayCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 flex-shrink-0" />
                        VER VIDEO AHORA
                      </Button>
                      
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-6 sm:mt-8 text-emerald-100">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-center">+2,300 personas lo vieron esta semana</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Zap className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                          <span className="text-xs sm:text-sm">Acceso inmediato</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-8 text-center">
                    <p className="text-base sm:text-lg text-gray-600 mb-3 sm:mb-4 font-medium px-2">
                      🎯 Método simple • 📱 Solo necesitas tu celular • ✅ Funciona desde cero
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                      <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-500 text-center">Garantía de satisfacción • Soporte 24/7 • Comunidad exclusiva</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header com progresso - MOBILE OPTIMIZED */}
          <div className="mb-8 sm:mb-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm sm:text-base">{currentQuestion + 1}</span>
                </div>
                <span className="text-base sm:text-lg font-semibold text-emerald-700">
                  Pregunta {currentQuestion + 1} de {questions.length}
                </span>
              </div>
              <span className="text-sm sm:text-base text-gray-600 bg-gray-100 px-3 sm:px-4 py-2 rounded-full">
                {Math.round(progress)}% completado
              </span>
            </div>
            <Progress value={progress} className="h-3 sm:h-4 bg-emerald-100" />
          </div>

          {/* Pergunta atual - MOBILE OPTIMIZED */}
          <Card className="shadow-2xl border-2 border-emerald-200 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-emerald-600 to-green-600 text-white relative">
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 bg-white/10 rounded-full translate-y-8 sm:translate-y-12 -translate-x-8 sm:-translate-x-12"></div>
              <CardTitle className="text-xl sm:text-2xl md:text-3xl text-center font-bold py-4 sm:py-6 relative z-10 px-2 leading-tight">
                {questions[currentQuestion].question}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-10">
              <div className="space-y-3 sm:space-y-6">
                {questions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full p-3 sm:p-6 text-left justify-start h-auto border-2 border-emerald-200 hover:border-emerald-500 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group"
                    onClick={() => handleAnswer(option)}
                  >
                    <div className="flex items-start gap-3 sm:gap-4 w-full">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-emerald-300 rounded-full flex items-center justify-center group-hover:border-emerald-500 group-hover:bg-emerald-500 transition-all duration-300 flex-shrink-0 mt-0.5">
                        <span className="text-emerald-600 group-hover:text-white font-bold text-xs sm:text-sm">{String.fromCharCode(65 + index)}</span>
                      </div>
                      <span className="text-sm sm:text-base font-medium text-gray-800 group-hover:text-emerald-700 transition-colors duration-300 text-left leading-relaxed break-words">
                        {option}
                      </span>
                    </div>
                  </Button>
                ))}
              </div>
              
              <div className="mt-6 sm:mt-10 text-center">
                <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-gray-600 font-medium">
                    Tus respuestas son confidenciales y nos ayudan a personalizar tu resultado
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-500">
                  <span>🔒 100% Seguro</span>
                  <span>⚡ Resultado Inmediato</span>
                  <span>🎯 Personalizado</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Motivación durante o quiz - MOBILE OPTIMIZED */}
          <div className="mt-6 sm:mt-8 text-center">
            <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-emerald-100 max-w-md mx-auto">
              <p className="text-base sm:text-lg text-emerald-600 font-semibold mb-2">
                ✨ Estás descubriendo tu camino hacia la libertad financiera
              </p>
              <p className="text-xs sm:text-sm text-gray-600">
                Cada respuesta nos acerca más a tu perfil ideal de éxito
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}