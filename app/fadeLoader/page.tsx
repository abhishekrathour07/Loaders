import { FadeLoaderText } from '@/components/common/Codes';
import Template from '@/components/common/Template';
import LoaderFade from '@/components/screens/FadeLoader';
import React from 'react';

const page = () => {
    return (
        <Template 
            Heading='FadeLoader' 
            solution={<LoaderFade />} 
            code={FadeLoaderText} 
            nextQuestion='gridLoader' 
        />
    );
};

export default page;