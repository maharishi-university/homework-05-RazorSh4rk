export default async (n: number): Promise<{ prime: boolean; }> => {
    return new Promise((res, rej) => {
        for (let i = 2, s = Math.sqrt(n); i <= s; i++)
            if (n % i === 0) rej({ prime: false });
        res({ prime: n > 1 });
    })
};