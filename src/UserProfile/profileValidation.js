const profileValidation = (values) =>{
    let errors={};

    if(!values.fname){
        errors.name="Name is required"
    }
    if(!values.email){
        errors.email="Email is required"
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = 'Invalid email address';
    }

    //---------change password validation-------
    if(!values.newpassword){
        errors.newpassword="Password is required"
    }
    else if(values.newpassword.length <6){
        errors.newpassword="Password must be more than six characters"
    }
    else if(values.newpassword.length >10){
        errors.newpassword="Password must be less than ten characters"
    }
    if(!values.confirmPassword){
        errors.confirmPassword="Re-entering Password is required"
    }
    else if(values.newpassword !== values.confirmPassword ){
        errors.confirmPassword="Password doesn't match"
    }
    return errors;
};

export default profileValidation;