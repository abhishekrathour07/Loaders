import { SkewLoaderText } from '@/components/common/Codes';
import Template from '@/components/common/Template';
import LoaderSkew from '@/components/screens/SkewLoader';
import React from 'react';

const page = () => {
    return (
        <Template 
            Heading='SkewLoader' 
            solution={<LoaderSkew />} 
            code={SkewLoaderText} 
            nextQuestion='dramaLoader' 
        />
    );
};

export default page;