import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async ({ url, locals: { supabase } }) => {
  const { data: document } = await supabase
    .from("documents")
    .select("*")
    .eq("path", "/")
    .single();

  return { url: url.origin, document }
}