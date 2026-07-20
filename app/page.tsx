"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Car,
  Home as HomeIcon,
  Heart,
  UserX,
  Building2,
  FileText,
  Users,
  Briefcase,
  Lock,
  Wheat,
  Ship,
  Plane,
  Award,
  Sparkles,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
} from "lucide-react";
import Navbar from "./components/Navbar";

export default function Home() {
  const personalServices = [
    { title: "Motor Vehicle Insurance", icon: Car },
    { title: "Home & Property Insurance", icon: HomeIcon },
    { title: "Life & Health Insurance", icon: Heart },
    { title: "Personal Accident Insurance", icon: UserX },
  ];

  const businessServices = [
    { title: "Commercial Property Insurance", icon: Building2 },
    { title: "Liability Insurance", icon: FileText },
    { title: "Workers Compensation", icon: Users },
    { title: "Business Interruption Insurance", icon: Briefcase },
    { title: "Cyber Risk Insurance", icon: Lock },
  ];

  const specializedServices = [
    { title: "Agricultural Insurance", icon: Wheat },
    { title: "Marine Cargo Insurance", icon: Ship },
    { title: "Travel Insurance", icon: Plane },
    { title: "Group Insurance Schemes", icon: Users },
  ];

  const whyChooseUs = [
    {
      title: "Expertise",
      desc: "Seasoned professionals with deep knowledge of the Kenyan insurance landscape.",
      icon: Award,
    },
    {
      title: "Customer Focus",
      desc: "Tailored advice and responsive service to meet individual client needs.",
      icon: Heart,
    },
    {
      title: "Comprehensive Coverage",
      desc: "Access to a broad network of insurers for optimal policy selection.",
      icon: ShieldCheck,
    },
    {
      title: "Innovation",
      desc: "Utilizing technology for efficient claims processing and policy management.",
      icon: Sparkles,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-blue-900 to-blue-950 text-white py-24 lg:py-32">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
            alt="Nairobi Skyline"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-800/80 border border-blue-700/50 rounded-full px-4 py-1.5 mb-6 text-blue-200 text-xs font-semibold tracking-wide uppercase">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                Trusted Risk Management in Kenya
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white mb-6">
                Protecting What Matters <span className="text-blue-400">Most</span>.
              </h1>
              <p className="text-lg text-blue-100/90 mb-8 leading-relaxed">
                Ethos Insurance Agency Ltd delivers comprehensive, tailored insurance solutions empowering individuals, families, and businesses across Kenya to thrive without fear of uncertainty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition duration-200"
                >
                  Get a Free Quote
                  <ChevronRight className="w-5 h-5" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl backdrop-blur-md transition duration-200 border border-white/10"
                >
                  Explore Services
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative mx-auto w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
                <Image
                  src="/insuraance.png"
                  alt="Professional Consultants"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Executive Summary & About Us */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg border border-blue-50">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
                alt="Ethos Team"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">About Ethos</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-6">
                Your Trusted Insurance Partner in Nairobi
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Established in 2018, Ethos Insurance Agency Ltd is a leading independent insurance agency based in Nairobi, Kenya. We specialize in providing comprehensive insurance solutions tailored to the unique needs of individuals, families, and businesses across Kenya.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                At Ethos Insurance Agency Ltd, we believe insurance is more than just a policy—it’s about building trust and providing peace of mind. We partner with reputable insurers to offer a wide range of products, ensuring optimal coverage at competitive rates.
              </p>

              {/* Vision & Mission Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                  <h3 className="font-bold text-blue-900 mb-1">Our Vision</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    To be the most trusted insurance agency in East Africa, empowering individuals and businesses to thrive without fear.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                  <h3 className="font-bold text-blue-900 mb-1">Our Mission</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    To deliver exceptional services through expertise, transparency, and personalized solutions that protect assets and futures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">What We Offer</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">Comprehensive Insurance Services</h2>
            <p className="text-slate-600 mt-4">
              Explore our wide variety of personal, business, and specialized insurance packages designed to cover all risk vectors.
            </p>
          </div>

          <div className="space-y-16">
            {/* Personal Insurance */}
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-6 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                Personal Insurance
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {personalServices.map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      whileHover={{ y: -5 }}
                      key={idx}
                      className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-slate-100"
                    >
                      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="font-semibold text-slate-900 mb-2">{service.title}</h4>
                      <p className="text-xs text-slate-500">Comprehensive protection tailored for peace of mind.</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Business Insurance */}
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-6 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                Business Insurance
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {businessServices.map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      whileHover={{ y: -5 }}
                      key={idx}
                      className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-slate-100"
                    >
                      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="font-semibold text-slate-900 mb-2">{service.title}</h4>
                      <p className="text-xs text-slate-500">Safeguard enterprise assets, workforce, and operational workflow.</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Specialized Solutions */}
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-6 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                Specialized Solutions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {specializedServices.map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      whileHover={{ y: -5 }}
                      key={idx}
                      className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-slate-100"
                    >
                      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="font-semibold text-slate-900 mb-2">{service.title}</h4>
                      <p className="text-xs text-slate-500">Industry-specific policies covering unique risk profiles.</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Ethos */}
      <section id="why-us" className="py-20 bg-blue-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-300 font-semibold uppercase tracking-wider text-sm">Why Ethos</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Why Choose Ethos Insurance Agency?</h2>
            <p className="text-blue-100/80 mt-4">
              Led by industry veterans, our team combines local insight with global best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-blue-800/40 border border-blue-700/50 p-6 rounded-2xl backdrop-blur-sm">
                  <div className="w-12 h-12 bg-blue-600/30 text-blue-300 rounded-xl flex items-center justify-center mb-4 border border-blue-500/30">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-blue-100/70 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">Get In Touch</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-6">Contact Ethos Insurance Agency</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Ready to protect what matters most? Visit our offices in Nairobi, give us a call, or send us a message. Our team is standing by to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Address</h4>
                    <p className="text-slate-600 text-sm">Nairobi, Kenya</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Phone</h4>
                    <p className="text-slate-600 text-sm">+254 700 123 456</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Email</h4>
                    <p className="text-slate-600 text-sm">info@ethosinsurance.co.ke</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Send Us a Message</h3>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl transition shadow-md"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-blue-200/80 py-12 border-t border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-bold text-white tracking-tight">ETHOS INSURANCE AGENCY LTD</span>
            </div>
            <p className="text-sm">
              © {new Date().getFullYear()} Ethos Insurance Agency Ltd. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}