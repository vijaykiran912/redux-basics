export const duplicateObject = (currentState, updatedValues) =>{
    return{
        ...currentState,
        ...updatedValues
    }
}