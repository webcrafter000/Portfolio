"use client";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import Image from "next/image";
import React, { useEffect } from "react";
import UploadPdfDialog from "./_components/UploadPdfDialog";
import Link from "next/link";

function Dashboard() {
  const { user } = useUser();

  //Moved From  Default Page to Dashboard Page
  //Start
  const createUser = useMutation(api.user.createUser);

  useEffect(() => {
    user && CheckUser();
  }, [user]);

  const CheckUser = async () => {
    const result = await createUser({
      email: user?.primaryEmailAddress?.emailAddress,
      imageUrl: user?.imageUrl,
      userName: user?.fullName,
    });

    console.log(result);
  };
  //End

  const fileList = useQuery(api.fileStorage.GetUserFiles, {
    userEmail: user?.primaryEmailAddress?.emailAddress,
  });

  console.log(fileList);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-medium">Workspace</h2>
        <div className="w-[200px]">
          <UploadPdfDialog />
        </div>
      </div>

      <div
        className="mt-10 grid grid-cols-2 gap-5
      md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        {fileList?.length > 0
          ? fileList?.map((file, index) => (
              <Link key={index} href={"/workspace/" + file.fileId}>
                <div
                  key={index}
                  className=" flex cursor-pointer flex-col items-center justify-center
             rounded-md border p-5 shadow-md transition-all hover:scale-105"
                >
                  <Image src={"/pdf.png"} alt="file" width={50} height={50} />
                  <h2 className="mt-3 text-lg font-medium">{file?.fileName}</h2>
                  {/* <h2>{file._creationTime}</h2> */}
                </div>
              </Link>
            ))
          : [1, 2, 3, 4, 5, 6, 7].map((item, index) => (
              <div
                key={index}
                className="h-[150px] animate-pulse rounded-md bg-slate-200"
              ></div>
            ))}
      </div>
    </div>
  );
}

export default Dashboard;
