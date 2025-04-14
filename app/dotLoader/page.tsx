import { DotLoaderText } from '@/components/common/Codes';
import Template from '@/components/common/Template';
import LoaderDot from '@/components/screens/DotLoader';
import React from 'react';

const page = () => {
    return (
        <Template 
            Heading='DotLoader' 
            solution={<LoaderDot />} 
            code={DotLoaderText} 
            nextQuestion=''  
        />
    );
};

export default page;