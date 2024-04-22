import { Step, StepIndicator, Stepper } from '@chakra-ui/react'
import { useRecoilValue } from 'recoil';

const StepperDots = ({ steps, current }) => {
  const active = useRecoilValue(current)

  return (
    <Stepper size='xs' index={active}>
      {steps.map((step) => (
        <Step key={step.value}>
          <StepIndicator style={{
            backgroundColor: active === step.value ? '#ff8c1e' : '#434e61',
            borderWidth: '2px',
            borderColor: active === step.value ? '#ff8c1e' : '#434e61',
            width: '7px',
            height: '7px'
          }}>
          </StepIndicator>
        </Step>
      ))}
    </Stepper>
  )
}
export default StepperDots