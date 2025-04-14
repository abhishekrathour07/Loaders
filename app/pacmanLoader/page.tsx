import { PacmanLoaderText } from '@/components/common/Codes';
import Template from '@/components/common/Template';
import LoaderPacman from '@/components/screens/PacmanLoader';
import React from 'react';

const page = () => {
    return (
        <Template 
            Heading='PacmanLoader' 
            solution={<LoaderPacman />} 
            code={PacmanLoaderText} 
            nextQuestion='propagateLoader' 
        />
    );
};

export default page;