"use client";
import { CSSProperties } from "react";
import { FadeLoader } from "react-spinners";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
};

const LoaderFade = () => {
    return (
        <div className="flex flex-col gap-4 border rounded-lg border-green-500 items-center justify-center h-[30vh] w-[40vh]">
            <FadeLoader
                color={"#fff"}
                loading={true}
                cssOverride={override}
                height={15}
                width={5}
                radius={2}
                margin={2}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
};

export default LoaderFade;