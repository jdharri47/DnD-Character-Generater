export function random(min, max) {
    const x = Math.floor(Math.random() * (max - min + 1)) + min;
    return x
}