import React from "react";

function App() {
  return (
    <div>
      <header className="flex justify-center bg-blue-400 text-white text-4xl ">
        <h1>letras</h1>
      </header>
      <nav className="flex gap-4 justify-center bg-blue-500 text-white text-xl">
          <a href="#">Letras</a>
          <a href="#">Discografia</a>
          <a href="#">Biografia</a>
          <a href="#">Curiosidades</a>
          <a href="#">Enviar letra</a>
        </nav>
      <nav className="flex gap-2 p-3">
        <a href="#">Tradução</a>
        <a href="#">Imprimir</a>
        <a href="#">Compartilhar</a>
        <a href="#">Corrigir</a>
      </nav>
      <div>
        <img className="rounded-full" src="https://www.letras.com.br/storage/artista/4/6/1/3f.jpg"></img>
        <h1 className="text-blue-400 p-3 font-bold text-2xl" >Talking To The Moon</h1>
        <p className="text-blue-700 p-3 font-bold text-xl">Bruno Mars</p>
      </div>
      <div className="flex flex-col p-4">
        <p>I know you're somewhere out there</p>
        <p>Somewhere far away</p>
        <p>I want you back</p>
        <p>I want you back</p>
        <p>My neighbors think I'm crazy</p>
        <p>But they don't understand</p>
        <p>You're all I have</p>
        <p>You're all I have</p>
        <p>At night when the stars light up my room</p>
        <p>I sit by myself</p>
        <p>Talking to the moon</p>
        <p>Trying to get to you</p>
        <p>In hopes you're on the other side</p>
        <p>Talking to me too</p>
        <p>Oh, am I a fool who sits alone</p>
        <p>Talking to the moon</p>
        <p>-----------------------------------</p> 
        <p>I'm feeling like I'm famous</p>
        <p>The talk of the town</p>
        <p>They say I've gone mad</p>
        <p>Yeah, I've gone mad</p>
        <p>But they don't know what I know</p>
        <p>Cause when the sun goes down</p>
        <p>Someone's talking back</p>
        <p>Yeah, they're talking back</p>
        <p>-----------------------------------</p>
        <p>At night when the stars light up my room</p>
        <p>I sit by myself</p>
        <p>Talking to the moon</p>
        <p>Trying to get to you</p>
        <p>And hopes you're on the other side</p>
        <p>Talking to me too</p>
        <p>Oh, am I a fool who sits alone</p>
        <p>Talking to the moon</p>
        <p>-----------------------------------</p>
        <p>Do you ever hear me calling?</p>
        <p>Cause every night</p>
        <p>I'm talking to the moon</p>
        <p>Still trying to get to you</p>
        <p>And hopes you're on the other side</p>
        <p>Talking to me too</p>
        <p>Oh, am I a fool who sits alone</p>
        <p>Talking to the moon</p>
        <p>-----------------------------------</p>
        <p>I know you're somewhere out there</p>
        <p>Somewhere far away</p>
        <p>-----------------------------------</p>
      </div>
      <div className="p-4 font-bold">
        <p>Composição: Jeff Bhasker/Philip Lawrence/Ari Levine/Bruno Mars/Albert Winkler</p>
      </div>
    </div>
  );
}

export default App;
