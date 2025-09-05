export async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Erro ao buscar dados");
  }

  const data: T = await response.json();
  return data;
}
