import Image from "next/image";

interface DatasStat {
    icon: string;
    number: number;
    description: string;
    color: string
}

const StatComponent: React.FC<DatasStat> = ({ icon, number, description, color }) => {

    return (
        <div className={`bg-studys${color} bg-opacity-10 border border-studys${color} rounded-lg flex p-2 gap-2`}>
            <Image src={icon} width={16} height={16} alt={description} className="w-[16px] h-[16px]" />
            <div className="flex flex-col gap-1">
                <p className="text-sm">{number}</p>
                <p className="text-studysGrey text-xs">{description}</p>
            </div>
        </div>
    );
};

const StatComponents: React.FC = () => {
    return (
        <footer className="inline-grid grid-cols-2 gap-2 w-full">
            <StatComponent icon="/img/fire.svg" number={2} description="Jours d'activité" color="Orange" />
            <StatComponent icon="/img/clapping_hands.svg" number={2} description="Exo sans fautes" color="Green" />
            <StatComponent icon="/img/brain.svg" number={8} description="Exercices réalisés" color="Yellow" />
            <StatComponent icon="/img/bulb.svg" number={3} description="Récompenses" color="Blue" />
        </footer>
    );
};

export default StatComponents;