"use client";
import { CSSProperties } from "react";
import { SkewLoader } from "react-spinners";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
};

const LoaderSkew = () => {
    return (
        <div className="flex flex-col gap-4 border rounded-lg border-green-500 items-center justify-center h-[30vh] w-[40vh]">
            <SkewLoader
                color={"#fff"}
                loading={true}
                cssOverride={override}
                size={30}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
};

export default LoaderSkew;