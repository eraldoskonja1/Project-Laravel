import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function FotoRikontroll({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="FotoRikontroll" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            Kjo eshte faqja per foto rikontoll.
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                {/* First Column */}
                <div className="w-1/3 p-4">
                    <input
                        type="text"
                        className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300 mb-4"
                        placeholder="numri >>> modifikimi i fundit"
                        disabled
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
