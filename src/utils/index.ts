export const getInitialsFromName = (name: string): string => {
    const letters: string[] = [];
    name.split(' ').forEach(nameSection => letters.push(nameSection[0]));
    return letters.join('').toUpperCase();
}