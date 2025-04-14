import { PropagateLoaderText } from '@/components/common/Codes';
import Template from '@/components/common/Template';
import LoaderPropagate from '@/components/screens/PropagateLoader';
import React from 'react';

const page = () => {
    return (
        <Template 
            Heading='PropagateLoader' 
            solution={<LoaderPropagate />} 
            code={PropagateLoaderText} 
            nextQuestion='puffLoader' 
        />
    );
};

export default page;