import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const Hero = () => {
    const { t } = useLanguage();
    const { theme } = useTheme();

    return (
        <section className={`pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden relative transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-900' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text content */}
                    <div className="text-center lg:text-left z-10">
                        <div className="animate-fade-in-up" style={{ animationDelay: '0ms' }}>
                            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                                <span className="gradient-text">{t.headline}</span>
                            </h1>
                        </div>
                        <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                            <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                                {t.subheadline}
                            </p>
                        </div>
                        <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" id="download">
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.moonksoftware.shoppinglist"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-brand-600 hover:bg-brand-700 transition-all shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50 transform hover:-translate-y-1"
                                >
                                    <i className="fa-brands fa-google-play text-xl mr-3"></i>
                                    <div className="text-left">
                                        <div className="text-xs uppercase opacity-80">{t.get_it_on}</div>
                                        <div className="font-bold leading-none">{t.google_play}</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* App Phone Frame */}
                    <div className="relative lg:h-auto flex justify-center items-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                        {/* Background Pulse Blob */}
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] blur-3xl rounded-full -z-10 animate-pulse ${theme === 'dark' ? 'bg-brand-900/20' : 'bg-brand-200/50'}`}></div>

                        <div className={`relative w-64 h-[535px] rounded-[2rem] border-8 shadow-2xl flex flex-col items-center justify-center overflow-hidden ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-gray-200 border-gray-900'}`}>
                            <img
                                src="/images/1.jpg"
                                alt="App Screenshot"
                                className="absolute inset-0 w-full h-full object-cover object-top"
                                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/390x844/22c55e/ffffff?text=Listify'; }}
                            />
                            {/* Notch */}
                            <div className={`absolute top-0 w-24 h-4 rounded-b-xl ${theme === 'dark' ? 'bg-slate-700' : 'bg-gray-900'}`}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
