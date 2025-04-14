import { RiseLoaderText } from '@/components/common/Codes';
import Template from '@/components/common/Template';
import LoaderRise from '@/components/screens/RiseLoader';
import React from 'react';

const page = () => {
    return (
        <Template 
            Heading='RiseLoader' 
            solution={<LoaderRise />} 
            code={RiseLoaderText} 
            nextQuestion='rotateLoader' 
        />
    );
};

export default page;