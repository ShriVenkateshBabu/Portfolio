import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import HeroImage from '../../public/images/Dr.s.vairachilai.jpeg';

const HeroSection = () => {
    return (
        <Box className="w-full bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:flex md:items-center md:justify-between gap-10">

                {/* Left Image */}
                <motion.div
                    className="md:w-1/2 flex justify-center md:justify-start mb-10 md:mb-0"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src={HeroImage}
                        alt="Dr. S. Vairachilai"
                        className="w-80 h-80 md:w-[400px] md:h-[400px] object-cover rounded-xl shadow-lg border border-gray-200"
                    />
                </motion.div>

                {/* Right Bio */}
                <motion.div
                    className="md:w-1/2 text-center md:text-left bg-white p-8 rounded-xl shadow-lg border border-gray-200"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <Typography
                        variant="h3"
                        className="font-bold text-gray-800 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500"
                    >
                        Dr. S. Vairachilai
                    </Typography>

                    <Typography variant="h6" className="text-gray-700 mb-4 font-medium">
                        Associate Professor, CS & AI
                    </Typography>

                    <Typography variant="body1" className="text-gray-600 mb-4">
                        Ph.D., Anna University | 15+ Years Experience
                    </Typography>

                    <Typography variant="body1" className="text-gray-600 mb-6">
                        <span className="font-semibold">Research Interests:</span> Machine Learning, Deep Learning, Social Network Analysis
                    </Typography>
                </motion.div>

            </div>
        </Box>
    );
};

export default HeroSection;
