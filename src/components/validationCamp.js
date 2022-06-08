const validationCamp = (values) =>{
    let errors={};

    if(!values.campaignNamee){
        errors.name="Campaign name is required"
    }
    
    if(!values.adCategory){
        errors.adcategory="Ad category is required"
    }
    
    if(!values.budget){
        errors.budget="Budget is required"
    }
    
    return errors;
};

export default validationCamp;