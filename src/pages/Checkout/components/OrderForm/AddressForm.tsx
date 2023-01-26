import { useFormContext } from "react-hook-form";
import { InputForm } from "../../../../components/InputForm";
import { CheckoutAddressForm } from "./styles";

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export function AddressForm() {
  const { register, formState } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;

  return (
    <CheckoutAddressForm>
      <InputForm
        type="number"
        placeholder="CEP"
        className="cep"
        {...register("cep")}
        error={errors.cep?.message}
      />
      <InputForm
        type="text"
        placeholder="Rua"
        className="street"
        {...register("street")}
        error={errors.street?.message}
      />
      <InputForm
        type="number"
        placeholder="Número"
        className="number"
        {...register("number")}
        error={errors.number?.message}
      />
      <InputForm
        type="text"
        placeholder="Complemento"
        className="complement"
        rightText="Opcional"
        {...register("complement")}
        error={errors.complement?.message}
      />
      <InputForm
        type="text"
        placeholder="Bairro"
        className="district"
        {...register("district")}
        error={errors.district?.message}
      />
      <InputForm
        type="text"
        placeholder="Cidade"
        className="city"
        {...register("city")}
        error={errors.city?.message}
      />
      <InputForm
        type="text"
        placeholder="UF"
        className="uf"
        maxLength={2}
        minLength={2}
        {...register("uf")}
        error={errors.uf?.message}
      />
    </CheckoutAddressForm>
  );
}
