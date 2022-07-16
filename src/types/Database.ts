namespace Database {
  export type Todo = {
    id: string
    description: string
    order: number
    completed: boolean
  }

  export type Confession = {
    id: string
    userEmail: string
    crushEmail: string
    crushLinkedin: string
    crushInstagram: string
    message: string
    upvotes: number
  }
}

export default Database
