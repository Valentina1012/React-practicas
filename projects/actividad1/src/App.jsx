//En React los selectores de clase que se utilizan se escriben className porque en JavaSript class es una palabra reservada
import "./App.css"
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
  //<> </> Invoca al <React.Fragment> para tener el código de forma más limpia
  const format = (userName) => `@${userName}`

  return (
    <section className="App">
      <TwitterFollowCard formatUserName = {format} isFollowing userName="yapurameri" name="Melissa Yapura" />
      <TwitterFollowCard formatUserName = {format} isFollowing= {false} userName="criesinquechua" name="Wendy" />
      <TwitterFollowCard formatUserName = {format} isFollowing userName="soyDalto" name="Dalto" />
      <TwitterFollowCard formatUserName = {format} isFollowing= {false} userName="criesinquechua" name="Wendy" />
    
    </section>
  );
}
