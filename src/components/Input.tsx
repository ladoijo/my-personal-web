import clsx from 'clsx';
import React, { HTMLInputTypeAttribute, forwardRef, memo } from 'react';
import { tv } from 'tailwind-variants';

type AllowedInputType = Extract<HTMLInputTypeAttribute, 'text' | 'tel' | 'email'>;

type CommonProps = {
  title: string;
  inputSize?: 'sm' | 'md' | 'lg' | 'xl';
  placeholder: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  required: boolean;
  className?: string;
  id?: string;
};

type TextInputProps = CommonProps & {
  rows?: undefined; // no rows → input mode
  type: AllowedInputType; // required
};

type TextAreaProps = CommonProps & {
  rows: number; // rows present → textarea mode
  type?: never; // disallow/omit type
};

type InputProps = TextInputProps | TextAreaProps;

const tvInput = tv({
  base: 'w-full border-2 border-black px-2 py-1',
  variants: {
    rounded: {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-md',
      xl: 'rounded-xl'
    },
    height: {
      sm: 'min-h-8',
      md: 'min-h-12',
      lg: 'min-h-16',
      xl: 'min-h-20'
    }
  },
  defaultVariants: {
    rounded: 'sm',
    height: 'sm'
  }
});

const BaseInput = (
  {
    title,
    inputSize,
    placeholder,
    rows,
    type,
    value,
    onChange,
    required,
    className,
    id,
    ...props
  }: InputProps,
  ref: React.Ref<HTMLInputElement | HTMLTextAreaElement>
) => {
  const controlId = id ?? title;
  const isTextarea = Boolean(rows);

  const fieldClassName = clsx(
    // shared visual styles
    'border-2 border-black bg-white',
    'text-black shadow-[2px_2px_black] transition-all duration-300',
    // radius/size variants
    tvInput({ rounded: inputSize ?? 'sm', height: inputSize ?? 'sm' }),
    // focus behavior (remove blue ring, keep black border)
    'focus:border-black focus:shadow-[5px_5px_black] focus:ring-0 focus:outline-none',
    // extra custom classes
    className
  );

  return (
    <div className="flex w-full flex-col space-y-1">
      {!!title && (
        <label htmlFor={controlId} className="text-lg font-bold">
          {title} {required && <span>*</span>}
        </label>
      )}
      {isTextarea ? (
        <textarea
          id={controlId}
          placeholder={placeholder}
          value={value}
          rows={rows}
          onChange={onChange}
          required={required}
          className={fieldClassName}
          ref={ref as React.Ref<HTMLTextAreaElement>}
          {...(props as unknown as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={controlId}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={fieldClassName}
          ref={ref as React.Ref<HTMLInputElement>}
          {...props}
        />
      )}
    </div>
  );
};

const Input = memo(forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(BaseInput));
Input.displayName = 'Input';

export default Input;
