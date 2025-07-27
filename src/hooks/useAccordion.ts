import { useState, useCallback } from 'react';

interface UseAccordionProps {
  initialOpenId?: number | null;
  allowMultiple?: boolean;
}

export const useAccordion = ({ initialOpenId = null, allowMultiple = false }: UseAccordionProps = {}) => {
  const [openItems, setOpenItems] = useState<number[]>(initialOpenId ? [initialOpenId] : []);

  const toggleItem = useCallback((id: number) => {
    setOpenItems(prev => {
      if (allowMultiple) {
        return prev.includes(id) 
          ? prev.filter(itemId => itemId !== id)
          : [...prev, id];
      }
      return prev.includes(id) ? [] : [id];
    });
  }, [allowMultiple]);

  const isItemOpen = useCallback((id: number) => {
    return openItems.includes(id);
  }, [openItems]);

  const closeAll = useCallback(() => {
    setOpenItems([]);
  }, []);

  return {
    openItems,
    toggleItem,
    isItemOpen,
    closeAll
  };
};