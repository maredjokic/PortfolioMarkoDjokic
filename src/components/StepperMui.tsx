'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import ExperienceStep from '@/app/stepperPages/ExperianceStep';
import EducationStep from '@/app/stepperPages/EducationStep';
import ProjectsStep from '@/app/stepperPages/ProjectsStep';
import StudentProjectsStep from '@/app/stepperPages/StudentProjectsStep';
import LanguagesStep from '@/app/stepperPages/LanguagesStep';
import OtherSkillsStep from '@/app/stepperPages/OtherSkilsStep';

const steps = [
    'Experiance',
    'Education',
    'Projects',
    'Student Projects',
    'Languages',
    'Other'
  ];

export default function StepperMui() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    if(steps.length === activeStep + 1) {
        setActiveStep(-1);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <ExperienceStep />;
      case 1:
        return <EducationStep />;
      case 2:
        return <ProjectsStep />;
      case 3:
        return <StudentProjectsStep />;
      case 4:
        return <LanguagesStep />;
      case 5:
        return <OtherSkillsStep />;
      default:
        return <div/>;
    }
  };


  return (
    <Box sx={{ width: '100%' }}>
        <Box sx={{ width: '100%',
            maxWidth: "100%",
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center' }}>
        <Button onClick={handleBack}>
                {'<<<'}
            </Button>
            <Stepper sx={{flexGrow: 1}} nonLinear={true} activeStep={activeStep}>
            {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
                optional?: React.ReactNode;
            } = {};
            return (
                <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
            );
            })}
        </Stepper>
        <Button onClick={handleNext}>
            {'>>>'}
        </Button>
        </Box>
        <Box sx={{ }}>
        {renderStepContent(activeStep)}
        </Box>
    </Box>
  );
}