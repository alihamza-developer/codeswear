// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json([
        123456,
        456789,
        789123,
        321654,
        654987,
    ]);
}
