const { useState } = require("react")

const useForm = (initialState) => {
    const [values, setFormData] = useState(initialState);

    const handleChange = ({target}) => {
        const { name, value } = target;
        setFormData(({ ...values, [name]: value }))

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values)
    }

    return { values, handleChange, handleSubmit };
}

export default useForm;