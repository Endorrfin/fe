const arrayOfNumber: Array<number> = [1, 1, 2, 3, 5]
const arrayOfArray: Array<string> = ['Hey', 'guys']

function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

reverse(arrayOfNumber)
reverse(arrayOfArray)
