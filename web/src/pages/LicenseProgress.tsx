import React from 'react'
import styled from 'styled-components'
import { 
  LCARSPanel, 
  LCARSDataDisplay, 
  LCARSProgressChart, 
  LCARSEstimateDisplay,
  LCARSHeader,
  LCARSAlert
} from '../components/lcars'
import { useLicenseProgress } from '../hooks/useLicenseProgress'

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.lg};
`

const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing.lg};
`

const EstimatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${props => props.theme.spacing.md};
`

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`

const ErrorContainer = styled.div`
  margin-bottom: ${props => props.theme.spacing.lg};
`

const DisabledMessage = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing.xl};
  color: ${props => props.theme.colors.text.muted};
  font-size: ${props => props.theme.typography.fontSize.lg};
`

export const LicenseProgress: React.FC = () => {
  const { data: licenseProgress, isLoading, error } = useLicenseProgress()

  if (isLoading) {
    return (
      <PageContainer>
        <LCARSHeader>Captain's License Progress</LCARSHeader>
        <LoadingContainer>
          <LCARSDataDisplay 
            label="System Status" 
            value="Loading Progress Data..." 
            color="orange" 
            size="lg"
          />
        </LoadingContainer>
      </PageContainer>
    )
  }

  if (error) {
    return (
      <PageContainer>
        <LCARSHeader>Captain's License Progress</LCARSHeader>
        <ErrorContainer>
          <LCARSAlert type="error">
            Error loading license progress data. Please check your connection and try again.
          </LCARSAlert>
        </ErrorContainer>
      </PageContainer>
    )
  }

  if (!licenseProgress || !licenseProgress.enabled) {
    return (
      <PageContainer>
        <LCARSHeader>Captain's License Progress</LCARSHeader>
        <LCARSPanel title="License Tracking Disabled" variant="secondary">
          <DisabledMessage>
            Captain's license progress tracking is currently disabled.
            <br />
            Enable it in your settings to track progress toward OUPV certification.
          </DisabledMessage>
        </LCARSPanel>
      </PageContainer>
    )
  }

  const {
    totalSeaTimeDays,
    seaTimeDaysLast3Years,
    totalHours,
    daysToGoal360,
    daysToGoal90,
    estimatedCompletionDate
  } = licenseProgress

  // Calculate progress percentages (removed unused variables)
  
  // Check if goals are achieved
  const goal360Achieved = totalSeaTimeDays >= 360
  const goal90Achieved = seaTimeDaysLast3Years >= 90
  const bothGoalsAchieved = goal360Achieved && goal90Achieved

  return (
    <PageContainer>
      <LCARSHeader>Captain's License Progress</LCARSHeader>
      
      {bothGoalsAchieved && (
        <LCARSAlert type="success">
          Congratulations! You have met all requirements for OUPV (6-pack) Captain's License eligibility.
        </LCARSAlert>
      )}

      {/* Current Statistics */}
      <LCARSPanel title="Current Sea Time Statistics" variant="primary">
        <StatsGrid>
          <LCARSDataDisplay
            label="Total Sea Time Days"
            value={totalSeaTimeDays}
            color="orange"
            size="lg"
          />
          <LCARSDataDisplay
            label="Days (Last 3 Years)"
            value={seaTimeDaysLast3Years}
            color="purple"
            size="lg"
          />
          <LCARSDataDisplay
            label="Total Hours"
            value={totalHours.toFixed(1)}
            unit="hrs"
            color="blue"
            size="lg"
          />
          <LCARSDataDisplay
            label="Average Hours/Day"
            value={totalSeaTimeDays > 0 ? (totalHours / totalSeaTimeDays).toFixed(1) : '0.0'}
            unit="hrs"
            color="green"
            size="lg"
          />
        </StatsGrid>
      </LCARSPanel>

      {/* Progress Charts */}
      <ChartsGrid>
        <LCARSPanel title="360-Day Total Requirement" variant="primary">
          <LCARSProgressChart
            title="Total Sea Time Days"
            current={totalSeaTimeDays}
            target={360}
            unit="days"
            color="orange"
            size="lg"
            showPercentage={true}
          />
        </LCARSPanel>

        <LCARSPanel title="90-Day Recent Requirement" variant="secondary">
          <LCARSProgressChart
            title="Days in Last 3 Years"
            current={seaTimeDaysLast3Years}
            target={90}
            unit="days"
            color="purple"
            size="lg"
            showPercentage={true}
          />
        </LCARSPanel>
      </ChartsGrid>

      {/* Completion Estimates */}
      <LCARSPanel title="Completion Estimates" variant="accent">
        <EstimatesGrid>
          <LCARSEstimateDisplay
            title="360-Day Goal"
            estimatedDate={!goal360Achieved ? estimatedCompletionDate : undefined}
            daysRemaining={!goal360Achieved ? daysToGoal360 : undefined}
            isComplete={goal360Achieved}
            color="orange"
            size="md"
          />
          
          <LCARSEstimateDisplay
            title="90-Day (3 Years) Goal"
            daysRemaining={!goal90Achieved ? daysToGoal90 : undefined}
            isComplete={goal90Achieved}
            color="purple"
            size="md"
          />
          
          {!bothGoalsAchieved && (
            <LCARSEstimateDisplay
              title="License Eligibility"
              estimatedDate={estimatedCompletionDate}
              isComplete={bothGoalsAchieved}
              color="blue"
              size="md"
            />
          )}
        </EstimatesGrid>
      </LCARSPanel>

      {/* Requirements Information */}
      <LCARSPanel title="OUPV (6-Pack) License Requirements" variant="secondary">
        <StatsGrid>
          <LCARSDataDisplay
            label="Total Sea Time"
            value="360 Days"
            color="orange"
            size="md"
          />
          <LCARSDataDisplay
            label="Recent Experience"
            value="90 Days in 3 Years"
            color="purple"
            size="md"
          />
          <LCARSDataDisplay
            label="Minimum Per Day"
            value="4 Hours"
            color="blue"
            size="md"
          />
          <LCARSDataDisplay
            label="Additional Requirements"
            value="Medical, Drug Test, Course"
            color="green"
            size="md"
          />
        </StatsGrid>
      </LCARSPanel>
    </PageContainer>
  )
}