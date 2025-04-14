export const HashLoaderText = `"use client"
import { CSSProperties } from "react";
import HashLoader from "react-spinners/HashLoader";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

const Loader = () => {
 const color = "red"
    return (
        <div className="flex flex-col gap-4 border rounded-lg border-green-500 items-center justify-center h-[30vh] w-[40vh]">
            <HashLoader
                color={color}
                loading={true}
                cssOverride={override}
                size={40}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default Loader
`

export const ClockLoaderText = `"use client"
import { CSSProperties } from "react";
import ClockLoader from "react-spinners/ClockLoader";

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
`

export const BeatLoaderText = `"use client"
import { CSSProperties } from "react";
import { BeatLoader } from "react-spinners";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
};

const LoaderBeat = () => {
    return (
        <div className="flex flex-col gap-4 border rounded-lg border-green-500 items-center justify-center h-[30vh] w-[40vh]">
            <BeatLoader
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

export default LoaderBeat`

export const BarLoaderText = `"use client"
import { CSSProperties } from "react";
import { BarLoader } from "react-spinners";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
};

const LoaderBar = () => {
    return (
        <div className="flex flex-col gap-4 border rounded-lg border-green-500 items-center justify-center h-[30vh] w-[40vh]">
            <BarLoader
                color={"#fff"}
                loading={true}
                cssOverride={override}
                width={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default LoaderBar`

export const BounceLoaderText = `"use client"
import { CSSProperties } from "react";
import { BounceLoader } from "react-spinners";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
};

const LoaderBounce = () => {
    return (
        <div className="flex flex-col gap-4 border rounded-lg border-green-500 items-center justify-center h-[30vh] w-[40vh]">
            <BounceLoader
                color={"#fff"}
                loading={true}
                cssOverride={override}
                size={60}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default LoaderBounce`

export const CircleLoaderText = `"use client"
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
}

export default LoaderCircle`

export const ClimbingBoxLoaderText = `"use client"
import { CSSProperties } from "react";
import { ClimbingBoxLoader } from "react-spinners";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
};

const LoaderClimbingBox = () => {
    return (
        <div className="flex flex-col gap-4 border rounded-lg border-green-500 items-center justify-center h-[30vh] w-[40vh]">
            <ClimbingBoxLoader
                color={"#fff"}
                loading={true}
                cssOverride={override}
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default LoaderClimbingBox`

export const ClipLoaderText = `"use client"
import { CSSProperties } from "react";
import { ClipLoader } from "react-spinners";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
};

const LoaderClip = () => {
    return (
        <div className="flex flex-col gap-4 border rounded-lg border-green-500 items-center justify-center h-[30vh] w-[40vh]">
            <ClipLoader
                color={"#fff"}
                loading={true}
                cssOverride={override}
                size={35}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default LoaderClip`

export const pulseLoaderText = `"use client";
import { CSSProperties } from "react";
import { PulseLoader } from "react-spinners";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
};

const LoaderPulse = () => {
    return (
        <div className="flex flex-col gap-4 border rounded-lg border-green-500 items-center justify-center h-[30vh] w-[40vh]">
            <PulseLoader
                color={"#fff"}
                loading={true}
                cssOverride={override}
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
};

export default LoaderPulse;`
export const RingLoaderText = `"use client"
import { CSSProperties } from "react";
import { RingLoader } from "react-spinners";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
};

const LoaderRing = () => {
    return (
        <div className="flex flex-col gap-4 border rounded-lg border-green-500 items-center justify-center h-[30vh] w-[40vh]">
            <RingLoader
                color={"#fff"}
                loading={true}
                cssOverride={override}
                size={60}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default LoaderRing;
`
export const RiseLoaderText = `"use client"
import { CSSProperties } from "react";
import { RiseLoader } from "react-spinners";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
};

const LoaderRise = () => {
    return (
        <div className="flex flex-col gap-4 border rounded-lg border-green-500 items-center justify-center h-[30vh] w-[40vh]">
            <RiseLoader
                color={"#fff"}
                loading={true}
                cssOverride={override}
                size={15}
                margin={2}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default LoaderRise;
`;
export const RotateLoaderText = `"use client"
import { CSSProperties } from "react";
import { RotateLoader } from "react-spinners";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
};

const LoaderRotate = () => {
    return (
        <div className="flex flex-col gap-4 border rounded-lg border-green-500 items-center justify-center h-[30vh] w-[40vh]">
            <RotateLoader
                color={"#fff"}
                loading={true}
                cssOverride={override}
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default LoaderRotate;
`;
export const ScaleLoaderText = `"use client"
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
}

export default LoaderScale;
`;
export const SyncLoaderText = `"use client"
import { CSSProperties } from "react";
import { SyncLoader } from "react-spinners";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
};

const LoaderSync = () => {
    return (
        <div className="flex flex-col gap-4 border rounded-lg border-green-500 items-center justify-center h-[30vh] w-[40vh]">
            <SyncLoader
                color={"#fff"}
                loading={true}
                cssOverride={override}
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default LoaderSync;
`;
export const SquareLoaderText = `"use client"
import { CSSProperties } from "react";
import { SquareLoader } from "react-spinners";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
};

const LoaderSquare = () => {
    return (
        <div className="flex flex-col gap-4 border rounded-lg border-green-500 items-center justify-center h-[30vh] w-[40vh]">
            <SquareLoader
                color={"#fff"}
                loading={true}
                cssOverride={override}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default LoaderSquare;
`;

export const SkewLoaderText = `"use client"
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
}

export default LoaderSkew;
`;

export const FadeLoaderText = `"use client"
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
}

export default LoaderFade;
`;
export const GridLoaderText = `"use client"
import { CSSProperties } from "react";
import { GridLoader } from "react-spinners";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
};

const LoaderGrid = () => {
    return (
        <div className="flex flex-col gap-4 border rounded-lg border-green-500 items-center justify-center h-[30vh] w-[40vh]">
            <GridLoader
                color={"#fff"}
                loading={true}
                cssOverride={override}
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default LoaderGrid;
`;
export const MoonLoaderText = `"use client"
import { CSSProperties } from "react";
import { MoonLoader } from "react-spinners";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
};

const LoaderMoon = () => {
    return (
        <div className="flex flex-col gap-4 border rounded-lg border-green-500 items-center justify-center h-[30vh] w-[40vh]">
            <MoonLoader
                color={"#fff"}
                loading={true}
                cssOverride={override}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default LoaderMoon;
`;
export const PacmanLoaderText = `"use client"
import { CSSProperties } from "react";
import { PacmanLoader } from "react-spinners";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
};

const LoaderPacman = () => {
    return (
        <div className="flex flex-col gap-4 border rounded-lg border-green-500 items-center justify-center h-[30vh] w-[40vh]">
            <PacmanLoader
                color={"#fff"}
                loading={true}
                cssOverride={override}
                size={25}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default LoaderPacman;
`;
export const PropagateLoaderText = `"use client"
import { CSSProperties } from "react";
import { PropagateLoader } from "react-spinners";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
};

const LoaderPropagate = () => {
    return (
        <div className="flex flex-col gap-4 border rounded-lg border-green-500 items-center justify-center h-[30vh] w-[40vh]">
            <PropagateLoader
                color={"#fff"}
                loading={true}
                cssOverride={override}
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default LoaderPropagate;
`;
export const PuffLoaderText = `"use client"
import { CSSProperties } from "react";
import { PuffLoader } from "react-spinners";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
};

const LoaderPuff = () => {
    return (
        <div className="flex flex-col gap-4 border rounded-lg border-green-500 items-center justify-center h-[30vh] w-[40vh]">
            <PuffLoader
                color={"#fff"}
                loading={true}
                cssOverride={override}
                size={60}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default LoaderPuff;
`;
export const DotLoaderText = `"use client"
import { CSSProperties } from "react";
import { DotLoader } from "react-spinners";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
};

const LoaderDot = () => {
    return (
        <div className="flex flex-col gap-4 border rounded-lg border-green-500 items-center justify-center h-[30vh] w-[40vh]">
            <DotLoader
                color={"#fff"}
                loading={true}
                cssOverride={override}
                size={60}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default LoaderDot;
`;