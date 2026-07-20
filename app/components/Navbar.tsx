"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Why Us", href: "#why-us" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                {/* Brand Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-20 h-20 overflow-hidden rounded-lg">
                        <Image
                            src="/logo.png"
                            alt="Ethos Insurance Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div>
                        <span className="text-xl font-bold text-blue-950 tracking-tight block leading-tight">
                            ETHOS
                        </span>
                        <span className="text-xs font-medium text-blue-600 uppercase tracking-widest block leading-none">
                            Insurance Agency
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="tel:+254700123456"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-medium text-sm transition shadow-sm hover:shadow-blue-200 hover:shadow-lg"
                    >
                        <Phone className="w-4 h-4" />
                        <span>+254 700 123 456</span>
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-slate-600 hover:text-blue-600 focus:outline-none"
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-blue-50 px-4 pt-2 pb-6"
                    >
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-slate-600 font-medium py-1 hover:text-blue-600"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="tel:+254700123456"
                                className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-medium text-sm mt-2"
                            >
                                <Phone className="w-4 h-4" />
                                <span>Call Us Now</span>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}