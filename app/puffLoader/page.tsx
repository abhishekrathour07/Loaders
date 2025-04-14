import { PuffLoaderText } from '@/components/common/Codes';
import Template from '@/components/common/Template';
import LoaderPuff from '@/components/screens/PuffLoader';
import React from 'react';

const page = () => {
    return (
        <Template 
            Heading='PuffLoader' 
            solution={<LoaderPuff />} 
            code={PuffLoaderText} 
            nextQuestion='dotLoader' 
        />
    );
};

export default page;