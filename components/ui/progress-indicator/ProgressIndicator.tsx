'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Circle, Clock } from 'lucide-react';
import { cn } from '@/utils/cn';

interface ProgressStep {
  label: string;
  status: 'completed' | 'current' | 'pending';
}

interface ProgressIndicatorProps {
  steps: ProgressStep[];
  currentStep: number;
  showLabels?: boolean;
  className?: string;
}

/**
 * ProgressIndicator - A visual progress indicator component that shows completion status,
 * manufacturing stages, or process steps with animated transitions and visual feedback.
 *
 * @example
 * <ProgressIndicator
 *   steps={[
 *     { label: "File Validation", status: "completed" },
 *     { label: "Printing", status: "current" },
 *     { label: "Quality Check", status: "pending" }
 *   ]}
 *   currentStep={1}
 *   showLabels={true}
 * />
 */
export default function ProgressIndicator({
  steps,
  currentStep,
  showLabels = true,
  className
}: ProgressIndicatorProps) {
  const getStepIcon = (status: ProgressStep['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5" />;
      case 'current':
        return <Clock className="w-5 h-5" />;
      case 'pending':
        return <Circle className="w-5 h-5" />;
    }
  };

  const getStepColor = (status: ProgressStep['status']) => {
    switch (status) {
      case 'completed':
        return 'text-success';
      case 'current':
        return 'text-primary';
      case 'pending':
        return 'text-base-content/30';
    }
  };

  const progressPercentage = (currentStep / (steps.length - 1)) * 100;

  return (
    <div className={cn('w-full', className)}>
      {/* Progress Bar */}
      <div className="relative mb-4">
        <div className="h-2 bg-base-300 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Steps */}
      <div className="flex justify-between relative">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={cn(
              'flex flex-col items-center relative z-10',
              showLabels && 'min-w-0 flex-1'
            )}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            {/* Step Circle */}
            <motion.div
              className={cn(
                'w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300',
                step.status === 'completed' && 'bg-success',
                step.status === 'current' && 'bg-primary',
                step.status === 'pending' && 'bg-base-300'
              )}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                className={getStepColor(step.status)}
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{
                  delay: index * 0.1 + 0.2,
                  duration: 0.4,
                  ease: "easeOut"
                }}
              >
                {getStepIcon(step.status)}
              </motion.div>
            </motion.div>

            {/* Step Label */}
            {showLabels && (
              <motion.div
                className="mt-2 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.3 }}
              >
                <p className={cn(
                  'text-xs font-medium leading-tight',
                  step.status === 'completed' && 'text-success',
                  step.status === 'current' && 'text-primary font-bold',
                  step.status === 'pending' && 'text-base-content/50'
                )}>
                  {step.label}
                </p>
              </motion.div>
            )}

            {/* Active Step Indicator */}
            {step.status === 'current' && (
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Current Step Info */}
      <motion.div
        className="mt-6 p-4 bg-base-200 rounded-lg border border-primary/20"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        <div className="flex items-center gap-2 text-primary font-medium">
          <Clock className="w-4 h-4" />
          <span className="text-sm">
            Поточний етап: {steps[currentStep]?.label}
          </span>
        </div>
        <p className="text-xs text-base-content/60 mt-1">
          {currentStep + 1} з {steps.length} етапів
        </p>
      </motion.div>
    </div>
  );
}