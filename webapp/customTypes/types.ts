export enum Mode { DEBUG, PROD };
export type CustomFormatter = {
    mode: Mode;
    flag: boolean;
    convertCurrency(val1: string, val2: number): string;
};

