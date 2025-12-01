import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Profile
                </h2>
            }
        >
            <Head title="Profile" />

            <div className="py-2">
                <div className="flex justify-center gap-8 flex-wrap">
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-6 max-w-xl">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                        />
                    </div>

                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-6 max-w-xl">
                        <UpdatePasswordForm />
                    </div>

                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-6 max-w-xl">
                        <DeleteUserForm />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
