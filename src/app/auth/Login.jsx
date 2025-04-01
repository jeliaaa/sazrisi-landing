import React, { useState } from "react";
import Input from "../reusableComponents/Input";
import Button from "../../components/ReusableComponents/Button";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png"

const Login = () => {
    const nav = useNavigate();

    const [form, setForm] = useState({
        username: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        setErrors({ ...errors, [name]: "" }); // Clear errors when typing
    };

    const submitForm = (e) => {
        e.preventDefault(); // Prevent page reload
        console.log(form);

        // Basic validation
        if (form.username !== "jeliaal") {
            setErrors((prev) => ({ ...prev, username: "მომხმარებლის სახელი არასწორია" }));
        }
        if (form.password !== "12345") {
            setErrors((prev) => ({ ...prev, password: "პაროლი არასწორია" }));
        }

        if (form.username && form.password) {
            nav("/app/main")
            // Perform login request here (API call, authentication logic, etc.)
        }
    };

    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="bg-white text-dark-color flex-col md:w-1/2 h-[500px] rounded-xl shadow-2xl p-10 flex items-center justify-center">
                <div className='flex items-end gap-x-3'>
                    <img src={logo} alt="logo" className="w-10" />
                    <span className='text-3xl text-dark-color'>Sazrisi</span>
                </div>
                <form onSubmit={submitForm} className="flex flex-col gap-y-5 justify-center h-full w-full">
                    <div className="flex flex-col gap-y-2">
                        <Input label="მომხმარებლის სახელი" name="username" value={form.username} onChange={handleChange} />
                        {errors.username && <span className="text-red-500">{errors.username}</span>}
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <Input label="პაროლი" name="password" type="password" value={form.password} onChange={handleChange} />
                        {errors.password && <span className="text-red-500">{errors.password}</span>}
                    </div>
                    <Button className="mt-5" type="submit">
                        შესვლა
                    </Button>
                    <span>
                        არ გაქვს ანგარიში?{" "}
                        <Link className="text-main-color underline ml-2" to={"/app/register"}>
                            დარეგისტრირდი
                        </Link>
                    </span>
                </form>
            </div>
        </div>
    );
};

export default Login;
