import type { Cast } from "./cast.type"
import type { Genres } from "./genres.type"

export type Show = {
  Cast: Cast[]
  Genres: Genres[]
  ID: string
  Images: {
    Background: string
  }
  Synopsis: string
  Title: string
  Year: number
}