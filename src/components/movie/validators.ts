export const required = (value: string) => (value ? undefined : "Required");

export const mustBeNumber = (value: any) => (isNaN(value) ? "Must be a number" : undefined);

export const minValue = (min: number) => (value: number) =>
    isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;

export const maxValue = (max: number) => (value: number) =>
    isNaN(value) || value <= max ? undefined : `Should be less than ${max}`;

export const notEmpty = (value: string[]) => !!value.length ? undefined : 'Select at least one genre to proceed';

// @ts-ignore
export const composeValidators = (...validators) => (value) =>
    validators.reduce((error, validator) => error || validator(value), undefined);
