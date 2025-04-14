
"use client"
import {  CSSProperties } from "react";
import ClockLoader
 from "react-spinners/ClockLoader";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};


const LoaderClock = () => {
    return (
        <div className="flex flex-col gap-4 border rounded-lg border-green-500 items-center justify-center h-[30vh] w-[40vh]">
            <ClockLoader

                color={"#fff"}
                loading={true}
                cssOverride={override}
                size={40}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default LoaderClock
