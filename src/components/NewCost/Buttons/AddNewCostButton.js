const AddNewCostButton = (props) => {
    return (
        <div className="new-cost__actions">
            <button type="submit" onClick={props.onClickButton}>
                Add new cost
            </button>
        </div>
    );
};

export default AddNewCostButton;
