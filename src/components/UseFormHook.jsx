import React from "react";
import { useForm } from "react-hook-form";

function UseFormHook() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  };
  return (
    <>
      <span className="text-3xl bg-slate-500 text-white py-1.5 pl-3 pr-3 rounded-lg drop-shadow-lg">
        ✔️ useForm Hook
      </span>
      <form
        className="flex flex-col w-96 items-center ml-16 border-2 bg-neutral-100 rounded-xl shadow-xl p-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          name="firstName"
          className="m-4 py-2 px-5 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
          placeholder="First Name"
          {...register("firstName", {
            required: true,
            maxLength: 20,
            message: "Tu nombre es requerido",
          })}
        />
        {errors.firstName && (
          <span className="text-red-500 text-sm">
            {errors.firstName.message}
          </span>
        )}
        <input
          type="text"
          className="m-4 py-2 px-5 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
          placeholder="Last Name"
          {...register("lastName", { required: true, maxLength: 20 })}
        />
        <input
          className="m-4 py-2 px-5 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
          type="text"
          placeholder="Email"
          {...register("email", {
            required: true,
            pattern: /^\S+@\S+$/i,
            message: "Email is required",
          })}
        />
        <input
          className="m-4 py-2 px-5 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
          type="text"
          placeholder="Phone"
          {...register("phone", { required: true, minLength: 9, maxLength: 9 })}
        />
        <input
          className="m-4 py-2 px-5 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
          type="text"
          placeholder="Address"
          {...register("address", {
            required: true,
            maxLength: 50,
            message: "Address is required",
          })}
        />
        <input
          className="m-4 py-2 px-5 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
          type="text"
          placeholder="City"
          {...register("city", { required: true, maxLength: 20 })}
        />
        <input
          className="m-4 py-2 px-5 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
          type="text"
          placeholder="State"
          {...register("state", { required: true, maxLength: 20 })}
        />
        <input
          className="m-4 py-2 px-5 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
          type="text"
          placeholder="Zip"
          {...register("zip", { required: true, maxLength: 5 })}
        />
        <input
          className="m-4 py-2 px-5 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
          type="text"
          placeholder="Country"
          {...register("country", { required: true, maxLength: 20 })}
        />
        <input
          type="submit"
          className="m-4 py-1 px-5 rounded-xl border-2 bg-slate-700 text-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
          value="Enviar"
        />
      </form>
    </>
  );
}

export default UseFormHook;
