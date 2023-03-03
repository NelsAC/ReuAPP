import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [ formValidation, setFormValidation ] = useState( {} );
    const [ startDate, setStartDate ] = useState( null );
    const [ endDate, setEndDate ] = useState( null );

    useEffect(() => {
      createValidators();
    }, [ formState ])

    const isFormValid = useMemo(() => {
        let isValid = true;
        for (const formValue of Object.keys( formValidation )) {
            if (formValidation[ formValue ] !== null ) {
                isValid = false;
            }
        }
        return isValid;
    }
    , [ formValidation ]);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    /* applied only this project */
    const onDateChange = ( e, changing ) => {
        setFormState({
            ...formState,
            [ changing ]: e
        });
    }

    const onRangeDateChange = ( date ) => {
        const [ start, end ] = date;
        setStartDate( start );
        setEndDate( end );

        console.log(date);
    }


    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => {
        const formCheckedValues = {};
        for (const formField of Object.keys( formValidations )) {
            const [ fn, errorMessage ] = formValidations[formField];

            formCheckedValues[`${ formField }Valid`] = fn( formState[formField] ) ? null : errorMessage; 
        }

        setFormValidation( formCheckedValues );
    }


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid,
        onDateChange,
        onRangeDateChange
    }
}