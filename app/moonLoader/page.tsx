import { MoonLoaderText } from '@/components/common/Codes';
import Template from '@/components/common/Template';
import LoaderMoon from '@/components/screens/MoonLoader';
import React from 'react';

const page = () => {
    return (
        <Template 
            Heading='MoonLoader' 
            solution={<LoaderMoon />} 
            code={MoonLoaderText} 
            nextQuestion='pacmanLoader' 
        />
    );
};

export default page;