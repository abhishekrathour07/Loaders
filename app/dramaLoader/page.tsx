import { ScaleLoaderText } from '@/components/common/Codes';
import Template from '@/components/common/Template';
import LoaderScale from '@/components/screens/ScaleLoader';
import React from 'react';

const page = () => {
    return (
        <Template 
            Heading='ScaleLoader' 
            solution={<LoaderScale />} 
            code={ScaleLoaderText} 
            nextQuestion='fadeLoader' 
        />
    );
};

export default page;