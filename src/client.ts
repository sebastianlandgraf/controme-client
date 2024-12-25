import { tempsResponse } from './temps';

export async function fetchTemperatures(
  baseUrl: string,
  houseId: number = 1,
): Promise<tempsResponse> {
  const url = `${baseUrl}/get/json/v1/${houseId}/temps/`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data: tempsResponse = await response.json();
  return data;
}
