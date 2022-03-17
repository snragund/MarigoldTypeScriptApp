import jsonData from "./data.json";

export interface DataProps {
  id: number;
  image: string;
  eventName: string;
  date: string;
  location: string;
}

export const data: DataProps[] = jsonData.data;
