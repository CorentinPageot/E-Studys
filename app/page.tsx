import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getAuthSession } from "@/lib/auth";
import UserProfile from "../src/features/layout/auth/UserProfile";
import LoginButton from "../src/features/layout/auth/LoginButton";
import TestEntreeBtn from "../src/features/layout/btn/TestEntreeBtn";
import Image from "next/image";
import "../src/css/style.css";
import { redirect } from "next/navigation";
import React, { useState, FC } from "react";

export default async function Home() {
    const session = await getAuthSession();

    // session?.user ? (
    //     <div>There is a session</div>
    // ) : (
    //     <div>No session</div>
    // );

    return (
      <div className="" style={{ textAlign: 'center', marginTop: '8rem', backgroundImage: `url('/img/fruits_background.png')` }}>
        <div className="" style={{ display: 'flex', justifyContent: 'center' }}>
          <Image src="/img/logo_estudys.png" width={100} height={200} alt="Logo E-Studys" style={{ marginBottom: '2rem' }} />
        </div>
        <h1>Une éducation adaptée à tous les dys</h1>
        <div className="" style={{ width: '100%', position: 'absolute', bottom: '5%', textAlign: 'center' }}>
          <TestEntreeBtn />
          {session?.user ? (
              <UserProfile />
              ) : (
              <LoginButton />
            )}
        </div>
      </div>
    )
}
