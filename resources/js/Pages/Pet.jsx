import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";

export default function Pet() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Pet
                </h2>
            }
        >
            <Head title="Pet" />
            <h1>LofiPet</h1>
        </AuthenticatedLayout>
    );
}
