import SuccessContainer from "@/components/SuccessContainer";
import { redirect } from "next/navigation";
import React from "react";
interface Props{
    searchParams: {
        session_id:string
    }
}

const SuccessPage = async({searchParams}:Props) => {
    const id =await searchParams?.session_id;
    console.log(id);
    if(!id)
    {
        redirect("/")
    }
  return <div  className="mx-auto container pt-24"><SuccessContainer id={id}/></div>;
};

export default SuccessPage;
