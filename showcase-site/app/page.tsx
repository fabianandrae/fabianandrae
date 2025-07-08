"use client";

import Button from "@/components/Button";
import Message from "@/components/Message";
import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col p-4 items-center gap-4">
      <Message />
      <Button onClick={() => setCount(count + 1)}>Klick mich!</Button>
      <p>Knopf gedrückt: {count}</p>
    </div>
  );
}

export default Home;
