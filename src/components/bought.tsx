import React from 'react';

interface BoughtProps {
    purchasedItems: string[]; // Assuming purchased items are strings
}

const Bought: React.FC<BoughtProps> = ({ purchasedItems }) => {
    return (
        <div>
            <h2>Purchased Items</h2>
            <ul>
                {purchasedItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Bought;
