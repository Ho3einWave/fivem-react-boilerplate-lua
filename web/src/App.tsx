import React, { useState } from "react";
import "./App.css";
import { debugData } from "./utils/debugData";
import { fetchNui } from "./utils/fetchNui";

// This will set the NUI to visible if we are
// developing in browser
debugData([
    {
        action: "setVisible",
        data: true,
    },
]);

interface ReturnClientDataCompProps {
    data: unknown;
}

const ReturnClientDataComp: React.FC<ReturnClientDataCompProps> = ({
    data,
}) => (
    <>
        <h5>Returned Data:</h5>
        <pre className="px-4 rounded-lg">
            <code>{JSON.stringify(data, null)}</code>
        </pre>
    </>
);

interface ReturnData {
    x: number;
    y: number;
    z: number;
}

const App: React.FC = () => {
    const [clientData, setClientData] = useState<ReturnData | null>(null);

    const handleGetClientData = () => {
        fetchNui<ReturnData>("getClientData")
            .then((retData) => {
                console.log("Got return data from client scripts:");
                console.dir(retData);
                setClientData(retData);
            })
            .catch((e) => {
                console.error("Setting mock data due to error", e);
                setClientData({ x: 500, y: 300, z: 200 });
            });
    };

    return (
        <div className="nui-wrapper">
            <div className="popup-thing">
                <div className="flex flex-col gap-2">
                    <h1 className="text-xl font-bold">
                        This is the NUI Popup!
                    </h1>
                    <p>
                        Exit with the{" "}
                        <span className="bg-zinc-600 px-2 rounded-lg font-mono">
                            Escape
                        </span>{" "}
                        key
                    </p>
                    <button
                        className="bg-blue-700 px-4 py-2 rounded-xl cursor-pointer hover:bg-blue-600 transition-all"
                        onClick={handleGetClientData}
                    >
                        Get Client Data
                    </button>
                    {clientData && <ReturnClientDataComp data={clientData} />}
                </div>
            </div>
        </div>
    );
};

export default App;
