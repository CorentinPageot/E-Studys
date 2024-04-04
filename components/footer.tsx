"use client"

import React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

interface FooterLinkProps {
    href: string;
    title: string;
    icon: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, title, icon }) => {
    const pathname = usePathname();
    const isActive = pathname ? pathname == href : false;

    return (
        <Link href={href} legacyBehavior>
            <div className={`flex flex-col gap-1 items-center justify-center text-xs`}>
                <div className={`${isActive ? 'bg-studys-yellow' : ''} w-[44px] h-[44px] rounded-full flex justify-center items-center`}>
                    <Image src={icon} width={24} height={24} alt={title} className="w-[24px] h-[24px]" />
                </div>
                {title}
            </div>
        </Link>
    );
};

const Footer: React.FC = () => {
    return (
        <footer className="bg-white flex-none flex justify-around fixed bottom-0 h-[80px] w-full shadow-[0px_-2px_8px_0px_rgba(0,0,0,0.3)]">
            <FooterLink href="/home" title="Accueil" icon="/img/home.svg" />
            <FooterLink href="/home/succes" title="Succès" icon="/img/success.svg" />
            <FooterLink href="/home/exercices" title="Exercices" icon="/img/exercises.svg" />
            <FooterLink href="/home/account" title="Compte" icon="/img/user.svg" />
        </footer>
    );
};

export default Footer;
