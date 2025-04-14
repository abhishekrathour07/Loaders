import React from 'react';

const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500 text-white">
            <h1 className="text-4xl font-bold mb-4">Welcome to Loader Showcase</h1>
            <p className="text-lg text-center max-w-md">
                Explore a variety of loaders, preview them in action, and get the code to integrate them into your projects effortlessly.
            </p>
            <div className="mt-8">
                <a
                    href="/hashLoader"
                    className="px-6 py-3 bg-white text-green-500 font-semibold rounded-lg shadow-md hover:bg-gray-100"
                >
                    Get Started
                </a>
            </div>
        </div>
    );
};

export default HomePage;