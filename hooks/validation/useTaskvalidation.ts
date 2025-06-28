type ErrorMap = {
  [index: number]: {
    [field: string]: string; // field name → error message
  };
};

type GlobalErrors = {
  missingFields?: string[];
};

const REQUIRED_FIELDS = [
  "Category",
  "Duration",
  "MaxConcurrent",
  "PreferredPhase",
  "RequiredSkills",
  "TaskID",
]; 


function useTaskvalidation(
  taskfile: any,
  
): {
  taskerrors: ErrorMap;
  taskglobalErrors: GlobalErrors;
} {
   const taskerrors:ErrorMap={}; 
   const taskglobalErrors:GlobalErrors= {}

    return {taskerrors,taskglobalErrors}
} 

export default useTaskvalidation;