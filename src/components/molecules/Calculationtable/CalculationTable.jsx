import React, { useState, useEffect } from 'react'
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import "./style.css"
import Dollar from "../../../Images/dollar.svg"
import Person from "../../../Images/person.svg"

function CalculateTable({ totalPerAmount, reset }) {
    const [billAmount, setBillAmount] = useState(0);
    const [numberOfPeople, setNumberOfPeople] = useState(0);
    const [tipAmount, setTipAmount] = useState(0)

    useEffect(() => {
        if (billAmount !== 0 && tipAmount && numberOfPeople !== 0) {
            const tipCost = (billAmount * tipAmount) / 100
            totalPerAmount({ tipPerPerson: tipCost / numberOfPeople, amtPerPerson: (tipCost + +billAmount) / numberOfPeople })
        }

    }, [billAmount, tipAmount, numberOfPeople])

    useEffect(() => {
        if (reset) {
            setBillAmount(0)
            setNumberOfPeople(0)
            setTipAmount(0)
        }
    }, [reset])

    function billInput(percent) {
        setTipAmount(percent);
    }

    console.log(tipAmount)
    return (
        <section className="left-side">
            <div className="text-field">
                <Input label="Bill" type="number" placeholder="0" icon={Dollar} onChange={setBillAmount} value={billAmount} />
            </div>
            <div className="button-field">
                <label>Select tip %</label>
                <div className="button-group">
                    <Button className={tipAmount === 5 ? 'active' : ''} handleClick={() => billInput(5)}>5%</Button>
                    <Button className={tipAmount === 10 ? 'active' : ''} handleClick={() => billInput(10)}>10%</Button>
                    <Button className={tipAmount === 15 ? 'active' : ''} handleClick={() => billInput(15)}>15%</Button>
                    <Button className={tipAmount === 25 ? 'active' : ''} handleClick={() => billInput(25)}>25%</Button>
                    <Button className={tipAmount === 50 ? 'active' : ''} handleClick={() => billInput(50)}>50%</Button>
                    <input placeholder="Custom" onChange={(e) => billInput(e.target.value)} />
                </div>
            </div>
            <div className="text-field">
                <Input label="Number of people" type="number" placeholder="0" icon={Person} onChange={setNumberOfPeople} value={numberOfPeople} />
            </div>
        </section>
    )
}

export default CalculateTable;