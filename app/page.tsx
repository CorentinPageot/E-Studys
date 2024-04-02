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

    console.log('plop');

    if (session?.user) {
        redirect('/home');
    } else {
        return (
            <div
                className="w-full h-full relative flex flex-col items-center justify-center"
                style={{ backgroundImage: `url('/img/fruits_background.png')` }}>
                <div className="flex flex-col items-center">
                    <Image
                        className="w-[78px] h-auto"
                        src="/img/logo.png"
                        width={78}
                        height={116}
                        alt="Logo E-Studys"
                        priority
                    />
                    <span className="text-2xl font-bold">E-Studys</span>
                </div>
                <span className="text-sm font-normal">
                    {"L'éducation adaptée à tous les dys"}
                </span>
                <div className="absolute bottom-5 flex flex-col">
                    <TestEntreeBtn />
                    <LoginButton />
                </div>
            </div>
        );
    }
}
