import IReview from "../interfaces/IReview";

interface IRequest {
    name: string,
    commBody: string,
    img_id: number
}

// function that generates random int between two values
export function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function getAllReviews(): Promise<IReview[]> {
    const response = await fetch('http://25.13.222.253:5000/comments/get-all-comments');

    return response.json();
}

export async function postReview(review: IRequest) {
    fetch('http://25.13.222.253:5000/comments/add-comment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
    })
}