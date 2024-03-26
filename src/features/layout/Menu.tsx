import React from "react";
import Link from "next/link";

interface MenuProps {
    link1: string;
    link2: string;
}

const Menu: React.FC<MenuProps> = ({ link1, link2 }) => {
    return (
        <div>
            <div style={{ position: 'absolute', top: '20px', left: '20px', marginTop: '25px' }}>
                <Link href={link1}>
                    <button style={{ backgroundColor: 'transparent', border: 'none' }}>
                        <div className="long-arrow-left"></div>
                    </button>
                </Link>
            </div>
            
            <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
                <Link href={link2}>
                    <button style={{ backgroundColor: 'transparent', border: 'none' }}>
                        <span style={{ fontSize: '4rem' }}>&times;</span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Menu;
