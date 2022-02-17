// Basic Types
let id: number = 5
let company: string = 'Cynthia'
let isFinished: boolean = true
let x: any = 'Hello'

let ids: number[] = [1,2,3]
let arr: any[] = [1, true, 'Hello']

// Tuple
let person: [number, string, boolean] = [1, 'Cynthia', true] // has to be in order

// Tuple Array
let employees: [number, string][]

employees = [
  [1, 'Cynthia'],
  [2, 'Cindy'],
]

// Union
let pid: string | number

pid = 22
pid ='22'

// Enum
enum Direction1 {
  Up,
  Down,
  Left,
  Right
}

console.log(Direction1.Up) // 0
console.log(Direction1.Down) // 1
console.log(Direction1.Left) // 2
console.log(Direction1.Right) // 3

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}

console.log(Direction2.Up) // 'Up'

// Objects

type User = {
  id: number,
  name: string
}

const user: User = {
  id: 1,
  name: 'Cynthia'
}
