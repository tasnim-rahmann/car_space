"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";


const LoginForm = () => {
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const respone = await signIn("credentials", { email, password, callbackUrl: "/", redirect: false });
            if (respone.ok) {
                router.push("/");
                form.reset();
            } else {
                alert('auth failed!!');
            }
        } catch (err) {
            console.log(err);
            alert('auth failed!');
        }
    };
    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
                <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-700"
                >
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Password */}
            <div>
                <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-700"
                >
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Sign In
            </button>
        </form>
    );
};

export default LoginForm;