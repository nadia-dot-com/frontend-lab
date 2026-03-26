export const fetchPages = async (url: string): Promise<any[]> => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
};