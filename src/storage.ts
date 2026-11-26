import AsyncStorage from '@react-native-async-storage/async-storage';
import { StockItem } from './types';

const KEY = 'stock_items';

export async function loadItems(): Promise<StockItem[]> {
  const raw = await AsyncStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : [];
}

export async function saveItems(items: StockItem[]) {
  await AsyncStorage.setItem(KEY, JSON.stringify(items));
}