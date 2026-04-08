// lib/data/inventory-mock.ts

export interface InventoryItem {
  id: string;
  name: string;
  category: string;
  currentStock: number;
  unit: string;
  minThreshold: number;
  targetStock: number;
  supplier: string;
  pricePerUnit: number;
}

export const INVENTORY_MOCK: InventoryItem[] = [
  {
    id: "1",
    name: "House Blend - Passenger Raws",
    category: "Coffee",
    currentStock: 12500,
    unit: "g",
    minThreshold: 5000,
    targetStock: 25000,
    supplier: "Passenger Raws",
    pricePerUnit: 0.028,
  },
  {
    id: "2",
    name: "Oatly Barista Edition",
    category: "Milk",
    currentStock: 48000,
    unit: "ml",
    minThreshold: 20000,
    targetStock: 120000,
    supplier: "Oatly",
    pricePerUnit: 0.0018,
  },
  {
    id: "3",
    name: "Ceremonial Matcha",
    category: "Dry",
    currentStock: 450,
    unit: "g",
    minThreshold: 200,
    targetStock: 1000,
    supplier: "Matcha Union",
    pricePerUnit: 0.15,
  },
  {
    id: "4",
    name: "Miso Paste",
    category: "Food",
    currentStock: 800,
    unit: "g",
    minThreshold: 1000,
    targetStock: 3000,
    supplier: "Berlin Bio Wholesaler",
    pricePerUnit: 0.012,
  }
];