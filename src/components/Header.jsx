import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const { language, toggleLanguage, t } = useLanguage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        // Set favicon for Listify app pages
        const link = document.querySelector("link[rel~='icon']");
        if (link) {
            link.href = '/images/icon.png';
        }
        // Optional: Update title if needed, or leave as is
    }, []);

    return (
        <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-100 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
                            <img src="/images/logoMoonK.png" alt="MoonK" className="w-10 h-10" />
                            Listify
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-6">
                        <a href="https://play.google.com/store/apps/details?id=com.moonksoftware.shoppinglist" className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2 rounded-full font-medium transition-all shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40 text-sm">
                            {t.download}
                        </a>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800"
                            aria-label="Toggle Dark Mode"
                        >
                            <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'} text-lg`}></i>
                        </button>

                        {/* Language Toggle */}
                        <button
                            onClick={toggleLanguage}
                            className="text-sm font-medium text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400 transition-colors px-3 py-1 rounded-full border border-gray-200 dark:border-slate-700 hover:border-brand-200 dark:hover:border-brand-800"
                        >
                            <span>{language.toUpperCase()}</span>
                        </button>
                    </div>

                    {/* Mobile Menu Button - Keeping it simple as in original */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                            aria-label="Toggle Dark Mode"
                        >
                            <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
                        </button>
                        <button
                            onClick={toggleLanguage}
                            className="text-sm font-medium text-slate-600 dark:text-slate-300 border border-gray-200 dark:border-slate-700 px-2 py-1 rounded"
                        >
                            <span>{language.toUpperCase()}</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
