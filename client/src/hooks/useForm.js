// write your custom hook here to control your checkout form
import useLocalStorage from './useLocalStorage';

const useForm = (key, initialValue) => {
    const [values, setValues] = useLocalStorage(key, initialValue);

    const handleChanges = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    return [values, handleChanges];
}

export default useForm