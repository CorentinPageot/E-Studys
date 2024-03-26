import React from "react";
import Link from "next/link";
import Image from 'next/image'
import { useRouter } from 'next/router';

const Footer = () => {
    const router = useRouter();

    return (
        <div className="py-2 flex justify-around container gap-4 bg-background max-w-lg m-auto border-t border-accent shadow-md" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, boxShadow: '0px -1px 3px 0px rgba(0, 0, 0, 0.1)', display: 'flex', justifyContent: 'space-evenly', padding: '20px 0' }}>
            <Link href="/homepage" legacyBehavior>
                <a className={`flex flex-col items-center justify-center text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 ${router.pathname === '/homepage' ? 'active' : ''}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'black', textDecoration: 'none' }}>
                    <Image src="/img/home.svg" width={24} height={24} style={{ padding: '10px' }} alt="Accueil" />
                    Accueil
                </a>
            </Link>
            <Link href="/succes" legacyBehavior>
            <a className={`flex flex-col items-center justify-center text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 ${router.pathname === '/succes' ? 'active' : ''}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'black', textDecoration: 'none' }}>
                    <Image src="/img/success.svg" width={24} height={24} style={{ padding: '10px' }} alt="Succès" />
                    Succès
                </a>
            </Link>
            <Link href="/exercices" legacyBehavior>
            <a className={`flex flex-col items-center justify-center text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 ${router.pathname === '/exercices' ? 'active' : ''}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'black', textDecoration: 'none' }}>
                    <Image src="/img/exercises.svg" width={24} height={24} style={{ padding: '10px' }} alt="Exercices" />
                    Exercices
                </a>
            </Link>
            <Link href="/compte" legacyBehavior>
            <a className={`flex flex-col items-center justify-center text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 ${router.pathname === '/compte' ? 'active' : ''}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'black', textDecoration: 'none' }}>
                    <Image src="/img/user.svg" width={24} height={24} style={{ padding: '10px' }} alt="Compte" />
                    Compte
                </a>
            </Link>
        </div>
    );
};

export default Footer;
