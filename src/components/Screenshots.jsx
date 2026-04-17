import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import Reveal from './Reveal';

const SHOTS = [
    { src: '/images/1.jpg', fallback: 'https://placehold.co/390x844/22c55e/ffffff?text=Home', titleKey: 'gallery_img2_title', descKey: 'gallery_img2_desc' },
    { src: '/images/3.jpg', fallback: 'https://placehold.co/390x844/16a34a/ffffff?text=Create+List', titleKey: 'gallery_img3_title', descKey: 'gallery_img3_desc' },
    { src: '/images/2.jpg', fallback: 'https://placehold.co/390x844/15803d/ffffff?text=Share+List', titleKey: 'gallery_img4_title', descKey: 'gallery_img4_desc' },
    { src: '/images/4.jpg', fallback: 'https://placehold.co/390x844/166534/ffffff?text=Use+List', titleKey: 'gallery_img5_title', descKey: 'gallery_img5_desc' },
];

const Screenshots = () => {
    const { t } = useLanguage();
    const { theme } = useTheme();

    return (
        <section className={`py-16 transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-900' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="animate-fade-in-up" style={{ animationDelay: '0ms' }}>
                        <h2 className={`text-3xl font-bold tracking-tight mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                            {t.gallery_title}
                        </h2>
                    </div>
                    <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                        <p className={`text-lg ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                            {t.gallery_subtitle}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {SHOTS.map((shot, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col gap-4 items-center hover:scale-[1.02] transition-transform duration-300 animate-fade-in-up"
                            style={{ animationDelay: `${idx * 100}ms` }}
                        >
                            {/* Phone Frame */}
                            <div className={`relative w-64 h-[535px] rounded-[2rem] border-8 shadow-2xl flex flex-col items-center justify-center overflow-hidden ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-gray-200 border-gray-900'}`}>
                                <img
                                    src={shot.src}
                                    alt={t[shot.titleKey]}
                                    className="absolute inset-0 w-full h-full object-cover object-top"
                                    onError={(e) => { e.target.onerror = null; e.target.src = shot.fallback; }}
                                />
                                {/* Notch */}
                                <div className={`absolute top-0 w-24 h-4 rounded-b-xl ${theme === 'dark' ? 'bg-slate-700' : 'bg-gray-900'}`}></div>
                            </div>

                            {/* Text underneath */}
                            <div className="text-center">
                                <h3 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                                    {t[shot.titleKey]}
                                </h3>
                                <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                                    {t[shot.descKey]}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Screenshots;
