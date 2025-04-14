import { Github } from 'lucide-react';
import React from 'react';

const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-600 to-teal-500 text-white">
            <div className="bg-gray-800 px-10 py-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold">React Spinners Showcase</h1>
                <p className="mt-2 text-lg flex items-center gap-2 justify-center">
                    <Github className="inline-block  text-blue-400" />
                    By <a href="https://github.com/abhishekrathour07" className="hover:underline text-blue-300">Abhishek Singh</a>

                </p>
            </div>

            <h1 className="text-5xl font-extrabold mt-8 mb-4">Discover Amazing Loaders</h1>
            <p className="text-lg text-center max-w-lg">
                Preview a variety of loaders, get the code, and integrate them seamlessly into your projects. Start exploring now!
            </p>
            <div className="mt-10">
                <a
                    href="/hashLoader"
                    className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
                >
                    Explore Loaders
                </a>
            </div>
        </div>
    );
};

export default HomePage;