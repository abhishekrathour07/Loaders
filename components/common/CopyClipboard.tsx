"use client"
import { useState } from "react";
import { Copy } from "lucide-react";

type CopyClipBoardProps = {
    label: string,
    CopiedCode: string
}
const CopyClipBoard: React.FC<CopyClipBoardProps> = ({ label, CopiedCode }) => {


    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(CopiedCode).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div className="bg-slate-800 text-white rounded-lg p-4 font-mono relative">
            <div className="sticky top-0 flex items-center justify-between border-b p-2 bg-slate-800 z-10">
                <div className="text-green-400">{label}</div>
                <button
                    onClick={handleCopy}
                    className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-600 flex items-center gap-2 transition-colors"
                >
                    <Copy size={16} />
                    <span>{copied ? "Copied!" : "Copy"}</span>
                </button>
            </div>
            <div className="mt-4 overflow-y-auto max-h-[200px] scrollbar-hide">
                <p className="whitespace-pre text-sm leading-6">{CopiedCode}</p>
            </div>
        </div>
    );
};

export default CopyClipBoard;
