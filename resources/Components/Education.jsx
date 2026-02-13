import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/solid'; // Use Heroicons arrow

const educationData = [
    { year: '2018', degree: 'Ph.D.', institution: 'Anna University' },
    { year: '2011', degree: 'MCA, M.Tech', institution: 'Anna University' },
    { year: '1997', degree: 'B.Sc.', institution: 'Some University' },
];

const Education = () => {
    return (
        <Box className="w-full bg-gray-50 py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <Typography
                    variant="h4"
                    className="font-bold text-gray-800 mb-12 text-center"
                >
                    Educational Qualifications
                </Typography>

                {/* Timeline */}
                <div className="space-y-8 relative">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="flex items-center"
                        >
                            {/* Vertical line */}
                            <div className="flex flex-col items-center">
                                <div className="w-4 h-4 bg-indigo-600 rounded-full z-10"></div>
                                {index !== educationData.length - 1 && (
                                    <div className="w-1 h-full bg-indigo-300"></div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="ml-6 bg-white shadow-lg rounded-xl border border-gray-200 p-6 flex flex-col md:flex-row md:justify-between items-start md:items-center w-full hover:shadow-xl transition-shadow duration-300">
                                <div className="flex flex-col">
                                    <Typography
                                        variant="h6"
                                        className="font-semibold text-gray-800 flex items-center"
                                    >
                                        {edu.degree}
                                        <ArrowRightIcon className="w-5 h-5 text-indigo-500 ml-2" />
                                    </Typography>
                                    <Typography variant="body2" className="text-gray-600 mt-1">
                                        {edu.institution}
                                    </Typography>
                                </div>
                                <div className="mt-2 md:mt-0">
                                    <Typography
                                        variant="body1"
                                        className="text-indigo-600 font-medium"
                                    >
                                        {edu.year}
                                    </Typography>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Box>
    );
};

export default Education;
