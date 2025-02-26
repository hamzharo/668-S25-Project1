import { FormControl, FormField, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldPath, FieldValues } from "react-hook-form";

interface CustomInputProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
  placeholder: string;
}

const CustomInput = <T extends FieldValues>({ control, name, label, placeholder }: CustomInputProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class"
                type={name === "password" || name === "conPassword" ? "password" : "text"}
                {...field} // Spread the field to bind to react-hook-form
              />
            </FormControl>
            {/* Show error message if field has an error */}
            {fieldState?.error && <FormMessage className="form-message mt-2">{fieldState?.error?.message}</FormMessage>}
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
