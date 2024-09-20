import axios from "axios";

// Використання Generics для типізації функції fetchData
async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url); // Типізація запиту з використанням Generics
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
