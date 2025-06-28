"use client";
import useClientvalidation from "@/hooks/validation/useClientvalidation";
import { constants } from "buffer";
import React, { useEffect, useState } from "react";
// got the client workers and task details add validation and show it in a table thats it
//steps follow   start with client creast a func or  custom hook  that return all the error via mapping with idx onl bcz even client id can be "
// "  or missing or not uniqure so i have to map errror with idx and to find unique id and many more thing use set to identify that
// client func will check
// all fields are not empty
// uniqure client id
// priorty cnt be greater > 5 and < 1
// look in taask for some chekc and many more

const Page = () => {
  const [clientdetails, setclientdetails] = useState([]);
  const [workerdetails, setworkerdetails] = useState([]);
  const [taskdetails, settaskdetails] = useState([]);
  const { errors,globalErrors } = useClientvalidation(clientdetails, taskdetails);

  useEffect(() => {
    // datas are retrived from storage
    const clientcsv = localStorage.getItem("clientcsv");
    const workercsv = localStorage.getItem("workercsv");
    const taskcsv = localStorage.getItem("taskcsv");
    // checked if datas are avial
    if (clientcsv && workercsv && taskcsv) {
      const client = JSON.parse(clientcsv);
      const worker = JSON.parse(workercsv);
      const taskfile = JSON.parse(taskcsv);
       console.log(client,"file")
      // set it in to the file
      setclientdetails(client);
      setworkerdetails(worker);
      settaskdetails(taskfile);
    }
  }, []); 



  if (!clientdetails) return <p className="text-black">loading</p>;
  return <div className="text-black">hello</div>;
};

export default Page;
