import { FileSaveContext } from "@/app/_context/FileSaveContext";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

function WorkspaceHeader({ fileName }) {
  const { fileSave, setFileSave } = useContext(FileSaveContext);
  return (
    <div className="flex justify-between p-4 shadow-md">
      <Link href={"/dashboard"}>
        <Image src={"/logo.svg"} alt="logo" width={140} height={100} />
      </Link>
      <h2 className="font-bold">{fileName}</h2>
      <div className="flex items-center gap-2">
        <Button onClick={() => setFileSave(Date.now())}>Save</Button>
        <UserButton />
      </div>
    </div>
  );
}

export default WorkspaceHeader;
