import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useEffect, useState } from "react"; // Import useState hook
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm, router } from "@inertiajs/react";
import { Inertia } from '@inertiajs/inertia';


export default function Users({ auth, users }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    // State to store the name of the registered user
    const [registeredName, setRegisteredName] = useState(null);

    useEffect(() => {
       console.log('auth');
        if (auth.user && auth.user.role_id === 2) {
            return Inertia.visit('/fotourgjente');
        }
    }, [auth]);


    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

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
                                    <th className="px-4 py-2">name</th>
                                    <th className="px-4 py-2">email</th>
                                    <th className="px-4 py-2">edit</th>
                                    <th className="px-4 py-2">delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.id}>
                                        <td className="border px-4 py-2">
                                            {user.name}
                                        </td>
                                        <td className="border px-4 py-2">
                                            {user.email}
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
                            <InputLabel htmlFor="name" value="Name" />

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

                        <div className="mt-4">
                            <InputLabel htmlFor="email" value="Email" />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
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