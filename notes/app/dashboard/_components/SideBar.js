"use client";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Layout, Shield } from "lucide-react";
import Image from "next/image";
import React from "react";
import UploadPdfDialog from "./UploadPdfDialog";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { usePathname } from "next/navigation";
import Link from "next/link";

function SideBar() {
  const { user } = useUser();
  const path = usePathname();
  const GetUserInfo = useQuery(api.user.GetUserInfo, {
    userEmail: user?.primaryEmailAddress?.emailAddress,
  });

  console.log(GetUserInfo);

  const fileList = useQuery(api.fileStorage.GetUserFiles, {
    userEmail: user?.primaryEmailAddress?.emailAddress,
  });
  console.log(fileList?.length);

  return (
    <div className="h-screen p-7 shadow-md">
      <Image src={"/logo.svg"} alt="logo" width={170} height={120} />

      <div className="mt-10">
        <UploadPdfDialog
          isMaxFile={
            fileList?.length >= 5 && !GetUserInfo.upgrade ? true : false
          }
        >
          <Button className="w-full">+ Upload PDF</Button>
        </UploadPdfDialog>
        <Link href={"/dashboard"}>
          <div
            className={`mt-5 flex cursor-pointer items-center gap-2
             rounded-lg p-3 hover:bg-slate-100
             ${path == "/dashboard" && "bg-slate-200"}
             `}
          >
            <Layout />
            <h2>Workspace</h2>
          </div>
        </Link>
        <Link href={"/dashboard/upgrade"}>
          <div
            className={`mt-1 flex cursor-pointer items-center gap-2
             rounded-lg p-3 hover:bg-slate-100
             ${path == "/dashboard/upgrade" && "bg-slate-200"}
             `}
          >
            <Shield />
            <h2>Upgrade</h2>
          </div>
        </Link>
      </div>
      {!GetUserInfo?.upgrade && (
        <div className="absolute bottom-24 w-[80%]">
          <Progress value={(fileList?.length / 5) * 100} />
          <p className="mt-1 text-sm">
            {fileList?.length} out of 5 Pdf Uploaded
          </p>

          <p className="mt-2 text-sm text-gray-400">
            Upgrade to Upload more PDF
          </p>
        </div>
      )}
    </div>
  );
}

export default SideBar;
