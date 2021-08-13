interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person // 'name' | 'age'
let key: PersonKeys = 'name'
key = 'age'

// key = 'job' // error



type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

// Option I
type UserKeysNoMeta1= Exclude<keyof User, '_id' | 'createdAt'> // 'name' | 'email'
let u1: UserKeysNoMeta1 = 'name'

// Option II
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // 'name' | 'email'
