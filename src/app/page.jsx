import HomePage from "@/components/Homepage";
import { fetchMessages } from "@/utils/fetchMessages";
import { fetchStories } from "@/utils/fetchStories";

export default async function Home() {
  const messages = await fetchMessages();
  const stories = await fetchStories();
  return (
    <HomePage messages={messages} stories={stories} />
  )
}