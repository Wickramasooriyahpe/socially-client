const campValidation = (values) => {
    let errors = {}

    if(!values.campaignName){
        errors.campaignName="Campaign name is required"
    }
    
    if(!values.adCategory){
        errors.adCategory="Ad category is required"
    }
    
    if(!values.budget){
        errors.budget="Budget is required"
    }else if(values.budget < 0){
        errors.budget = "Budget value is too less"
    }

    return errors;
}
export default campValidation;