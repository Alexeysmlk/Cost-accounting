import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import { useState } from "react";

const INITIAL_COSTS = [
    {
        id: "c1",
        date: new Date(2023, 8, 12),
        description: "Холодильник",
        amount: 999.99,
    },
    {
        id: "c2",
        date: new Date(2023, 9, 15),
        description: "MacBook",
        amount: 1376.54,
    },
    {
        id: "c3",
        date: new Date(2023, 11, 18),
        description: "Джинсы",
        amount: 49.99,
    },
];

const App = () => {
    const [costs, setCosts] = useState(INITIAL_COSTS);

    const addCostHandler = (cost) => {
        setCosts((prevCosts) => {
            return [cost, ...prevCosts];
        });
    };

    return (
        <div>
            <NewCost onAddCost={addCostHandler} />
            <Costs costs={costs} />
        </div>
    );
};

export default App;
