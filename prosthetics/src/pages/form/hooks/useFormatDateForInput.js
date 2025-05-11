import { useCallback } from "react";

export function useFormatDateForInput() {
  const formatDate = useCallback((dateString) => {
    if (!dateString) return "";
    if (dateString.includes("-")) return dateString;

    const [day, month, year] = dateString.split(".");
    if (!day || !month || !year) return "";
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  }, []);

  return formatDate;
}
