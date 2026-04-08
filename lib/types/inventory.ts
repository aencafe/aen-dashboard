// lib/data/inventory-mock.ts

export const INVENTORY_MOCK = [
  {
    id: "1",
    name: "House Blend - Passenger Raws",
    category: "Coffee",
    currentStock: 12500, // 12.5kg en grammes
    unit: "g",
    minThreshold: 5000,
    targetStock: 25000,
    supplier: "Passenger Raws",
    pricePerUnit: 0.028, // Prix au gramme
  },
  {
    id: "2",
    name: "Oatly Barista Edition",
    category: "Milk",
    currentStock: 48000, // 48L en ml
    unit: "ml",
    minThreshold: 20000,
    targetStock: 120000,
    supplier: "Oatly",
    pricePerUnit: 0.0018, // Prix au ml
  },
  {
    id: "3",
    name: "Ceremonial Matcha",
    category: "Dry",
    currentStock: 450, // 450g
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
    minThreshold: 1000, // ALERT: On est en dessous du seuil
    targetStock: 3000,
    supplier: "Berlin Bio Wholesaler",
    pricePerUnit: 0.012,
  }
];