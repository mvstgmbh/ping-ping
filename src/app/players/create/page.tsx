"use client";

import { CreatePlayer } from "@/app/components/organisms/CreatePlayer/CreatePlayer";
import FadeIn from "react-fade-in";

const Create = () => {
  return (
    <FadeIn>
      <main className="dvh bg-gradient-to-t from-[#F6F6F4] via-[#FBE9E9] to-[#D9EDF4]">
        <CreatePlayer />
      </main>
    </FadeIn>
  );
};

export default Create;
