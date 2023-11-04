interface ILibrary {
    id: number,
    name: string,
    description: string,
    location: string,
    opens: string,
    closes: string,
    rating: number,
    noOfRatings: number,
    imageUrl: string
}

export default ILibrary;