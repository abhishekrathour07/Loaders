"use client";
import { CSSProperties } from "react";
import { ScaleLoader } from "react-spinners";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
};

const LoaderScale = () => {
    return (
        <div className="flex flex-col gap-4 border rounded-lg border-green-500 items-center justify-center h-[30vh] w-[40vh]">
            <ScaleLoader
                color={"#fff"}
                loading={true}
                cssOverride={override}
                height={35}
                width={4}
                radius={2}
                margin={2}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
};

export default LoaderScale;