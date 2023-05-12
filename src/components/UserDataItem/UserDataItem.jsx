import PropTypes from 'prop-types';
import {useMemo} from "react";
import { nanoid } from "nanoid";

const UserDataItem = ({label, handleChange, handleSubmit, ...props}) => {
    const id = useMemo(() => nanoid(), []);
 
    return (
        <div>
        <label htmlFor={id}>{label}</label>
        <input autoComplete={label} id={id} onChange={handleChange} {...props} />
        <button onSubmit={handleSubmit}></button>
    </div>
    );
};

UserDataItem.propTypes = {
    handleChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
};

export default UserDataItem;