"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Gamepad2,
  Users,
  BookOpen,
  Download,
  ExternalLink,
  ChevronDown,
  Clock,
  ArrowRight,
  Newspaper,
  Sparkles,
  Brain,
  ShoppingCart,
  School,
  Building,
} from "lucide-react";
import Navbar from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/language-provider";
import { LanguageMetadata } from "@/components/language-metadata";

export default function Home() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  // Parallax refs for each section
  const aboutRef = useRef(null);
  const partnersRef = useRef(null);
  const gamesRef = useRef(null);
  const newsRef = useRef(null);

  const { scrollYProgress: aboutProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: partnersProgress } = useScroll({
    target: partnersRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: gamesProgress } = useScroll({
    target: gamesRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: newsProgress } = useScroll({
    target: newsRef,
    offset: ["start end", "end start"],
  });

  const aboutY = useTransform(aboutProgress, [0, 1], ["20%", "-20%"]);
  const partnersY = useTransform(partnersProgress, [0, 1], ["20%", "-20%"]);
  const gamesY = useTransform(gamesProgress, [0, 1], ["20%", "-20%"]);
  const newsY = useTransform(newsProgress, [0, 1], ["20%", "-20%"]);

  // Game data from the provided list
  const games = [
    {
      title: "Animal Detectives",
      category: t('games.categories.vocabularyEnvironment'),
      age: "Grades 1-4",
      icon: <Brain className="h-5 w-5" />,
      description: t('games.gameDescriptions.animalDetectives'),
      skills: [
        t('games.skills.vocabularyBuilding'),
        t('games.skills.environmentalAwareness'),
        t('games.skills.visualMemory'),
      ],
      imgSrc: "animal-detectives.png",
      gamesrc: "games/animal-detectives",
    },
    {
      title: "Good or Bad?",
      category: t('games.categories.socialSkills'),
      age: "Grades 1-4",
      icon: <Users className="h-5 w-5" />,
      description: t('games.gameDescriptions.goodOrBad'),
      skills: [
        t('games.skills.decisionMaking'),
        t('games.skills.socialSituationAnalysis'),
        t('games.skills.criticalThinking'),
      ],
      imgSrc: "good-or-bad.png",
      gamesrc: "games/good-or-bad",
    },
    {
      title: "Shopping Adventure",
      category: t('games.categories.mathFinance'),
      age: "Grades 1-4",
      icon: <ShoppingCart className="h-5 w-5" />,
      description: t('games.gameDescriptions.shoppingAdventure'),
      skills: [
        t('games.skills.basicMath'),
        t('games.skills.financialLiteracy'),
        t('games.skills.logicalThinking'),
      ],
      imgSrc: "shopping-adventure.png",
      gamesrc: "games/shopping-adventure",
    },
    {
      title: "Sentence Tower",
      category: t('games.categories.languageGrammar'),
      age: "Grades 1-4",
      icon: <BookOpen className="h-5 w-5" />,
      description: t('games.gameDescriptions.sentenceTower'),
      skills: [
        t('games.skills.grammarRules'),
        t('games.skills.sentenceConstruction'),
        t('games.skills.languageSkills'),
      ],
      imgSrc: "sentence-tower.png",
      gamesrc: "games/sentence-tower",
    },
    {
      title: "Journey to School",
      category: t('games.categories.socialAdaptation'),
      age: "Grades 1-4",
      icon: <School className="h-5 w-5" />,
      description: t('games.gameDescriptions.journeyToSchool'),
      skills: [t('games.skills.problemSolving'), t('games.skills.socialAwareness'), t('games.skills.decisionMaking')],
      imgSrc: "journey-to-school.png",
      gamesrc: "games/journey-to-school",
    },
  ];

  return (
    <div className="min-h-screen">
      <LanguageMetadata />
      <Navbar />

      {/* Hero Section */}
      <section ref={ref} className="relative h-screen overflow-hidden pt-16 md:pt-0">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 -z-10"
        >
          <Image
            src="gradient.png"
            alt="Educational gaming background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
        </motion.div>

        <div className="container relative z-10 text-center px-4">
          <div className="inline-block mb-6 rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-800">
            {t('hero.erasmusProject')}
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900">
            {t('hero.title')} <span className="text-purple-600">Education</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-4 text-slate-700">
            {t('hero.subtitle')}
          </p>
          <p className="text-black/50 text-sm md:text-base max-w-4xl mx-auto mb-4 px-4">{t('hero.fundingText')}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Sparkles className="mr-2 h-4 w-4" /> {t('hero.learnMore')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-200"
              onClick={() =>
                document
                  .getElementById("games")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Gamepad2 className="mr-2 h-4 w-4" /> {t('hero.ourGames')}
            </Button>
          </div>
          <div className="container mx-auto mt-4">
          <img src="fund.png" alt="erasmus" className="mx-auto w-48" /></div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-slate-700" />
        </div>
      </section>

      {/* About Project Section */}
      <section
        id="about"
        ref={aboutRef}
        className="relative py-20 overflow-hidden bg-gradient-to-br from-purple-50 to-white"
      >
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 z-0"></div>

        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-12">
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
                  {t('about.title')}
                </h2>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg mb-6 text-slate-700">
                  {t('about.description1')}
                </p>
                <p className="text-lg mb-6 text-slate-700">
                  {t('about.description2')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <Download className="mr-2 h-4 w-4" /> {t('about.projectBrochure')}
                  </Button>
                </div>
              </div>

              <div className="relative h-80 rounded-xl overflow-hidden shadow-xl transform transition-transform hover:scale-105 duration-300">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 mix-blend-multiply z-10" />
                <video
                  src="/aboutvideo.mp4"
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover"
                ></video>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-card p-6 rounded-xl shadow-md transform transition-transform hover:scale-105 duration-300 border border-purple-100">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Gamepad2 className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">
                  {t('about.gameBasedLearning.title')}
                </h3>
                <p className="text-slate-600">
                  {t('about.gameBasedLearning.description')}
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-md transform transition-transform hover:scale-105 duration-300 border border-green-100">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">
                  {t('about.curriculumIntegration.title')}
                </h3>
                <p className="text-slate-600">
                  {t('about.curriculumIntegration.description')}
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-md transform transition-transform hover:scale-105 duration-300 border border-blue-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">
                  {t('about.inclusiveEducation.title')}
                </h3>
                <p className="text-slate-600">
                  {t('about.inclusiveEducation.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section
        id="partners"
        ref={partnersRef}
        className="relative py-20 overflow-hidden bg-background"
      >
        <div className="container relative z-10 px-4">
          <div className="flex items-center justify-center mb-12">
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
                {t('partners.title')}
              </h2>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
            </div>
          </div>

          <p className="text-lg text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            {t('partners.description')}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Turkey */}
            <div className="bg-card p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-100 flex flex-col items-center">
              <div className="relative w-24 h-24 mb-4">
                <Image
                  src="/TurkiyeLogo.png"
                  alt="Turkey Partner"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-center text-slate-900 mb-2">Turkey</h3>
              <p className="text-sm text-slate-600 text-center mb-4">Project Coordinator</p>
              <Button variant="outline" size="sm" className="mt-auto">
                <ExternalLink className="mr-2 h-3 w-3" /> {t('partners.visitWebsite')}
              </Button>
            </div>

            {/* Poland */}
            <div className="bg-card p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-red-100 flex flex-col items-center">
              <div className="relative w-24 h-24 mb-4">
                <Image
                  src="/polonyalogo.png"
                  alt="Poland Partner"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-center text-slate-900 mb-2">Poland</h3>
              <p className="text-sm text-slate-600 text-center mb-4">Educational Partner</p>
              <Button variant="outline" size="sm" className="mt-auto">
                <ExternalLink className="mr-2 h-3 w-3" /> {t('partners.visitWebsite')}
              </Button>
            </div>

            {/* GEC (Northern Cyprus) */}
            <div className="bg-card p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-green-100 flex flex-col items-center">
              <div className="relative w-24 h-24 mb-4">
                <Image
                  src="/geclogo.png"
                  alt="GEC Partner"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-center text-slate-900 mb-2">GEC</h3>
              <p className="text-sm text-slate-600 text-center mb-4">Gaming Partner</p>
              <Button variant="outline" size="sm" className="mt-auto">
                <ExternalLink className="mr-2 h-3 w-3" /> {t('partners.visitWebsite')}
              </Button>
            </div>

            {/* IVIA (Italy) */}
            <div className="bg-card p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-blue-100 flex flex-col items-center">
              <div className="relative w-24 h-24 mb-4">
                <Image
                  src="/iviaigologo.png"
                  alt="IVIA Partner"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-center text-slate-900 mb-2">IVIA IGO</h3>
              <p className="text-sm text-slate-600 text-center mb-4">Technology Partner</p>
              <Button variant="outline" size="sm" className="mt-auto">
                <ExternalLink className="mr-2 h-3 w-3" /> {t('partners.visitWebsite')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section
        id="games"
        ref={gamesRef}
        className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-50 to-white"
      >
        <div className="container relative z-10 px-4">
          <div className="flex items-center justify-center mb-12">
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
                {t('games.title')}
              </h2>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
            </div>
          </div>

          <p className="text-lg text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            {t('games.description')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <motion.div
                key={game.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={`/${game.imgSrc}`}
                    alt={game.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-slate-900">
                      {game.age}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                      {game.icon}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-2">
                    <Badge variant="outline" className="text-xs">
                      {game.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    {game.title}
                  </h3>
                  <p className="text-slate-600 mb-4 text-sm">
                    {game.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-sm font-medium text-slate-900 mb-2">
                      {t('games.skillsTargeted')}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {game.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="text-xs bg-purple-100 text-purple-800"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Link href={`/${game.gamesrc}`}>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      <Gamepad2 className="mr-2 h-4 w-4" /> {t('games.playNow')}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-purple-200">
              {t('games.viewAllGames')} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section
        id="news"
        ref={newsRef}
        className="relative py-20 overflow-hidden bg-background"
      >
        <div className="container relative z-10 px-4">
          <div className="flex items-center justify-center mb-12">
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
                {t('news.title')}
              </h2>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Update */}
            <div className="bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/news.png"
                  alt="Project Updates"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-purple-600 text-white">
                    {t('news.categories.projectUpdate')}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-slate-500 mb-2">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>2 {t('news.daysAgo')}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  {t('news.articles.newGame.title')}
                </h3>
                <p className="text-slate-600 mb-4">
                  {t('news.articles.newGame.excerpt')}
                </p>
                <Button variant="outline" size="sm">
                  <Newspaper className="mr-2 h-3 w-3" /> {t('news.readMore')}
                </Button>
              </div>
            </div>

            {/* Teacher Training */}
            <div className="bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/news.png"
                  alt="Teacher Training"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-600 text-white">
                    {t('news.categories.training')}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-slate-500 mb-2">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>5 {t('news.daysAgo')}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  {t('news.articles.teacherTraining.title')}
                </h3>
                <p className="text-slate-600 mb-4">
                  {t('news.articles.teacherTraining.excerpt')}
                </p>
                <Button variant="outline" size="sm">
                  <Newspaper className="mr-2 h-3 w-3" /> {t('news.readMore')}
                </Button>
              </div>
            </div>

            {/* Partnership */}
            <div className="bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/news.png"
                  alt="Partnership News"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">
                    {t('news.categories.partnership')}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-slate-500 mb-2">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>1 {t('news.weekAgo')}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  {t('news.articles.partnership.title')}
                </h3>
                <p className="text-slate-600 mb-4">
                  {t('news.articles.partnership.excerpt')}
                </p>
                <Button variant="outline" size="sm">
                  <Newspaper className="mr-2 h-3 w-3" /> {t('news.readMore')}
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-purple-200">
              {t('news.viewAllNews')} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative py-20 overflow-hidden bg-gradient-to-br from-purple-50 to-white"
      >
        <div className="container relative z-10 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center mb-12">
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
                  {t('contact.title')}
                </h2>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
              </div>
            </div>

            <p className="text-lg text-slate-600 mb-8">
              {t('contact.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t('contact.emailPlaceholder')}
                className="flex-1 px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <Button className="bg-purple-600 hover:bg-purple-700 px-8">
                {t('contact.subscribe')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-full bg-purple-600">
                  <Gamepad2 className="h-6 w-6" />
                </div>
                <span className="font-bold text-xl">{t('footer.title')}</span>
              </div>
              <p className="text-slate-400 mb-4 max-w-md">
                {t('footer.description')}
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/TurkiyeLogo.png"
                  alt="Turkey"
                  width={40}
                  height={40}
                  className="rounded"
                />
                <Image
                  src="/polonyalogo.png"
                  alt="Poland"
                  width={40}
                  height={40}
                  className="rounded"
                />
                <Image
                  src="/geclogo.png"
                  alt="GEC"
                  width={40}
                  height={40}
                  className="rounded"
                />
                <Image
                  src="/iviaigologo.png"
                  alt="IVIA"
                  width={40}
                  height={40}
                  className="rounded"
                />
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">{t('footer.quickLinks')}</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    {t('nav.about')}
                  </a>
                </li>
                <li>
                  <a href="#partners" className="hover:text-white transition-colors">
                    {t('nav.partners')}
                  </a>
                </li>
                <li>
                  <a href="#games" className="hover:text-white transition-colors">
                    {t('nav.games')}
                  </a>
                </li>
                <li>
                  <a href="#news" className="hover:text-white transition-colors">
                    {t('nav.news')}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">{t('footer.legal')}</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {t('footer.privacyPolicy')}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {t('footer.termsOfUse')}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {t('footer.cookiePolicy')}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-400 mb-2">
              &copy; 2024 Game&apos;Lusive Education. {t('footer.copyright')}
            </p>
            <p className="text-slate-500 text-sm mb-2">
              {t('footer.erasmusText')}
            </p>
            <p className="text-slate-500 text-xs">
              {t('footer.designedBy')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
