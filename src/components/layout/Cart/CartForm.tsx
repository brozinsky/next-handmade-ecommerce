import React from "react";
import TextInput from "@/components/ui/TextInput";
import Link from "next/link";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { TCartForm } from "@/utils/types";

interface TProps {
  register: UseFormRegister<TCartForm>;
  errors: FieldErrors<TCartForm>;
}

const CartForm = ({ register, errors }: TProps) => {

  return (
    <section className="flex flex-col gap-8">
      <div>
        <h3 className="mb-4 text-xl font-medium text-neutral-900">
          Dane kontaktowe
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <TextInput
            label="Numer telefonu"
            name="phone"
            placeholder="Np. +48 123 456 789"
            register={register}
            errors={errors}
            required={false}
          />
          <TextInput
            label="Adres e-mail"
            name="email"
            placeholder="Twój adres e-mail"
            register={register}
            errors={errors}
            required
          />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-xl font-medium text-neutral-900">
          Adres wysyłki
        </h2>
        <div className="flex flex-col gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <TextInput
              label="Imię"
              name="name"
              placeholder="Twoje imię"
              register={register}
              errors={errors}
              required
            />
            <TextInput
              label="Nazwisko"
              name="secondName"
              placeholder="Twoje nazwisko"
              register={register}
              errors={errors}
              required
            />
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            <TextInput
              label="Adres"
              name="address"
              placeholder="Np. ul. Wrzosowa 8"
              register={register}
              errors={errors}
              required
            />
            <TextInput
              label="Kod pocztowy"
              name="postalCode"
              placeholder="Np. 00-000"
              register={register}
              errors={errors}
              required
            />
            <TextInput
              label="Miasto"
              name="city"
              placeholder="Twoje miasto"
              register={register}
              errors={errors}
              required
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-start">
            <input
              id="regulation"
              type="checkbox"
              {...register("regulation")}
              className="w-4 h-4 border border-gray-300 rounded-sm"
            />
            <label
              htmlFor="regulation"
              className="text-sm ms-2 text-neutral-800"
            >
              Przeczytałem/łam i akceptuję{" "}
              <Link
                href="/pdf/Regulamin sklepu.pdf"
                target="_blank"
                className="font-medium text-black underline hover:text-primary-500"
              >
                Regulamin
              </Link>
              .
            </label>
          </div>
          {errors.regulation && (
            <p className="text-sm text-red-500">{errors.regulation.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-start">
            <input
              id="terms"
              type="checkbox"
              {...register("terms")}
              className="w-4 h-4 border border-gray-300 rounded-sm"
            />
            <label htmlFor="terms" className="text-sm ms-2 text-neutral-800">
              Zapoznałem/łam się z{" "}
              <Link
                href="/pdf/Polityka prywatności.pdf"
                target="_blank"
                className="font-medium text-black underline hover:text-primary-500"
              >
                Polityką prywatności
              </Link>{" "}
              . Wyrażam zgodę na przetwarzanie moich danych osobowych na
              potrzeby realizacji zamówienia.
            </label>
          </div>
          {errors.terms && (
            <p className="text-sm text-red-500">{errors.terms.message}</p>
          )}
        </div>
      </div>

      {/* <button
        type="submit"
        className="px-4 py-2 mt-4 text-white rounded bg-primary-500"
      >
        Zapisz
      </button> */}
    </section>
  );
};

export default CartForm;
