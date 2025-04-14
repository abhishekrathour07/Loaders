import { GridLoaderText } from '@/components/common/Codes';
import Template from '@/components/common/Template';
import LoaderGrid from '@/components/screens/GridLoader';
import React from 'react';

const page = () => {
    return (
        <Template 
            Heading='GridLoader' 
            solution={<LoaderGrid />} 
            code={GridLoaderText} 
            nextQuestion='moonLoader' 
        />
    );
};

export default page;