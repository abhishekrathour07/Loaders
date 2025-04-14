import { ClipLoaderText } from '@/components/common/Codes';
import Template from '@/components/common/Template';
import LoaderClip from '@/components/screens/ClipLoader';
import React from 'react';

const page = () => {
    return (
        <Template 
            Heading='ClipLoader' 
            solution={<LoaderClip />} 
            code={ClipLoaderText} 
            nextQuestion='pulseLoader' 
        />
    );
};

export default page;