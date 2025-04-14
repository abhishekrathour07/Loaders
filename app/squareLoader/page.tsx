import { SquareLoaderText } from '@/components/common/Codes';
import Template from '@/components/common/Template';
import LoaderSquare from '@/components/screens/SquareLoader';
import React from 'react';

const page = () => {
    return (
        <Template 
            Heading='SquareLoader' 
            solution={<LoaderSquare />} 
            code={SquareLoaderText} 
            nextQuestion='skewLoader' 
        />
    );
};

export default page;