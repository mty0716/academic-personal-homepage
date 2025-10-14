import React, { useState } from 'react';

interface FoldableListProps<T> {
  items: T[];
  initiallyVisible?: number;
  renderItem: (item: T, index: number) => React.ReactNode;
  buttonTexts: {
    showMore: string;
    showLess: string;
  };
  className?: string;
}

const FoldableList = <T,>({
  items,
  initiallyVisible = 1,
  renderItem,
  buttonTexts,
  className = "space-y-8"
}: FoldableListProps<T>) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!items || items.length === 0) {
    return null;
  }

  const visibleItems = isExpanded ? items : items.slice(0, initiallyVisible);
  const canFold = items.length > initiallyVisible;

  return (
    <>
      <div className={className}>
        {visibleItems.map(renderItem)}
      </div>
      {canFold && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-6 py-3 text-base font-semibold text-sky-700 bg-sky-50 rounded-md hover:bg-sky-100 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
            aria-expanded={isExpanded}
          >
            {isExpanded ? buttonTexts.showLess : `${buttonTexts.showMore} (${items.length - initiallyVisible})`}
          </button>
        </div>
      )}
    </>
  );
};

export default FoldableList;
