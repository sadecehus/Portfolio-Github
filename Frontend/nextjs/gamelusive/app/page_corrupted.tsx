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
      category: t('games.categories.lifeSkills'),
      age: "Grades 1-5",
      icon: <ShoppingCart className="h-5 w-5" />,
      description: t('games.gameDescriptions.shoppingAdventure'),
      skills: [
        t('games.skills.planning'),
        t('games.skills.readingComprehension'),
        t('games.skills.healthyLifestyleAwareness'),
      ],
      imgSrc: "shopping-adventure.png",
      gamesrc: "games/shopping-adventure",
    },
    {
      title: "Sentence Tower",
      category: t('games.categories.languageGrammar'),
      age: "Grades 1-8",
      icon: <Building className="h-5 w-5" />,
      description: t('games.gameDescriptions.sentenceTower'),
      skills: [t('games.skills.grammar'), t('games.skills.vocabularyEnhancement'), t('games.skills.sentenceConstruction')],
      imgSrc: "sentence-tower.png",
      gamesrc: "games/sentence-tower",
    },
    {
      title: "Journey to School",
      category: t('games.categories.lifeSkills'),
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

          <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-slate-700">
            {t('partners.description')}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "LITORINOS", country: "LITHUANIA", img: "Litorinos.png", url:"https://www.litorinosmokykla.lt/" },
              {
                name: "Zespół Szkół NR6",
                country: "POLAND",
                img: "polonyalogo.png",
                url: "https://zs6rybnik.pl/",
              },
              { name: "KOCATURK", country: "TURKIYE", img: "TurkiyeLogo.png", url:"https://www.kocaturkdanismanlik.com" },
              {
                name: "GLOBAL EDUCATION CENTER",
                country: "NETHERLANDS",
                img: "geclogo.png",
                url:"https://www.gec.academy/"
              },
              { name: "IVAIGO", country: "LITHUANIA", img: "iviaigologo.png", url:"https://www.ivaigo.lt/" },
            ].map((partner, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-105 duration-300 border border-purple-100"
              >
                <div className="h-40 relative mb-4 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 mix-blend-multiply z-10" />
                  <Image
                    src={`${partner.img}`}
                    alt={`Logo of ${partner.name}`}
                    className="absolute inset-0 w-full h-full object-contain"
                    width={100}
                    height={100}
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">
                  {partner.name}
                </h3>
                <p className="text-slate-600 mb-4">{partner.country}</p>
                <Link
                  href={partner.url}
                  target="_blank"
                  className="text-purple-600 hover:text-purple-800 inline-flex items-center"
                >
                  {t('partners.visitWebsite')} <ExternalLink className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section
        id="games"
        ref={gamesRef}
        className="relative py-20 overflow-hidden bg-gradient-to-b from-purple-50 to-background"
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

          <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-slate-700">
            {t('games.description')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <div
                key={index}
                className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all group border border-purple-100"
              >
                <div className="h-48 relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 mix-blend-multiply z-10" />
                  <Image
                    src={`${game.imgSrc}`}
                    alt={game.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <Badge
                      variant="secondary"
                      className="bg-white/80 text-slate-800"
                    >
                      {game.age}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-900">
                      {game.title}
                    </h3>
                    <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-1 rounded-full flex items-center gap-1">
                      {game.icon} {game.category}
                    </span>
                  </div>
                  <p className="text-slate-600 mb-4">{game.description}</p>

                  <div className="mb-4">
                    <p className="text-sm font-medium text-slate-700 mb-2">
                      {t('games.skillsTargeted')}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {game.skills.map((skill, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="bg-purple-50 text-purple-700 border-purple-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <a
                    href={game.gamesrc}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="w-full border-purple-200 hover:bg-purple-50"
                    >
                      <Gamepad2 className="mr-2 h-4 w-4" /> {t('games.playNow')}
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              {t('games.viewAllGames')}
            </Button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section
        id="news"
        ref={newsRef}
        className="py-20 relative overflow-hidden bg-background"
      >
        <div className="absolute left-0 top-0 w-1/3 h-full opacity-10 z-0"></div>

        <div className="container px-4 relative z-10">
          <div className="flex items-center justify-center mb-12">
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
                {t('news.title')}
              </h2>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Featured News */}
            <div className="mb-12 bg-card rounded-xl overflow-hidden shadow-lg border border-purple-100 transform transition-transform hover:scale-[1.01] duration-300">
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 mix-blend-multiply z-10" />
                  <Image
                    src="news.png"
                    alt="Project Launch Event"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {t('news.featured')}
                    </span>
                    <span className="text-sm text-slate-500 flex items-center">
                      <Clock className="h-3.5 w-3.5 mr-1" /> April 15, 2025
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">
                    {t('news.featuredNews.title')}
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {t('news.featuredNews.description')}
                  </p>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    {t('news.readFullStory')} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* News Grid */}
            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  title: t('news.items.newGame.title'),
                  date: "March 28, 2025",
                  excerpt: t('news.items.newGame.excerpt'),
                  category: t('news.categories.games'),
                },
                {
                  title: t('news.items.teacherTraining.title'),
                  date: "March 15, 2025",
                  excerpt: t('news.items.teacherTraining.excerpt'),
                  category: t('news.categories.education'),
                },
                {
                  title: t('news.items.partnership.title'),
                  date: "February 22, 2025",
                  excerpt: t('news.items.partnership.excerpt'),
                  category: t('news.categories.partnership'),
                },
                {
                  title: t('news.items.research.title'),
                  date: "February 10, 2025",
                  excerpt: t('news.items.research.excerpt'),
                  category: t('news.categories.research'),
                },
              ].map((news, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg border border-purple-100 transform transition-transform hover:scale-105 duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-slate-100 text-slate-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {news.category}
                      </span>
                      <span className="text-sm text-slate-500 flex items-center">
                        <Clock className="h-3.5 w-3.5 mr-1" /> {news.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">
                      {news.title}
                    </h3>
                    <p className="text-slate-600 mb-6">{news.excerpt}</p>
                    <Link
                      href="#"
                      className="text-purple-600 hover:text-purple-800 inline-flex items-center font-medium"
                    >
                      {t('news.readMore')} <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                className="gap-2 border-purple-200 hover:bg-purple-50"
              >
                {t('news.viewAllNews')} <Newspaper className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Newsletter Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white"
      >
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('contact.title')}
            </h2>
            <p className="text-lg mb-8 text-blue-100">
              {t('contact.description')}
            </p>

            <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t('contact.emailPlaceholder')}
                className="flex-1 px-4 py-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-300"
                required
              />
              <Button
                type="submit"
                className="bg-white text-purple-600 hover:bg-blue-50"
              >
                {t('contact.subscribe')}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-slate-300">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">
                {t('footer.title')}
              </h3>
              <p className="mb-4">
                {t('footer.description')}
              </p>
              <div className="flex space-x-4">
                {/* Social media icons would go here */}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                {t('footer.quickLinks')}
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    {t('nav.about')}
                  </a>
                </li>
                <li>
                  <a
                    href="#partners"
                    className="hover:text-white transition-colors"
                  >
                    {t('nav.partners')}
                  </a>
                </li>
                <li>
                  <a
                    href="#games"
                    className="hover:text-white transition-colors"
                  >
                    {t('nav.games')}
                  </a>
                </li>
                <li>
                  <a
                    href="#news"
                    className="hover:text-white transition-colors"
                  >
                    {t('nav.news')}
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    {t('nav.contact')}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">{t('footer.contact')}</h4>
              <ul className="space-y-2">
                <li>Email: info@gamelusive.eu</li>
                <li>Phone: +32 123 456 789</li>
                <li>Address: Brussels, Belgium</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">{t('footer.legal')}</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    {t('footer.privacyPolicy')}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    {t('footer.termsOfUse')}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    {t('footer.cookiePolicy')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p>
              &copy; {new Date().getFullYear()} {t('footer.title')}. {t('footer.copyright')}
            </p>
            <p className="mt-2 text-sm">
              {t('footer.erasmusText')}
            </p>
            <p className="mt-2 text-sm">
              {t('footer.designedBy')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
