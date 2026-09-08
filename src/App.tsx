import Input from "./components/Input.tsx"

const App = () => {
  return (
    <p className="bg-black p-5 flex gap-2" >
      <Input placeholder="E-mail" type="text"/>
      <Input placeholder="Senha" type="password"/>
    </p>
  )

}

export default App;

