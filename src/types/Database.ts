namespace Database {
  export type Todo = {
    id: string
    description: string
    order: number
    completed: boolean
  }

  export type ConfessionMessage = {
    id: string
    userEmail: string
    userUUID: string
    message: string
    upvotes: number
  }

  export type Confession = {
    crushEmail: string
    crushLinkedin?: string
    crushInstagram?: string
    confessionMessages: ConfessionMessage[]
  }
}

export default Database
