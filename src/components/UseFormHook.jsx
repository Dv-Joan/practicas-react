import React, { useState } from "react";
import { useForm } from "react-hook-form";

function UseFormHook() {
  const [users, setUsers] = useState([]);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
    e.target.reset();
    setUsers([...users, data]);
  };
  return (
    <div className="my-16">
      <span className="text-3xl bg-slate-500 text-white py-1.5 pl-3 pr-3 rounded-lg drop-shadow-lg">
        ✔️ useForm Hook
      </span>
      <br />
      <br />
      <br />
      <div className="flex justify-center">
        <div className="">
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
              {...register("phone", {
                required: true,
                minLength: 9,
                maxLength: 9,
              })}
            />
            <input
              type="submit"
              className="m-4 py-1 px-5 rounded-xl border-2 bg-slate-700 text-white border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
              value="Enviar"
            />
          </form>
        </div>
        <div className="overflow-x-auto relative mx-10 sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 drop-shadow-xl">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  First Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Last Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Email
                </th>
                <th scope="col" className="py-3 px-6">
                  Phone
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={index}
                  class=" dark:bg-gray-700 border-b dark:border-neutral-500 hover:bg-gray-600"
                >
                  <th class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {user.firstName}
                  </th>
                  <td class="py-4 px-6">{user.lastName}</td>
                  <td class="py-4 px-6">{user.email}</td>
                  <td class="py-4 px-6">{user.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UseFormHook;
