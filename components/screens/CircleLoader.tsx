"use client";
import { CSSProperties } from "react";
import { CircleLoader } from "react-spinners";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
};

const LoaderCircle = () => {
    return (
        <div className="flex flex-col gap-4 border rounded-lg border-green-500 items-center justify-center h-[30vh] w-[40vh]">
            <CircleLoader
                color={"#fff"}
                loading={true}
                cssOverride={override}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
};

export default LoaderCircle;