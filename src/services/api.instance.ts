import axios from "axios"

export const storyApi = axios.create({
  baseURL: "https://api.storyapis.com/api/v3",
  headers: {
    "Content-Type": "application/json",
    "X-Api-Key": "MhBsxkU1z9fG6TofE59KqiiWV-YlYE8Q4awlLQehF3U",
    "X-Chain": "story-aeneid",
  },
  timeout: 10000, // 10 seconds timeout
})
