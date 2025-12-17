import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { LCARSHeader } from '../components/lcars/LCARSHeader'
import { LCARSPanel } from '../components/lcars/LCARSPanel'
import { LCARSButton } from '../components/lcars/LCARSButton'
import { useCreateTodoList } from '../hooks/useTodos'
import { useBoats } from '../hooks/useBoats'

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
  max-width: 600px;
  margin: 0 auto;
`

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.md};
`

const BackButton = styled(LCARSButton)`
  margin-right: ${props => props.theme.spacing.md};
`

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
`

const FormLabel = styled.label`
  color: ${props => props.theme.colors.primary.orange};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  font-size: ${props => props.theme.typography.fontSize.sm};
  letter-spacing: 1px;
`

const FormInput = styled.input`
  background-color: ${props => props.theme.colors.surface.dark};
  border: 2px solid ${props => props.theme.colors.primary.blue};
  color: ${props => props.theme.colors.text.primary};
  padding: ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.md};
  font-family: ${props => props.theme.typography.fontFamily.primary};
  font-size: ${props => props.theme.typography.fontSize.md};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary.orange};
    box-shadow: 0 0 10px rgba(255, 153, 102, 0.3);
  }
  
  &::placeholder {
    color: ${props => props.theme.colors.text.muted};
  }
`

const FormSelect = styled.select`
  background-color: ${props => props.theme.colors.surface.dark};
  border: 2px solid ${props => props.theme.colors.primary.blue};
  color: ${props => props.theme.colors.text.primary};
  padding: ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.md};
  font-family: ${props => props.theme.typography.fontFamily.primary};
  font-size: ${props => props.theme.typography.fontSize.md};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary.orange};
    box-shadow: 0 0 10px rgba(255, 153, 102, 0.3);
  }
  
  option {
    background-color: ${props => props.theme.colors.surface.dark};
    color: ${props => props.theme.colors.text.primary};
  }
`

const TypeDescription = styled.div`
  color: ${props => props.theme.colors.text.secondary};
  font-size: ${props => props.theme.typography.fontSize.sm};
  margin-top: ${props => props.theme.spacing.xs};
  padding: ${props => props.theme.spacing.sm};
  background-color: ${props => props.theme.colors.surface.medium};
  border-radius: ${props => props.theme.borderRadius.sm};
  border-left: 4px solid ${props => props.theme.colors.primary.blue};
`

const ActionButtons = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  justify-content: flex-end;
  margin-top: ${props => props.theme.spacing.lg};
`

const ErrorMessage = styled.div`
  color: ${props => props.theme.colors.status.error};
  background-color: ${props => props.theme.colors.surface.dark};
  border: 2px solid ${props => props.theme.colors.status.error};
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.md};
  margin-bottom: ${props => props.theme.spacing.md};
`

export const TodoForm: React.FC = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [type, setType] = useState<'general' | 'boat'>('general')
  const [boatId, setBoatId] = useState('')
  const [error, setError] = useState('')

  const { data: boats } = useBoats()
  const createListMutation = useCreateTodoList()

  const handleBack = () => {
    navigate('/todos')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!title.trim()) {
      setError('Please enter a title for the to-do list.')
      return
    }

    if (type === 'boat' && !boatId) {
      setError('Please select a boat for boat-specific lists.')
      return
    }

    try {
      const newList: any = await createListMutation.mutateAsync({
        title: title.trim(),
        type,
        boatId: type === 'boat' ? boatId : undefined,
      })
      
      // Navigate to the new list
      navigate(`/todos/${newList.id}`)
    } catch (error: any) {
      console.error('Failed to create to-do list:', error)
      setError(error.message || 'Failed to create to-do list. Please try again.')
    }
  }

  const getTypeDescription = () => {
    switch (type) {
      case 'general':
        return 'General lists are not associated with any specific boat and can contain any type of tasks.'
      case 'boat':
        return 'Boat-specific lists are associated with a particular boat and typically contain maintenance, preparation, or boat-related tasks.'
      default:
        return ''
    }
  }

  return (
    <PageContainer>
      <HeaderSection>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <BackButton onClick={handleBack}>
            ← Back
          </BackButton>
          <LCARSHeader level={1}>Create New To-Do List</LCARSHeader>
        </div>
      </HeaderSection>

      <LCARSPanel title="List Details">
        {error && <ErrorMessage>{error}</ErrorMessage>}
        
        <form onSubmit={handleSubmit}>
          <FormSection>
            <FormGroup>
              <FormLabel htmlFor="title">List Title *</FormLabel>
              <FormInput
                id="title"
                type="text"
                placeholder="Enter a descriptive title for your to-do list..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxLength={100}
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="type">List Type *</FormLabel>
              <FormSelect
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value as 'general' | 'boat')}
                required
              >
                <option value="general">General</option>
                <option value="boat">Boat-Specific</option>
              </FormSelect>
              <TypeDescription>
                {getTypeDescription()}
              </TypeDescription>
            </FormGroup>

            {type === 'boat' && (
              <FormGroup>
                <FormLabel htmlFor="boat">Select Boat *</FormLabel>
                <FormSelect
                  id="boat"
                  value={boatId}
                  onChange={(e) => setBoatId(e.target.value)}
                  required
                >
                  <option value="">Choose a boat...</option>
                  {boats?.map(boat => (
                    <option key={boat.id} value={boat.id}>
                      {boat.name}
                    </option>
                  ))}
                </FormSelect>
                {boats?.length === 0 && (
                  <TypeDescription>
                    No boats available. You'll need to create a boat first before creating boat-specific to-do lists.
                  </TypeDescription>
                )}
              </FormGroup>
            )}

            <ActionButtons>
              <LCARSButton 
                type="button" 
                variant="secondary" 
                onClick={handleBack}
              >
                Cancel
              </LCARSButton>
              <LCARSButton 
                type="submit" 
                disabled={createListMutation.isPending || (type === 'boat' && boats?.length === 0)}
              >
                {createListMutation.isPending ? 'Creating...' : 'Create List'}
              </LCARSButton>
            </ActionButtons>
          </FormSection>
        </form>
      </LCARSPanel>

      <LCARSPanel title="Getting Started" variant="secondary">
        <div style={{ color: '#999', fontSize: '14px', lineHeight: '1.6' }}>
          <p><strong>Tips for creating effective to-do lists:</strong></p>
          <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
            <li>Use descriptive titles that clearly indicate the purpose of the list</li>
            <li>Choose "General" for personal tasks, shopping lists, or general reminders</li>
            <li>Choose "Boat-Specific" for maintenance tasks, pre-departure checklists, or boat projects</li>
            <li>You can add items to your list immediately after creating it</li>
          </ul>
        </div>
      </LCARSPanel>
    </PageContainer>
  )
}