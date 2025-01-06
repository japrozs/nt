import { toTitleCase } from "titlecase";

export const normalCapitalize = (input: string): string => {
    const cleanedInput = input.trim().toLocaleLowerCase();

    // Convert the string to title case using the titlecase library
    const capitalizedString = toTitleCase(cleanedInput);

    return capitalizedString;
};

export const paginate = <T>(
    items: T[],
    pageNumber: number,
    pageSize: number
): T[] => {
    const startIndex = (pageNumber - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
};
