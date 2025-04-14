import { Github } from 'lucide-react';
import React from 'react';

const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 to-teal-500 text-white px-4">
            <div className="bg-gray-800 px-6 py-6 md:px-10 md:py-8 rounded-lg shadow-lg text-center">
                <h1 className="text-2xl md:text-3xl font-bold">React Spinners Showcase</h1>
                <p className="mt-2 text-base md:text-lg flex flex-col md:flex-row items-center gap-2 justify-center">
                    <Github className="inline-block text-blue-400" />
                    By <a href="https://github.com/abhishekrathour07" className="hover:underline text-blue-300">Abhishek Singh</a>
                </p>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold mt-6 md:mt-8 mb-4 text-center">Discover Amazing Loaders</h1>
            <p className="text-sm md:text-lg text-center max-w-lg">
                Preview a variety of loaders, get the code, and integrate them seamlessly into your projects. Start exploring now!
            </p>
            <div className="mt-8 md:mt-10">
                <a
                    href="/hashLoader"
                    className="px-6 py-3 md:px-8 md:py-4 bg-white text-purple-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
                >
                    Explore Loaders
                </a>
            </div>
        </div>
    );
};

export default HomePage;