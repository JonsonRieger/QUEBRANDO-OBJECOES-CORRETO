import { useState, useEffect } from 'react';
import { Clock, Zap } from 'lucide-react';

interface CountdownTimerProps {
  onExpire?: () => void;
}

const CountdownTimer = ({ onExpire }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes in seconds
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsExpired(true);
      onExpire?.();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onExpire]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  if (isExpired) {
    return (
      <div className="text-center p-4 bg-destructive/20 border border-destructive/30 rounded-lg">
        <p className="text-destructive font-bold">⏰ Oferta Expirada!</p>
        <p className="text-sm text-muted-foreground">Não perca a próxima oportunidade!</p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-destructive/20 border border-destructive/30 rounded-full">
        <Clock className="w-4 h-4 text-destructive animate-pulse" />
        <span className="text-destructive font-bold text-sm uppercase tracking-wide">
          Oferta por tempo limitado
        </span>
      </div>
      
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="text-center">
          <div className="bg-gradient-to-br from-destructive to-red-600 text-white rounded-lg p-3 min-w-[60px] shadow-lg">
            <div className="text-2xl font-bold leading-none">
              {String(minutes).padStart(2, '0')}
            </div>
            <div className="text-xs uppercase tracking-wide opacity-90">
              min
            </div>
          </div>
        </div>
        
        <div className="text-destructive text-2xl font-bold animate-pulse">:</div>
        
        <div className="text-center">
          <div className="bg-gradient-to-br from-destructive to-red-600 text-white rounded-lg p-3 min-w-[60px] shadow-lg">
            <div className="text-2xl font-bold leading-none">
              {String(seconds).padStart(2, '0')}
            </div>
            <div className="text-xs uppercase tracking-wide opacity-90">
              seg
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-center gap-2 text-sm text-destructive">
        <Zap className="w-4 h-4" />
        <span className="font-semibold">Restam apenas {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
      </div>
    </div>
  );
};

export default CountdownTimer;