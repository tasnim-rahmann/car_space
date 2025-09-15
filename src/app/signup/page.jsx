import RegisterForm from "./components/RegisterForm";

const RegisterPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-sm p-8 bg-white rounded-2xl shadow-lg">
                <h1 className="mb-6 text-2xl font-bold text-center text-gray-800">
                    Create Account
                </h1>

                <RegisterForm />
            </div>
        </div>
    );
};

export default RegisterPage;