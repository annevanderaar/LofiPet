import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {useState} from "react";
import PetImage from "../../images/pet.gif";
import FoodImage from "../../images/icons/food.gif";
import PlayImage from "../../images/icons/play.gif";
import SleepImage from "../../images/icons/sleep.png";
import CleanImage from "../../images/icons/clean.png";

export default function Pet() {
    const [pet, setPet] = useState({
        happiness: 100,
        hunger: 100,
        energy: 100,
        cleanliness: 100,
        health: 100,
        level: 1,
        xp: 0,
        isSleeping: false,
        isDead: false,
    });

    const buttons = [
        {name: 'Feed', icon: FoodImage},
        {name: 'Play', icon: PlayImage},
        {name: 'Sleep', icon: SleepImage},
        {name: 'Clean', icon: CleanImage},
    ];

    const buttonElements = buttons.map(button => {
        return (
            <div
                key={name}
                className="bg-white rounded-md border border-transparent px-3 py-2 flex flex-row gap-2 items-center shadow-md"
            >
                <img src={button.icon} alt={button.name} width="30"/>
                <h2>{button.name}</h2>
            </div>
        )
    })

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Pet
                </h2>
            }
        >
            <Head title="Pet" />


            <div className="flex flex-col justify-center gap-6 items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-row justify-between">
                    <div className="bg-white rounded-md border border-transparent px-3 py-2 shadow-md">
                        <div className="flex flex-row gap-2 items-center">
                            <img src={FoodImage} alt="" width="30"/>

                            <p>Happiness: </p>

                            <p>{pet.happiness}</p>
                        </div>
                    </div>

                    <img src={PetImage} alt="Pet" width="200" />
                </div>

                <div className="flex flex-row gap-2">
                    {buttonElements}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
