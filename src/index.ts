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
let pid: string | number // variable to hold more than 1 type

pid = 22
pid = '22'

// Enum - allows us to define a set of named constants, numberic or string
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
// can set a value too: Up = 1, then Down will be 2 and so on

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

// Type Assertion- explicitly telling the compiler we want to treat an entity as a diff type
let cid: any = 1

/* first way:
let customerId = <number>cid

second way:
let customerId = cid as number
*/

// Functions
function addNum(x: number, y: number): number { // function return value is a number
  return x + y
}

// Void
function log(message: string | number) : void { // not returning anything, so use void
  console.log(message)
}

// Interfaces- custom type/structure to an obj/func, can have readonly or optional properties (ex. below)
interface UserInterface {
  readonly id: number 
  name: string
  age?: number
}

const user1: UserInterface = {
  id: 1,
  name: 'Cynthia'
}

// interface would not work here, cannot use interface with primitives or unions
type Point = number | string 
const p1: Point = 1

interface MathFunc {
  (x: number, y: number) : number
}

const add: MathFunc = (x: number, y: number) : number => x + y
const sub: MathFunc = (x: number, y: number) : number => x - y

interface PersonInterface {
  id: number 
  name: string
  register(): string
}

// Classes
class Person implements PersonInterface { // can use interface too
  /* if we put 'private' before id, it will only be accessible in the class,
      if we put 'protected', it will be same as private AND any class that extends from it
  */
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register() {
    return `${this.name} is now registered`
  }
}

const cynthia = new Person(1, 'Cynthia')
const cindy = new Person(1, 'Cindy')

console.log(cynthia.register()) // 'Cynthia is now registered'

// Subclasses
class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name) // this takes the id and name from Person (superclass)
    this.position = position
  }
}

const emp = new Employee(3, 'Amelia', 'Developer')

console.log(emp.register()) // 'Amelia is now registered'

// Generics
function getArray<T>(items: T[]): T[] { // T is like a placeholder for type
  return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4]) // define number type here
let strArray = getArray<string>(['cynthia', 'cindy']) // define string type here