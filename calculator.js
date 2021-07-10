export const initialState = {
  currentValue: "0",
  operator: null,
  previousValue: null
};



export const calculator = (type, value, state) => {
  //console.log(`state.currentValue = ${state.currentValue}`);
  switch (type) {
    case "equal":
      const current = parseFloat(state.currentValue);
      const previous = parseFloat(state.previousValue);
      let currentValue = current;
      if (state.operator === "+") {
        currentValue = previous + current;
      } else if (state.operator === "-") {
        currentValue = previous - current;
      } else if (state.operator === "*") {
        currentValue = previous * current;
      }       else if (state.operator === "/") {
        currentValue = previous / current;
      }

      return {
        currentValue: currentValue,
        operator: null,
        previousValue: null
      }

    case "operator":  
    //console.log(`state.currentValue = ${state.currentValue}`);
      if ( value === "pm") 
        return {
           currentValue: state.currentValue * -1,
        operator: null,
        previousValue: null
      }
        if ( value === "sq") {
        console.log(`state.currentValue = ${state.currentValue},currentValue =${currentValue}`); 
                  return {
           currentValue: state.currentValue * state.currentValue,
        operator: null,
        previousValue: null
      }
        }

      return {
        currentValue: "0",
        operator: value,
        previousValue: state.currentValue
      }

    case "number":
      if (state.currentValue === "0") {
        return { currentValue: `${value}` }
      }
      return {
        currentValue: `${state.currentValue}${value}`
      }

    case "clear":
      return initialState;
    case "pc" :
    const currVal = parseFloat(state.currentValue);
return{
  currentValue: currVal/100
}
    
    default:
      return state;

  }
}