import { ShoppingBag, ShoppingCart, Gift, Zap } from 'lucide-react';

function ShoppingAnimation() {
  const items = [
    { id: 1, Icon: ShoppingBag, delay: 0, duration: 20, startY: '5%' },
    { id: 2, Icon: ShoppingCart, delay: 2, duration: 25, startY: '15%' },
    { id: 3, Icon: Gift, delay: 4, duration: 22, startY: '25%' },
    { id: 4, Icon: Zap, delay: 1, duration: 23, startY: '35%' },
    { id: 5, Icon: ShoppingBag, delay: 3, duration: 21, startY: '45%' },
    { id: 6, Icon: ShoppingCart, delay: 5, duration: 24, startY: '55%' },
    { id: 7, Icon: Gift, delay: 1.5, duration: 26, startY: '65%' },
    { id: 8, Icon: Zap, delay: 3.5, duration: 23, startY: '75%' },
    { id: 9, Icon: ShoppingBag, delay: 0.5, duration: 24, startY: '85%' },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {items.map((item) => {
        const randomX = Math.random() * 100; 

        return (
          <div
            key={item.id}
            className="absolute animate-shopping-item"
            style={{
              left: `${randomX}%`,           
              top: item.startY,
              '--duration': `${item.duration}s`,
              '--delay': '0s',
            }}
          >
            <item.Icon
              size={48}
              className="text-orange-300 opacity-30 drop-shadow-lg"
              strokeWidth={1.5}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ShoppingAnimation;
