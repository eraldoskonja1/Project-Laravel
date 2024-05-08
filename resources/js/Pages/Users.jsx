import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useEffect, useState } from "react"; // Import useState hook
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm, router } from "@inertiajs/react";

export default function Users({ auth, users }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        password: "",
        password_confirmation: "",
        role: "",
    });

    // State to store the name of the registered user
    const [registeredName, setRegisteredName] = useState(null);

    // Define your handleRoleChange function
    const handleRoleChange = (event) => {
        setData({ ...data, role: event.target.value });
    };

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const roleMapping = {
        1: "Admin",
        2: "Operator",
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("users.registry"), {
            // Pass form data to the registration route
            onSuccess: (page) => {
                // Set the name of the registered user from the response
                setRegisteredName(data.name);
                reset();
            },
        });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex">
                {/* First Column - User List */}
                <div className="w-1/2 p-6">
                    <h2 className="text-lg font-bold mb-4 text-white">
                        Te gjithe User-at{" "}
                    </h2>
                    <div>
                        <table className="min-w-full bg-white border rounded-md">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">Perdoruesi</th>
                                    <th className="px-4 py-2">Roli</th>
                                    <th className="px-4 py-2">Edit</th>
                                    <th className="px-4 py-2">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.id}>
                                        <td className="border px-4 py-2">
                                            {user.name}
                                        </td>
                                        <td className="border px-4 py-2">
                                            {roleMapping[user.role_id]}
                                        </td>
                                        <td className="border px-4 py-2">
                                            <button className="w-full sm:w-auto bg-yellow-500 text-white rounded-md px-3 py-1 text-sm">
                                                <a
                                                    href={route(
                                                        "users.edit",
                                                        user.id
                                                    )}
                                                >
                                                    Edit
                                                </a>
                                            </button>
                                        </td>
                                        <td className="border px-4 py-2">
                                            <button className="w-full sm:w-auto bg-red-500 text-white rounded-md px-3 py-1 text-sm">
                                                <td>
                                                    <button
                                                        onClick={() => {
                                                            router.delete(
                                                                `/user/${user.id}`
                                                            );
                                                        }}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="w-1/2 p-6">
                    <form onSubmit={submit}>
                        <h2 className="text-lg font-bold mb-4 text-white">
                            Krijo nje User te ri{" "}
                        </h2>
                        <div>
                            <InputLabel htmlFor="name" value="Perdoruesi" />

                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="role"
                                className="block text-sm font-medium text-gray-700"
                            >
                                <InputLabel value="Role" />
                            </label>
                            <select
                                id="role"
                                name="role"
                                value={data.role}
                                onChange={handleRoleChange}
                                className="mt-1 p-2 border border-gray-300 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                            >
                                <option value="">Percakto Rolin</option>
                                <option value="admin">Admin</option>
                                <option value="operator">Operator</option>
                            </select>
                            {errors.role && (
                                <InputError
                                    message={errors.role}
                                    className="mt-2"
                                />
                            )}
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Password" />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel
                                htmlFor="password_confirmation"
                                value="Confirm Password"
                            />

                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                                required
                            />

                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <PrimaryButton
                                className="ms-4"
                                disabled={processing}
                            >
                                Register
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
