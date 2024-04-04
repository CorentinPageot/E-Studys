import ExerciseList from "@/components/exercices";
import Selector from "@/components/select";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
    return (
        <div>
            <h1 className="bg-studys-blue p-4 pt-8 text-2xl">Exercices</h1>
            <div className="p-4 flex flex-col gap-4">
                <div className="flex gap-2 text-studys-green">
                    <Selector name="Tout" />
                    <Selector name="Prononciation" />
                    <Selector name="Association" />
                </div>

                <ExerciseList />
                <ExerciseList />
                <ExerciseList />
                <ExerciseList />
                <span className="text-studys-grey text-xs text-center mt-2">Psssstt ! Des exercices arrivent bientôt !</span>
            </div>
        </div>
    );
};

export default page;
