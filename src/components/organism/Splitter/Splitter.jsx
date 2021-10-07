import React, { useState } from "react";
import CalculateTable from "../../molecules/Calculationtable";
import ResultTable from "../../molecules/ResultTable";
import "./style.css";

function Splitter() {
    const [totalAmt, setTotalAmt] = useState({ tipPerPerson: 0, amtPerPerson: 0 })
    const [reset, setReset] = useState(false)

    const handleAmt = (data) => {
        setTotalAmt(data)
        setReset(false)
    }

    const handleReset = () => {
        setReset(true)
        setTotalAmt({ tipPerPerson: 0, amtPerPerson: 0 })
    }


    return (
        <main>
            <div className="main-container">
                <div className="title">
                    <p>SPLI</p>
                    <p>TTER</p>
                </div>
                <div className="split-box">
                    <CalculateTable totalPerAmount={handleAmt} reset={reset} />
                    <ResultTable showDetails={totalAmt} resetForm={handleReset} />
                </div>
            </div>
        </main>
    )
}
export default Splitter;