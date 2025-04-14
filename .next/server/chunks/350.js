exports.id=350,exports.ids=[350],exports.modules={219:(e,r,o)=>{"use strict";o.d(r,{default:()=>h});var t=o(687),i=o(3210);let a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),d=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,o)=>o?o.toUpperCase():r.toLowerCase()),s=e=>{let r=d(e);return r.charAt(0).toUpperCase()+r.slice(1)},n=(...e)=>e.filter((e,r,o)=>!!e&&""!==e.trim()&&o.indexOf(e)===r).join(" ").trim();var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let c=(0,i.forwardRef)(({color:e="currentColor",size:r=24,strokeWidth:o=2,absoluteStrokeWidth:t,className:a="",children:d,iconNode:s,...c},p)=>(0,i.createElement)("svg",{ref:p,...l,width:r,height:r,stroke:e,strokeWidth:t?24*Number(o)/Number(r):o,className:n("lucide",a),...c},[...s.map(([e,r])=>(0,i.createElement)(e,r)),...Array.isArray(d)?d:[d]])),p=(e,r)=>{let o=(0,i.forwardRef)(({className:o,...t},d)=>(0,i.createElement)(c,{ref:d,iconNode:r,className:n(`lucide-${a(s(e))}`,`lucide-${e}`,o),...t}));return o.displayName=s(e),o},f=p("circle-arrow-left",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"m12 8-4 4 4 4",key:"15vm53"}]]),m=p("circle-arrow-right",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m12 16 4-4-4-4",key:"1i9zcv"}]]);var u=o(5773);let v=p("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),g=({label:e,CopiedCode:r})=>{let[o,a]=(0,i.useState)(!1);return(0,t.jsxs)("div",{className:"bg-slate-800 text-white rounded-lg p-4 font-mono relative",children:[(0,t.jsxs)("div",{className:"sticky top-0 flex items-center justify-between border-b p-2 bg-slate-800 z-10",children:[(0,t.jsx)("div",{className:"text-green-400",children:e}),(0,t.jsxs)("button",{onClick:()=>{navigator.clipboard.writeText(r).then(()=>{a(!0),setTimeout(()=>a(!1),2e3)})},className:"bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-600 flex items-center gap-2 transition-colors",children:[(0,t.jsx)(v,{size:16}),(0,t.jsx)("span",{children:o?"Copied!":"Copy"})]})]}),(0,t.jsx)("div",{className:"mt-4 overflow-y-auto max-h-[200px] scrollbar-hide",children:(0,t.jsx)("p",{className:"whitespace-pre text-sm leading-6",children:r})})]})},h=({Heading:e,solution:r,nextQuestion:o,code:i})=>{let a=(0,u.useRouter)();return(0,t.jsx)("div",{className:"bg-gradient-to-br from-slate-950 to-blue-950 h-screen flex justify-center items-center p-4",children:(0,t.jsxs)("div",{className:"bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl shadow-2xl flex justify-between w-full  h-full p-8",children:[(0,t.jsx)(f,{onClick:()=>a.back(),className:"w-10 h-10 text-white/80 hover:text-white hover:scale-110 transition-all cursor-pointer"}),(0,t.jsxs)("div",{className:"flex flex-col gap-12 p-6 w-full",children:[(0,t.jsx)("h1",{className:"text-4xl font-bold text-white tracking-wide text-center w-full",children:e}),(0,t.jsxs)("div",{className:"flex gap-6 h-[70vh] bg-slate-800 rounded-lg p-6",children:[(0,t.jsx)("div",{className:"flex-1 flex items-center justify-center",children:r}),(0,t.jsxs)("div",{className:"w-[700px] flex flex-col gap-8 bg-slate-700 rounded-lg p-4",children:[(0,t.jsx)(g,{label:"Terminal",CopiedCode:"npm i react-spinners"}),(0,t.jsx)(g,{label:"Copy code",CopiedCode:i})]})]})]}),(0,t.jsx)(m,{className:"w-10 h-10 text-white/80 hover:text-white hover:scale-110 transition-all cursor-pointer",onClick:()=>a.push(`/${o}`)})]})})}},1520:()=>{},2257:(e,r,o)=>{"use strict";o.d(r,{$y:()=>l,Ek:()=>u,F0:()=>t,GV:()=>d,J_:()=>v,KR:()=>h,M9:()=>L,MC:()=>p,Wo:()=>m,XP:()=>S,Z:()=>s,bS:()=>b,cJ:()=>w,dI:()=>n,j$:()=>i,nL:()=>a,oA:()=>g,qq:()=>C,rV:()=>y,tp:()=>c,ub:()=>P,ve:()=>f,zk:()=>x});let t=`"use client"
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
`,i=`"use client"
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
`,a=`"use client"
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

export default LoaderBeat`,d=`"use client"
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

export default LoaderBar`,s=`"use client"
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

export default LoaderBounce`,n=`"use client"
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

export default LoaderCircle`,l=`"use client"
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

export default LoaderClimbingBox`,c=`"use client"
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

export default LoaderClip`,p=`"use client";
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

export default LoaderPulse;`,f=`"use client"
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
`,m=`"use client"
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
`,u=`"use client"
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
`,v=`"use client"
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
`,g=`"use client"
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
`,h=`"use client"
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
`,b=`"use client"
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
`,x=`"use client"
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
`,S=`"use client"
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
`,L=`"use client"
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
`,y=`"use client"
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
`,C=`"use client"
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
`,P=`"use client"
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
`,w=`"use client"
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
`},2704:()=>{},5933:(e,r,o)=>{Promise.resolve().then(o.t.bind(o,6346,23)),Promise.resolve().then(o.t.bind(o,7924,23)),Promise.resolve().then(o.t.bind(o,5656,23)),Promise.resolve().then(o.t.bind(o,99,23)),Promise.resolve().then(o.t.bind(o,8243,23)),Promise.resolve().then(o.t.bind(o,8827,23)),Promise.resolve().then(o.t.bind(o,2763,23)),Promise.resolve().then(o.t.bind(o,7173,23))},6055:(e,r,o)=>{"use strict";o.r(r),o.d(r,{default:()=>i});var t=o(1658);let i=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,t.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},7385:(e,r,o)=>{"use strict";o.d(r,{default:()=>t});let t=(0,o(2907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\MyCodes\\\\Loader\\\\components\\\\common\\\\Template.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\MyCodes\\Loader\\components\\common\\Template.tsx","default")},8014:(e,r,o)=>{"use strict";o.r(r),o.d(r,{default:()=>l,metadata:()=>n});var t=o(7413),i=o(260),a=o.n(i),d=o(3298),s=o.n(d);o(2704);let n={title:"Create Next App",description:"Generated by create next app"};function l({children:e}){return(0,t.jsx)("html",{lang:"en",children:(0,t.jsx)("body",{className:`${a().variable} ${s().variable} antialiased`,children:e})})}},8368:()=>{},8669:(e,r,o)=>{Promise.resolve().then(o.t.bind(o,6444,23)),Promise.resolve().then(o.t.bind(o,6042,23)),Promise.resolve().then(o.t.bind(o,8170,23)),Promise.resolve().then(o.t.bind(o,9477,23)),Promise.resolve().then(o.t.bind(o,9345,23)),Promise.resolve().then(o.t.bind(o,2089,23)),Promise.resolve().then(o.t.bind(o,6577,23)),Promise.resolve().then(o.t.bind(o,1307,23))}};