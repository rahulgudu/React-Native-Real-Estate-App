# Home Screen Lists

In this commit/segment we have managed to show the data in home screen. In the previous commit we have used ScrollView which was not effiencient. So, we will be using FlatScreen beacuse of the following ways:

## `FlatList` vs `ScrollView`

- When working with lists in React Native, two common components used for renderning are `FlatList` and `ScrollView`. Both having their specific use cases and advantages.

## 📌 FlatList

`FlatList` is optimized for rendering large lists efficiently by rendering only the items currently visible on the screen.

### ✅ Advantages:

- **Virtualized List:** Renders only visible items, improving performance for large lists.
- **Lazy Loading:** Loads items as needed, reducing memory usage.
- **Performance Optimized:** Uses `keyExtractor` to optimize re-renders.

### ❌ Disadvantages:

- **Complexity:** Requires additional props like `keyExtractor`, `renderItem`, etc.
- **Not ideal for small lists:** Overhead might not be worth it for a few items.

### 🔥 Example Usage:

```jsx
import React from "react";
import { FlatList, Text, View } from "react-native";

const data = [
  { id: "1", name: "Item 1" },
  { id: "2", name: "Item 2" },
  { id: "3", name: "Item 3" },
];

const MyFlatList = () => (
  <FlatList
    data={data}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <Text>{item.name}</Text>}
  />
);

export default MyFlatList;
```

## 📌Scroll View

`ScrollView` is best used for small lists where all items need to be rendered at once.

### ✅ Advantages:

Easy to Use: No need for extra props like renderItem or keyExtractor.
Better for Small Lists: Great when the number of items is small and predictable.

### ❌ Disadvantages:

Performance Issues: Renders all items at once, leading to high memory usage.
Not Ideal for Large Lists: Can cause performance bottlenecks.


### 🔥 Example Usage:
```jsx
import React from "react";
import { ScrollView, Text, View } from "react-native";

const MyScrollView = () => (
  <ScrollView>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
  </ScrollView>
);

export default MyScrollView;
```


