import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function FotoNormale({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="FotoNormale" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <input
                        type="text"
                        className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300 mb-4"
                        placeholder="Modifikimi i fundit"
                        disabled
                    />
                </div>
            </div>

            <div className="w-1/3 p-4"></div>
        </AuthenticatedLayout>
    );
}
