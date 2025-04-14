import { RotateLoaderText } from '@/components/common/Codes';
import Template from '@/components/common/Template';
import LoaderRotate from '@/components/screens/RotateLoader';
import React from 'react';

const page = () => {
    return (
        <Template 
            Heading='RotateLoader' 
            solution={<LoaderRotate />} 
            code={RotateLoaderText} 
            nextQuestion='syncLoader' 
        />
    );
};

export default page;