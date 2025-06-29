import { findDuplicatesIds, isgreaterthanone, isnonemptystring, isValidCommaSeparatedString, isValidInteger, isvalidNumber } from "@/lib/helper";
import { object } from "zod/v4";

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
   // check for missing task field 
   const taskFileFiled=Object.keys(taskfile[0] || {});  
   // if got some 
   const missingFields=REQUIRED_FIELDS.filter(i => !taskFileFiled.includes(i)) 
   // put it in this   
   if(missingFields.length > 0){
    taskglobalErrors.missingFields=missingFields
   }
   // find duplicated taskid 
   const duplicatesTaskId= findDuplicatesIds(taskfile,"TaskID")

   taskfile.forEach((item:any,idx:number)=>{ 
    const rowerror :{ [key: string]: string } = {};  

    // check taskid is non empty string 
     if(!isnonemptystring(item.TaskID)){
      rowerror.TaskID="Task id Should be non empty string"; 
     }  
    // check for duplictes client id 
     if(duplicatesTaskId.includes(idx)){
      rowerror.TaskID = "Duplicates client id Found";
     }
    // check duration is valid number
     if(!isvalidNumber(item.Duration)){
      rowerror.Duration="Duration should be Number"
     }else if(isvalidNumber(item.Duration)){
      if(!isgreaterthanone(+item.Duration)){
        rowerror.Duration="Duration should be greater than or equal to 1";
      }
     } 
     
     // required slills 
     if(!isnonemptystring(item.RequiredSkills) &&  !isValidCommaSeparatedString(item.RequiredSkills)){
       rowerror.RequiredSkills= "Required skills cant be empty or non valid string "
     } 

     //  TaskName 
     if(!isnonemptystring(item.TaskName)){
      rowerror.TaskName="Taskname cant be empty";
     } 
     //MaxConcurrent 
     if(!isValidInteger(item.MaxConcurrent)){
      rowerror.MaxConcurrent= "MaxConcurrent should be valid integer"
     } 


     if(Object.keys(rowerror).length > 0){
      taskerrors[idx]= rowerror;
     }
   }) 
    return {taskerrors,taskglobalErrors}
} 

export default useTaskvalidation;