
const validation = (values) =>{
    let errors={};

    if(!values.amount){
        errors.amount="Amount is required"
    } else if(!/^[0-9\b]+$/.test(values.email)){
        errors.amount = 'Can not enter strings';
    }
    return errors;
};

export default validation;