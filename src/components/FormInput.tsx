import React from 'react';

interface FormInputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  as?: 'input' | 'textarea';
  className?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  type = 'text',
  placeholder,
  required = false,
  name,
  value,
  onChange,
  as = 'input',
  className = '',
}) => {
  return (
    <div className="mb-5">
      {label && (
        <label htmlFor={name} className="block mb-2 font-medium text-gray-700 text-left">
          {label}
          {required && <span className="text-primary-red ml-1">*</span>}
        </label>
      )}
      
      {as === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`w-full p-3 bg-form-bg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent transition ${className}`}
          rows={5}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`w-full p-3 bg-form-bg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent transition ${className}`}
        />
      )}
    </div>
  );
};

export default FormInput; 