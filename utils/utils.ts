import { toTitleCase } from "titlecase";

export const normalCapitalize = (input: string): string => {
    const cleanedInput = input.trim().toLocaleLowerCase();

    // Convert the string to title case using the titlecase library
    const capitalizedString = toTitleCase(cleanedInput);

    return capitalizedString;
};
