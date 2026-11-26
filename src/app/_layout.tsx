import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="item-form" options={{ title: 'Stock Item' }} />
      <Stack.Screen name="ingredient" options={{ title: 'Ingredient' }} />
    </Stack>
  );
}