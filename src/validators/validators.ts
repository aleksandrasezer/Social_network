export const required = (value: string) => {
    return value ? undefined : 'field required'
}

export const maxLengthCreator = (maxLength: number) => (value: string) => {
    return value.length > maxLength ? `max length is ${maxLength}` : undefined
}