import "./CostForm.css";
import { useState } from "react";

const CostForm = (props) => {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const changeNameHandler = (event) => {
        setName(event.target.value);
    };

    const changeAmountHandler = (event) => {
        setAmount(event.target.value);
    };

    const changeDateHandler = (event) => {
        setDate(event.target.value);
    };

    const submitFormHandler = (event) => {
        event.preventDefault();
        const costData = {
            description: name,
            amount: amount,
            date: new Date(date),
        };

        setName("");
        setAmount("");
        setDate("");

        props.onSaveCostData(costData);
    };

    return (
        <form onSubmit={submitFormHandler}>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Name</label>
                    <input
                        type="text"
                        onChange={changeNameHandler}
                        value={name}
                    />
                </div>
                <div className="new-cost__control">
                    <label>Sum</label>
                    <input
                        type="number"
                        onChange={changeAmountHandler}
                        value={amount}
                        min="0.01"
                        step="0.01"
                    />
                </div>
                <div className="new-cost__control">
                    <label>Date</label>
                    <input
                        type="date"
                        onChange={changeDateHandler}
                        value={date}
                        min="2019-01-01"
                        max="2023-09-14"
                    />
                </div>
                <div className="new-cost__actions">
                    <button type="submit">Add cost</button>
                </div>
                <div className="new-cost__actions">
                    <button type="button" onClick={props.onCancel}>
                        Cancel
                    </button>
                </div>
            </div>
        </form>
    );
};

export default CostForm;
