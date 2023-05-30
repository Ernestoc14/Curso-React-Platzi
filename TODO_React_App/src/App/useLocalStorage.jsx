import React from "react";

// Custom Hook to use LocalStorage
function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)

    React.useEffect(() => {
        setTimeout(() => {
            try{
                const localStorageItems = localStorage.getItem(itemName)
                let parsedItems
                // If there is no item in the localStorage, we set the initial value
                if (!localStorageItems) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                    parsedItems = initialValue
                } else {
                    // If there is an item in the localStorage, we parse it
                    parsedItems = JSON.parse(localStorageItems)
                    setItem(parsedItems)
                }
                setLoading(false)
            }
            catch(error) {
                setError(error)
                setLoading(false)
            }
        }, 2300)
    }, []);
    
    const saveItem = (newItems) => {
        localStorage.setItem(itemName, JSON.stringify(newItems))
        setItem(newItems)
    }
    return {
        item, 
        saveItem, 
        loading, 
        error
    }
}

export default useLocalStorage