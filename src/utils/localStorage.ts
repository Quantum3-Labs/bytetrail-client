const STORAGE_KEY_PREFIX = "bytetrail_"; // Replace 'myData' with your desired constant key

// Function to write data to local storage
export function writeToLocalStorage(key: string, data: any) {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(STORAGE_KEY_PREFIX + key, serializedData);
    return true; // Data was successfully written
  } catch (error) {
    console.error("Error writing to local storage:", error);
    return false; // An error occurred while writing data
  }
}

// Function to read data from local storage
export function readFromLocalStorage(key: string) {
  try {
    const serializedData = localStorage.getItem(STORAGE_KEY_PREFIX + key);
    if (serializedData === null) {
      return null; // No data found in local storage
    }
    return JSON.parse(serializedData);
  } catch (error) {
    console.error("Error reading from local storage:", error);
    return null; // An error occurred while reading data
  }
}
