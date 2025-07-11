import React from "react";

type FileInputFieldProps = {
    label: string;
    name: string;
    fullWidth?: boolean;
    shadow?: boolean;
    setFile: (file: File | null) => void;
    error?: string;
};

export const FileInputField: React.FC<FileInputFieldProps> = ({
    label,
    name,
    fullWidth,
    shadow,
    setFile,
    error,
}) => {
    return (
        <div className="mt-3">
            <label
                className="text-sm text-slate-700 font-medium text-opacity-60"
                htmlFor={name}
            >
                {label}
            </label>
            <br />
            <input
                type="file"
                name={name}
                id={name}
                accept="image/*"
                onChange={(e) => {
                    const file = e.currentTarget.files?.[0];
                    setFile(file ?? null);
                }}
                className={`${
                    fullWidth ? "w-full" : "w-80"
                } text-gray-600 font-medium transition-all text-sm border ${
                    shadow ? "shadow-sm" : ""
                } file:mr-4 file:py-1.5 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-gray-100 file:text-blue-500 file:hover:cursor-pointer hover:file:bg-blue-50
                py-1 px-1 mt-1.5 mb-1.5 bg-white rounded-md outline-none focus:ring-2 focus:ring-border-blue-100 ${
                    error ? "border-red-500" : "border-gray-300"
                }`}
            />
            {error && (
                <span className="mt-1 font-medium text-sm text-red-500">
                    {error}
                </span>
            )}
        </div>
    );
};
