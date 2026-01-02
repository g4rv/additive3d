'use client';

import { useCalculator } from '../context/CalculatorContext';

export default function CalculatorSummary() {
  const { state, getTotalWeight, getTotalPrice } = useCalculator();

  if (state.files.length === 0) return null;

  const totalWeight = getTotalWeight();
  const totalPrice = getTotalPrice();

  return (
    <div className="stats shadow bg-base-200">
      <div className="stat">
        <div className="stat-title">Загальна кількість</div>
        <div className="stat-value text-primary">{state.files.length}</div>
        <div className="stat-desc">моделей</div>
      </div>

      <div className="stat">
        <div className="stat-title">Загальна вага</div>
        <div className="stat-value text-primary">{totalWeight.toLocaleString('uk-UA')}</div>
        <div className="stat-desc">грам</div>
      </div>

      <div className="stat">
        <div className="stat-title">Загальна вартість</div>
        <div className="stat-value text-primary">{totalPrice.toLocaleString('uk-UA')}</div>
        <div className="stat-desc">грн (без ПДВ)</div>
      </div>
    </div>
  );
}
