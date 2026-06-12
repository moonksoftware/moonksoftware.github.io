import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import Reveal from '../components/Reveal';
import cipheriaTranslations from '../cipheriaTranslations.json';

const PLAY_STORE_URL = 'https://play.google.com/store';

const Cipheria = () => {
    const { theme, toggleTheme } = useTheme();
    const { language, toggleLanguage } = useLanguage();

    // Cipheria uses its own dedicated translation file, kept separate from the
    // shared site-wide translations.json so the two never get mixed.
    const c = cipheriaTranslations[language] || cipheriaTranslations.tr;

    useEffect(() => {
        const link = document.querySelector("link[rel~='icon']");
        if (link) {
            link.href = '/images/cipheria-logo.png';
        }
        document.title = `Cipheria — ${c.hero_tagline}`;
    }, [c.hero_tagline]);

    const ciphers = [
        { emoji: '🪞', title: c.cipher_atbash_title, desc: c.cipher_atbash_desc },
        { emoji: '🏛️', title: c.cipher_caesar_title, desc: c.cipher_caesar_desc },
        { emoji: '🎲', title: c.cipher_random_title, desc: c.cipher_random_desc },
    ];

    const stats = [
        { value: c.stats_levels_value, label: c.stats_levels_label },
        { value: c.stats_ciphers_value, label: c.stats_ciphers_label },
        { value: c.stats_langs_value, label: c.stats_langs_label },
        { value: c.stats_offline_value, label: c.stats_offline_label },
    ];

    const features = [
        { icon: 'fa-lightbulb', title: c.feature_hint_title, desc: c.feature_hint_desc },
        { icon: 'fa-heart', title: c.feature_lives_title, desc: c.feature_lives_desc },
        { icon: 'fa-graduation-cap', title: c.feature_tutorial_title, desc: c.feature_tutorial_desc },
        { icon: 'fa-circle-half-stroke', title: c.feature_theme_title, desc: c.feature_theme_desc },
        { icon: 'fa-music', title: c.feature_audio_title, desc: c.feature_audio_desc },
        { icon: 'fa-plane', title: c.feature_offline_title, desc: c.feature_offline_desc },
    ];

    // Phone-frame screenshots — empty placeholders for now; drop a `src` in to
    // show the real in-app image later (same phone mockup style as Listify).
    const shots = [
        { src: null, title: c.gallery_shot1_title },
        { src: null, title: c.gallery_shot2_title },
        { src: null, title: c.gallery_shot3_title },
        { src: null, title: c.gallery_shot4_title },
    ];

    const card = theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100';
    const muted = theme === 'dark' ? 'text-slate-400' : 'text-slate-600';

    return (
        <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
            {/* Header */}
            <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-100 dark:border-slate-800 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link to="/" className="flex-shrink-0 flex items-center gap-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                            <img src="/images/cipheria-logo.png" alt="Cipheria" className="w-10 h-10 rounded-xl bg-white" />
                            <span className="bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">{c.headline}</span>
                        </Link>

                        {/* Nav — always shown (no mobile menu) */}
                        <div className="flex items-center space-x-3 sm:space-x-6">
                            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full font-medium transition-all shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 text-sm">
                                {c.download}
                            </a>
                            <button onClick={toggleTheme} className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800" aria-label="Toggle Dark Mode">
                                <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'} text-lg`}></i>
                            </button>
                            <button onClick={toggleLanguage} className="text-sm font-medium text-slate-600 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition-colors px-3 py-1 rounded-full border border-gray-200 dark:border-slate-700 hover:border-purple-200 dark:hover:border-purple-800">
                                {language.toUpperCase()}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="pt-16">
                {/* Hero */}
                <section className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-white dark:from-purple-900/20 dark:to-slate-900"></div>
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"></div>
                    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 md:py-32">
                        <Reveal>
                            <img src="/images/cipheria-logo.png" alt="Cipheria" className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-6 rounded-3xl shadow-xl shadow-purple-500/20 bg-white" />
                            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
                                <span className="bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">{c.headline}</span>
                            </h1>
                            <p className="text-xl md:text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-6">{c.hero_tagline}</p>
                            <p className="text-lg md:text-xl italic text-purple-600 dark:text-purple-400 mb-8">{c.hero_hook}</p>
                            <p className={`text-base md:text-lg max-w-2xl mx-auto mb-10 ${muted}`}>{c.hero_desc}</p>
                            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-all shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50">
                                <i className="fa-brands fa-google-play"></i>
                                {c.download_cta}
                            </a>
                        </Reveal>
                    </div>
                </section>

                {/* Stats */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
                    <Reveal>
                        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 rounded-2xl border p-6 md:p-8 shadow-sm ${card}`}>
                            {stats.map((s) => (
                                <div key={s.label} className="text-center">
                                    <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">{s.value}</div>
                                    <div className={`text-xs md:text-sm mt-1 ${muted}`}>{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </section>

                {/* Ciphers */}
                <section id="ciphers" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
                    <Reveal>
                        <div className="text-center mb-14">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">🧩 {c.ciphers_title}</h2>
                            <p className={`max-w-2xl mx-auto ${muted}`}>{c.ciphers_subtitle}</p>
                        </div>
                    </Reveal>
                    <div className="grid md:grid-cols-3 gap-6">
                        {ciphers.map((cipher, i) => (
                            <Reveal key={cipher.title} delay={i * 150}>
                                <div className={`h-full p-8 rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-xl ${card}`}>
                                    <div className="text-5xl mb-5">{cipher.emoji}</div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{cipher.title}</h3>
                                    <p className={`text-sm leading-relaxed ${muted}`}>{cipher.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>

                {/* Screenshots (phone frames — empty placeholders for now) */}
                <section className="bg-gray-50 dark:bg-slate-800/40 py-20 md:py-28">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Reveal>
                            <div className="text-center mb-14">
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">📱 {c.gallery_title}</h2>
                                <p className={`max-w-2xl mx-auto ${muted}`}>{c.gallery_subtitle}</p>
                            </div>
                        </Reveal>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {shots.map((shot, idx) => (
                                <Reveal key={idx} delay={idx * 120} className="flex flex-col gap-4 items-center">
                                    {/* Phone Frame */}
                                    <div className={`relative w-64 h-[535px] rounded-[2rem] border-8 shadow-2xl flex flex-col items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-[1.02] ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-gray-200 border-gray-900'}`}>
                                        {shot.src ? (
                                            <img src={shot.src} alt={shot.title} className="absolute inset-0 w-full h-full object-cover object-top" />
                                        ) : (
                                            <div className={`flex flex-col items-center gap-3 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
                                                <i className="fa-solid fa-image text-4xl"></i>
                                                <span className="text-sm font-medium">{c.gallery_coming_soon}</span>
                                            </div>
                                        )}
                                        {/* Notch */}
                                        <div className={`absolute top-0 w-24 h-4 rounded-b-xl ${theme === 'dark' ? 'bg-slate-700' : 'bg-gray-900'}`}></div>
                                    </div>
                                    {/* Caption */}
                                    <h3 className="font-bold text-slate-900 dark:text-white">{shot.title}</h3>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Languages + Levels (two-up) */}
                <section className="py-20 md:py-28">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
                        <Reveal>
                            <div className={`h-full p-8 md:p-10 rounded-2xl border ${card}`}>
                                <div className="text-4xl mb-4">🌍</div>
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">{c.lang_title}</h2>
                                <p className={`leading-relaxed ${muted}`}>{c.lang_desc}</p>
                            </div>
                        </Reveal>
                        <Reveal delay={150}>
                            <div className={`h-full p-8 md:p-10 rounded-2xl border ${card}`}>
                                <div className="text-4xl mb-4">📚</div>
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">{c.levels_title}</h2>
                                <p className={`leading-relaxed ${muted}`}>{c.levels_desc}</p>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* Stars */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
                    <Reveal>
                        <div className="text-5xl mb-5 tracking-widest">⭐⭐⭐</div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-5">{c.stars_title}</h2>
                        <p className={`max-w-2xl mx-auto leading-relaxed ${muted}`}>{c.stars_desc}</p>
                    </Reveal>
                </section>

                {/* Features grid */}
                <section id="features" className="bg-gray-50 dark:bg-slate-800/40 py-20 md:py-28">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Reveal>
                            <div className="text-center mb-14">
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">💡 {c.features_title}</h2>
                                <p className={`max-w-2xl mx-auto ${muted}`}>{c.features_subtitle}</p>
                            </div>
                        </Reveal>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((f, i) => (
                                <Reveal key={f.title} delay={(i % 3) * 120}>
                                    <div className={`h-full p-7 rounded-2xl border transition-all hover:shadow-lg ${card}`}>
                                        <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center mb-4">
                                            <i className={`fa-solid ${f.icon} text-purple-600 dark:text-purple-400 text-lg`}></i>
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{f.title}</h3>
                                        <p className={`text-sm leading-relaxed ${muted}`}>{f.desc}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>

                        {/* Continue playing (full-width highlight) */}
                        <Reveal delay={200}>
                            <div className={`mt-6 p-7 rounded-2xl border flex items-start gap-4 ${card}`}>
                                <div className="w-12 h-12 shrink-0 rounded-xl bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center">
                                    <i className="fa-solid fa-floppy-disk text-purple-600 dark:text-purple-400 text-lg"></i>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{c.feature_continue_title}</h3>
                                    <p className={`text-sm leading-relaxed ${muted}`}>{c.feature_continue_desc}</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* Brain */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
                    <Reveal>
                        <div className="text-5xl mb-5">🧠</div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-5">{c.brain_title}</h2>
                        <p className={`max-w-2xl mx-auto leading-relaxed ${muted}`}>{c.brain_desc}</p>
                    </Reveal>
                </section>

                {/* Privacy */}
                <section id="privacy" className="bg-gray-50 dark:bg-slate-800/40 py-20 md:py-28">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Reveal>
                            <div className={`p-8 md:p-10 rounded-2xl border text-center ${card}`}>
                                <div className="text-4xl mb-4">🔒</div>
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">{c.privacy_title}</h2>
                                <p className={`max-w-2xl mx-auto mb-6 leading-relaxed ${muted}`}>{c.privacy_desc}</p>
                                <Link to="/cipheria/privacy-policy" className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:underline font-medium">
                                    {c.privacy_read}
                                    <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* CTA */}
                <section className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600"></div>
                    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 text-center">
                        <Reveal>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.cta_title}</h2>
                            <p className="text-lg text-purple-100 italic mb-8">{c.cta_subtitle}</p>
                            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-purple-700 px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                                <i className="fa-brands fa-google-play"></i>
                                {c.download_cta}
                            </a>
                        </Reveal>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className={`border-t transition-colors ${theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <h3 className="font-bold mb-4 text-lg bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">{c.headline}</h3>
                            <p className={`text-sm ${muted}`}>{c.footer_tagline}</p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4 text-slate-900 dark:text-white">{c.footer_links}</h4>
                            <ul className={`space-y-2 text-sm ${muted}`}>
                                <li><Link to="/cipheria/privacy-policy" className="hover:text-purple-600 dark:hover:text-purple-400">{c.footer_privacy}</Link></li>
                                <li><Link to="/" className="hover:text-purple-600 dark:hover:text-purple-400">{c.footer_all_projects}</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4 text-slate-900 dark:text-white">{c.footer_contact}</h4>
                            <ul className={`space-y-2 text-sm ${muted}`}>
                                <li><a href="mailto:moonksoftware@gmail.com" className="hover:text-purple-600 dark:hover:text-purple-400">moonksoftware@gmail.com</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4 text-slate-900 dark:text-white">{c.download}</h4>
                            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400 hover:underline">
                                <i className="fa-brands fa-google-play"></i>
                                Google Play
                            </a>
                        </div>
                    </div>
                    <div className={`border-t pt-8 text-center text-sm ${theme === 'dark' ? 'border-slate-800 text-slate-400' : 'border-gray-100 text-slate-600'}`}>
                        <p dangerouslySetInnerHTML={{ __html: c.footer_copyright }}></p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Cipheria;
