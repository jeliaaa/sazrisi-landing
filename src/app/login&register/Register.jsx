import React, { useState } from "react";
import Input from "../reusableComponents/Input";
import Button from "../../components/ReusableComponents/Button";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"

const Register = () => {

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        repassword: "",
    });

    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: "",
        repassword: "",

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        setErrors({ ...errors, [name]: "" }); // Clear errors when typing
    };

    const submitForm = (e) => {
        e.preventDefault(); // Prevent page reload

        // Basic validation
        if (!form.username) {
            setErrors((prev) => ({ ...prev, username: "მომხმარებლის სახელი არასწორია" }));
        }
        if (!form.password) {
            setErrors((prev) => ({ ...prev, password: "პაროლი არასწორია" }));
        }
        if (!form.email) {
            setErrors((prev) => ({ ...prev, password: "პაროლი არასწორია" }));
        }

        if (form.username && form.password) {
            // Perform login request here (API call, authentication logic, etc.)
        }
    };

    return (
        <div className="w-full h-full flex items-center flex-col justify-center">
            <h1 className="text-6xl mb-5 text-main-color">რეგისტრაცია დროებით არ არის ხელმისაწვდომი!</h1>
            <div className="bg-white text-dark-color flex-col w-1/2 h-[700px] rounded-xl shadow-2xl p-10 flex items-center justify-center">
                <div className='flex items-end gap-x-3'>
                    <img src={logo} alt="logo" className="w-10" />
                    <span className='text-3xl text-dark-color'>Sazrisi</span>
                </div>
                <form onSubmit={submitForm} className="flex flex-col mt-2 gap-y-5 justify-center h-full w-full">
                    <div className="flex gap-x-2 w-full box-border">
                        <div className="flex flex-col gap-y-2 w-1/2">
                            <Input label="მომხმარებლის სახელი" name="username" value={form.username} onChange={handleChange} />
                            {errors.username && <span className="text-red-500">{errors.username}</span>}
                        </div>
                        <div className="flex flex-col gap-y-2 w-1/2">
                            <Input label="მომხმარებლის მეილი" name="email" type="email" value={form.email} onChange={handleChange} />
                            {errors.username && <span className="text-red-500">{errors.email}</span>}
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <Input label="პაროლი" name="password" type="password" value={form.password} onChange={handleChange} />
                        {errors.password && <span className="text-red-500">{errors.password}</span>}
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <Input label="გაიმეორეთ პაროლი" name="repassword" type="password" value={form.repassword} onChange={handleChange} />
                        {errors.password && <span className="text-red-500">{errors.repassword}</span>}
                    </div>
                    <Button className="mt-5" type="submit">
                        რეგისტრაცია
                    </Button>
                    <span>
                        გაქვს ანგარიში?{" "}
                        <Link className="text-main-color underline ml-2" to={"/app/login"}>
                            შესვლა
                        </Link>
                    </span>
                </form>
            </div>
        </div>
    );
};

export default Register;
