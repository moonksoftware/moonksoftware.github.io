import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

// Static team data — avatars are served from github.com/<user>.png, which does
// NOT use the rate-limited GitHub API (that returned 403 on GitHub Pages).
const TEAM = [
    { name: 'Abdulbaki Demir', username: 'AbdulbakiDEMIR', bioKey: 'team_member_1_bio' },
    { name: 'Ahmet Yasir', username: 'ahmet-yasir', bioKey: 'team_member_2_bio' },
];

const Team = () => {
    const { t } = useLanguage();
    const { theme } = useTheme();

    const members = TEAM.map(m => ({
        name: m.name,
        username: m.username,
        avatar: `https://github.com/${m.username}.png`,
        bio: t[m.bioKey],
        github: `https://github.com/${m.username}`,
    }));

    return (
        <section className={`py-16 transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-900' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="animate-fade-in-up" style={{ animationDelay: '0ms' }}>
                        <h2 className={`text-3xl font-bold tracking-tight mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                            {t.team_title}
                        </h2>
                    </div>
                    <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                        <p className={`text-lg ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                            {t.team_subtitle}
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {members.map((member, idx) => (
                        <div key={member.username} className="w-full sm:w-80">
                            <div
                                className={`flex flex-col items-center p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border h-full animate-fade-in-up ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'}`}
                                style={{ animationDelay: `${idx * 100}ms` }}
                            >
                                <div className={`w-24 h-24 rounded-full overflow-hidden mb-4 border-4 shadow-sm ${theme === 'dark' ? 'border-brand-900/50' : 'border-brand-100'}`}>
                                    <img
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                        src={member.avatar}
                                    />
                                </div>
                                <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                                    {member.name}
                                </h3>
                                <p className="text-sm text-brand-600 dark:text-brand-400 mb-2">
                                    @{member.username}
                                </p>
                                <p className={`text-center text-sm mb-4 line-clamp-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                                    {member.bio}
                                </p>
                                <a
                                    href={member.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`mt-auto inline-flex items-center text-sm font-medium transition-colors ${theme === 'dark' ? 'text-slate-400 hover:text-brand-400' : 'text-slate-500 hover:text-brand-600'}`}
                                >
                                    <i className="fa-brands fa-github mr-2 text-lg"></i>
                                    GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
