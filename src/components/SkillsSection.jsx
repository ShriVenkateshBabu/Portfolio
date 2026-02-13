import React, { useState } from 'react'
import { cn } from '@/lib/utlis'
const skills = [
    //frontEnd
    {
        name: 'HTML/CSS', level: 95, Category: 'Frontend Development'
    }, {
        name: 'JavaScript', level: 90, Category: 'Frontend Development'
    },
    {
        name: 'React', level: 80, Category: 'Frontend Development'
    }, {
        name: 'Tailwind', level: 80, Category: 'Frontend Development'
    },
    //backend
    {
        name: 'Node.js', level: 80, Category: 'Backend Development'
    },
    {
        name: 'Express', level: 80, Category: 'Backend Development'
    },
    {
        name: 'PHP', level: 80, Category: 'Backend Development'
    },
    {
        name: 'laravel', level: 80, Category: 'Backend Development'
    },
    {
        name: 'MySQL', level: 80, Category: 'Backend Development'
    },
    //Tools
    {
        name: 'Git/Github', level: 80, Category: 'Tools'
    }
]
const categories = ['all', 'Frontend Development', 'Backend Development', 'Tools']
const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const filteredSkills = skills.filter((skill) => activeCategory === 'all' || skill.Category === activeCategory)
    return (
        <section id='skills' className='py-24 px-24 bg-secondary/30'>
            <div className="container mx-auto max-w 5xl">
                <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                    <span>
                        Dev
                        <span className="text-primary">   Arsenal</span>
                    </span>
                </h2>
                <div className='flex flex-wrap justify-center gap-4 mb-4'>
                    {
                        categories.map((category, key) => (
                            <button
                                onClick={() => setActiveCategory(category)}
                                className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize", activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary")} key={key}>{category}</button>
                        ))
                    }
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        filteredSkills.map((skill, key) => (
                            <div key={key} className='bg-card p-6 rounded-lg shadow-xs card-hover'>
                                <div className='text-left mb-4'>
                                    <h3 className='font-semibold text-lg'>{skill.name}</h3>
                                </div>
                                <div className='w-full bg-secondary/50 h-2 rounded-full overflow-hidden'>
                                    <div className='bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]'
                                        style={{ width: skill.level + "%" }}
                                    />
                                </div>
                                <div className='text-right mt-1'>
                                    <span className='text-muted-foreground text-sm'>{skill.level}%</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default SkillsSection
