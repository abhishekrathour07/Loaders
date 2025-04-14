import { RingLoaderText } from '@/components/common/Codes';
import Template from '@/components/common/Template';
import LoaderRing from '@/components/screens/RingLoader';
import React from 'react';

const page = () => {
    return (
        <Template 
            Heading='RingLoader' 
            solution={<LoaderRing />} 
            code={RingLoaderText} 
            nextQuestion='riseLoader' 
        />
    );
};

export default page;