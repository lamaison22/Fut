"use client"

import SignOut from "@/components/sign-out";
import Navbar from "@/components/navbar";
import ListPlayers from "@/components/list-players";

export default function HomePlayer() { 

  return (

    <div>  
      <Navbar />

      <ListPlayers/>
    </div>
  );
}
