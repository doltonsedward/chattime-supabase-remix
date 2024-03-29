import { useLoaderData } from "@remix-run/react";
import supabase from "utils/supabase.server";

import type { LoaderArgs } from "@remix-run/node";
import Login from "components/login";

export const loader = async (x: LoaderArgs) => {
  const { data } = await supabase.from("messages").select();
  return { messages: data ?? [] };
};

export default function Index() {
  const { messages } = useLoaderData<typeof loader>();

  return (
    <div>
      <Login />
      <pre>{JSON.stringify(messages)}</pre>
    </div>
  );
}
