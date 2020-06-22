import React from 'react'
import css from './counter.module.css';

export default function StepsFunctional({currentStep}) {
    return (
        <span className={css.counterValue}>({currentStep})</span>    
    )
}
