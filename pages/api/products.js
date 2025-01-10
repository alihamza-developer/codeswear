// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({
        products: {
            "product-1": {
                title: "Blue Tshirt (XL,SM)",
                reviews: [],
                category: "CODESWEAR",
                price: 10.99,
                images: [
                    "shirt1.jpg",
                    "shirt3.jpg",
                    "shirt2.jpg",
                ],
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione repudiandae distinctio cum consequuntur aspernatur vel, tempora perspiciatis totam delectus error aperiam culpa, quidem, quas quos. Quisquam, quod. Quisquam, quod.",
                varients: {
                    size: ["XL", "SM"],
                    color: ["blue", "red"],
                },

            },
            "product-2": {
                title: "Red Tshirt (XL,SM)",
                reviews: [],
                category: "CODESWEAR",
                price: 10.99,
                images: [
                    "shirt1.jpg",
                    "shirt2.jpg",
                    "shirt3.jpg",
                ],
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione repudiandae distinctio cum consequuntur aspernatur vel, tempora perspiciatis totam delectus error aperiam culpa, quidem, quas quos. Quisquam, quod. Quisquam, quod.",
                varients: {
                    size: ["XL", "SM"],
                    color: ["blue", "red"],
                },
            },
            "product-3": {
                title: "Green Tshirt (XL,SM)",
                reviews: [],
                category: "CODESWEAR",
                price: 10.99,
                images: [
                    "shirt2.jpg",
                    "shirt3.jpg",
                    "shirt1.jpg",
                ],
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione repudiandae distinctio cum consequuntur aspernatur vel, tempora perspiciatis totam delectus error aperiam culpa, quidem, quas quos. Quisquam, quod. Quisquam, quod.",
                varients: {
                    size: ["XL", "SM"],
                    color: ["blue", "red"],
                },
            },
            "product-4": {
                title: "Yellow Tshirt (XL,SM)",
                reviews: [],
                category: "CODESWEAR",
                price: 10.99,
                images: [
                    "shirt3.jpg",
                    "shirt1.jpg",
                    "shirt2.jpg",
                ],
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione repudiandae distinctio cum consequuntur aspernatur vel, tempora perspiciatis totam delectus error aperiam culpa, quidem, quas quos. Quisquam, quod. Quisquam, quod.",
                varients: {
                    size: ["XL", "SM"],
                    color: ["blue", "red", "green"],
                },
            },
            "product-5": {
                title: "Black Tshirt (XL,SM)",
                reviews: [],
                category: "CODESWEAR",
                price: 10.99,
                images: [
                    "shirt3.jpg",
                    "shirt2.jpg",
                    "shirt1.jpg",
                ],
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione repudiandae distinctio cum consequuntur aspernatur vel, tempora perspiciatis totam delectus error aperiam culpa, quidem, quas quos. Quisquam, quod. Quisquam, quod.",
                varients: {
                    size: ["XL", "SM"],
                    color: ["blue", "red", "yellow"],
                },
            },
        }
    });
}
