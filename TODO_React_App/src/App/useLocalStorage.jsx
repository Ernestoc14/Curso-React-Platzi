import React from "react";

// Custom Hook to use LocalStorage
function useLocalStorage(itemName, initialValue) {
    const localStorageItems = localStorage.getItem(itemName)
    let parsedItems

    // If there is no item in the localStorage, we set the initial value
    if (!localStorageItems) {
        localStorage.setItem(itemName, JSON.stringify(initialValue))
        parsedItems = initialValue
    } else {
        // If there is an item in the localStorage, we parse it
        parsedItems = JSON.parse(localStorageItems)
    }

    const [item, setItem] = React.useState(parsedItems)
    const saveItem = (newItems) => {
        localStorage.setItem(itemName, JSON.stringify(newItems))
        setItem(newItems)
    }
    return [item, saveItem]
}

export default useLocalStorage