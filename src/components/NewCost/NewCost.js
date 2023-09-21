import "./NewCost.css";
import CostForm from "./CostForm";
import { useState } from "react";
import AddNewCostButton from "./Buttons/AddNewCostButton";

const NewCost = (props) => {
    const [isDisplayForm, setIsDisplayForm] = useState(false);

    const saveCostDataHandler = (inputData) => {
        const costData = {
            ...inputData,
            id: Math.random().toString(),
        };

        props.onAddCost(costData);
        setIsDisplayForm(false);
    };

    const displayFormHandler = () => {
        setIsDisplayForm(true);
    };

    const cancelButtonHandler = () => {
        setIsDisplayForm(false);
    };

    return (
        <div className="new-cost">
            {isDisplayForm && (
                <CostForm
                    onSaveCostData={saveCostDataHandler}
                    onCancel={cancelButtonHandler}
                />
            )}
            {!isDisplayForm && (
                <AddNewCostButton onClickButton={displayFormHandler} />
            )}
        </div>
    );
};

export default NewCost;
