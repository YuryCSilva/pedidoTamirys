export function conversorText(text: string) {
    return text.trim().toLocaleLowerCase();
}

export function conversorPassword(pass: string) {
    return pass.replace(/\//g, '').toLocaleLowerCase();
}