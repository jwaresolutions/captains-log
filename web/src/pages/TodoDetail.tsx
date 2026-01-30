import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { LCARSHeader } from '../components/lcars/LCARSHeader'
import { LCARSPanel } from '../components/lcars/LCARSPanel'
import { LCARSButton } from '../components/lcars/LCARSButton'
import { useTodoList, useAddTodoItem, useToggleTodoItem, useDeleteTodoList } from '../hooks/useTodos'
import { useBoats } from '../hooks/useBoats'

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
  max-width: 800px;
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

const ListInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.lg};
`

const ListMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.text.secondary};
  font-size: ${props => props.theme.typography.fontSize.sm};
`

const ListType = styled.span<{ type: string }>`
  background-color: ${props => {
    switch (props.type) {
      case 'boat': return props.theme.colors.primary.anakiwa
      default: return props.theme.colors.primary.neonCarrot
    }
  }};
  color: ${props => props.theme.colors.text.inverse};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.pill};
  font-size: ${props => props.theme.typography.fontSize.xs};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
`

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.lg};
`

const StatCard = styled.div`
  background-color: ${props => props.theme.colors.surface.medium};
  border: 2px solid ${props => props.theme.colors.primary.lilac};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing.md};
  text-align: center;
`

const StatValue = styled.div`
  font-size: ${props => props.theme.typography.fontSize.xl};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.primary.neonCarrot};
  margin-bottom: ${props => props.theme.spacing.xs};
`

const StatLabel = styled.div`
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 1px;
`

const ProgressBar = styled.div`
  background-color: ${props => props.theme.colors.surface.medium};
  border-radius: ${props => props.theme.borderRadius.pill};
  height: 12px;
  overflow: hidden;
  margin-bottom: ${props => props.theme.spacing.lg};
`

const ProgressFill = styled.div<{ percentage: number }>`
  background-color: ${props => props.theme.colors.primary.neonCarrot};
  height: 100%;
  width: ${props => props.percentage}%;
  transition: width ${props => props.theme.animation.normal} ease;
`

const AddItemSection = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.lg};
`

const ItemInput = styled.input`
  flex: 1;
  background-color: ${props => props.theme.colors.surface.dark};
  border: 2px solid ${props => props.theme.colors.primary.anakiwa};
  color: ${props => props.theme.colors.text.primary};
  padding: ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.md};
  font-family: ${props => props.theme.typography.fontFamily.primary};
  font-size: ${props => props.theme.typography.fontSize.md};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary.neonCarrot};
    box-shadow: 0 0 10px rgba(255, 153, 102, 0.3);
  }

  &::placeholder {
    color: ${props => props.theme.colors.text.muted};
  }
`

const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
`

const TodoItem = styled.div<{ completed: boolean }>`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  background-color: ${props => props.theme.colors.surface.dark};
  border: 2px solid ${props => props.completed
    ? props.theme.colors.status.success
    : props.theme.colors.primary.anakiwa};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing.md};
  transition: all ${props => props.theme.animation.normal} ease;

  &:hover {
    border-color: ${props => props.theme.colors.primary.neonCarrot};
  }
`

const ItemCheckbox = styled.button<{ completed: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid ${props => props.completed
    ? props.theme.colors.status.success
    : props.theme.colors.primary.anakiwa};
  background-color: ${props => props.completed
    ? props.theme.colors.status.success
    : 'transparent'};
  color: ${props => props.theme.colors.text.inverse};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.theme.typography.fontSize.sm};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  transition: all ${props => props.theme.animation.fast} ease;

  &:hover {
    border-color: ${props => props.theme.colors.primary.neonCarrot};
    background-color: ${props => props.completed
      ? props.theme.colors.status.success
      : props.theme.colors.primary.neonCarrot + '40'};
  }
`

const ItemContent = styled.div<{ completed: boolean }>`
  flex: 1;
  color: ${props => props.completed 
    ? props.theme.colors.text.muted 
    : props.theme.colors.text.primary};
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
  font-size: ${props => props.theme.typography.fontSize.md};
  line-height: ${props => props.theme.typography.lineHeight.normal};
`

const ItemDate = styled.div`
  color: ${props => props.theme.colors.text.muted};
  font-size: ${props => props.theme.typography.fontSize.xs};
  text-align: right;
  min-width: 120px;
`

const EmptyState = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing.xxl};
  color: ${props => props.theme.colors.text.muted};
  
  .empty-icon {
    font-size: 48px;
    margin-bottom: ${props => props.theme.spacing.md};
  }
  
  .empty-title {
    font-size: ${props => props.theme.typography.fontSize.lg};
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    margin-bottom: ${props => props.theme.spacing.sm};
    color: ${props => props.theme.colors.primary.neonCarrot};
  }
`

const ActionButtons = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  justify-content: flex-end;
  margin-top: ${props => props.theme.spacing.lg};
`

const DangerButton = styled(LCARSButton)`
  background-color: ${props => props.theme.colors.status.error};
  border-color: ${props => props.theme.colors.status.error};
  
  &:hover {
    background-color: ${props => props.theme.colors.status.error}CC;
  }
`

export const TodoDetail: React.FC = () => {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const [newItemContent, setNewItemContent] = useState('')

  const { data: todoList, isLoading } = useTodoList(id || '')
  const { data: boats } = useBoats()
  const addItemMutation = useAddTodoItem()
  const toggleItemMutation = useToggleTodoItem()
  const deleteListMutation = useDeleteTodoList()

  const handleBack = () => {
    navigate('/todos')
  }

  const handleAddItem = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newItemContent.trim() || !id) return

    try {
      await addItemMutation.mutateAsync({
        listId: id,
        content: newItemContent.trim()
      })
      setNewItemContent('')
    } catch (error) {
      console.error('Failed to add item:', error)
    }
  }

  const handleToggleItem = async (itemId: string) => {
    try {
      await toggleItemMutation.mutateAsync(itemId)
    } catch (error) {
      console.error('Failed to toggle item:', error)
    }
  }

  const handleDeleteList = async () => {
    if (!id) return
    
    if (window.confirm('Are you sure you want to delete this to-do list? All items will be permanently removed.')) {
      try {
        await deleteListMutation.mutateAsync(id)
        navigate('/todos')
      } catch (error) {
        console.error('Failed to delete to-do list:', error)
      }
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const getBoatName = (boatId?: string) => {
    if (!boatId || !boats) return null
    const boat = boats.find(b => b.id === boatId)
    return boat?.name
  }

  const getListStats = () => {
    if (!todoList) return { totalItems: 0, completedItems: 0, percentage: 0 }
    
    const totalItems = todoList.items.length
    const completedItems = todoList.items.filter((item: any) => item.completed).length
    const percentage = totalItems > 0 ? (completedItems / totalItems) * 100 : 0
    
    return { totalItems, completedItems, percentage }
  }

  if (isLoading) {
    return (
      <PageContainer>
        <LCARSHeader level={1}>Loading To-Do List</LCARSHeader>
        <LCARSPanel title="Loading">
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            Loading to-do list...
          </div>
        </LCARSPanel>
      </PageContainer>
    )
  }

  if (!todoList) {
    return (
      <PageContainer>
        <LCARSHeader level={1}>To-Do List Not Found</LCARSHeader>
        <LCARSPanel>
          <EmptyState>
            <div className="empty-icon">❌</div>
            <div className="empty-title">List Not Found</div>
            <div>The requested to-do list could not be found.</div>
          </EmptyState>
          <ActionButtons>
            <LCARSButton onClick={handleBack}>
              Back to Lists
            </LCARSButton>
          </ActionButtons>
        </LCARSPanel>
      </PageContainer>
    )
  }

  const stats = getListStats()
  const boatName = getBoatName(todoList.boatId)

  return (
    <PageContainer>
      <HeaderSection>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <BackButton onClick={handleBack}>
            ← Back
          </BackButton>
          <LCARSHeader level={1}>{todoList.title}</LCARSHeader>
        </div>
      </HeaderSection>

      <ListInfo>
        <ListMeta>
          <ListType type={todoList.type}>
            {todoList.type}
            {boatName && ` - ${boatName}`}
          </ListType>
          <span>Created {formatDate(todoList.createdAt)}</span>
          {todoList.updatedAt !== todoList.createdAt && (
            <span>• Updated {formatDate(todoList.updatedAt)}</span>
          )}
        </ListMeta>
      </ListInfo>

      <StatsSection>
        <StatCard>
          <StatValue>{stats.totalItems}</StatValue>
          <StatLabel>Total Items</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{stats.completedItems}</StatValue>
          <StatLabel>Completed</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{stats.totalItems - stats.completedItems}</StatValue>
          <StatLabel>Remaining</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{Math.round(stats.percentage)}%</StatValue>
          <StatLabel>Progress</StatLabel>
        </StatCard>
      </StatsSection>

      <ProgressBar>
        <ProgressFill percentage={stats.percentage} />
      </ProgressBar>

      <LCARSPanel title="Add New Item" variant="secondary">
        <form onSubmit={handleAddItem}>
          <AddItemSection>
            <ItemInput
              type="text"
              placeholder="Enter new to-do item..."
              value={newItemContent}
              onChange={(e) => setNewItemContent(e.target.value)}
              disabled={addItemMutation.isPending}
            />
            <LCARSButton 
              type="submit" 
              disabled={!newItemContent.trim() || addItemMutation.isPending}
            >
              {addItemMutation.isPending ? 'Adding...' : 'Add Item'}
            </LCARSButton>
          </AddItemSection>
        </form>
      </LCARSPanel>

      <LCARSPanel title={`Items (${stats.totalItems})`}>
        {todoList.items.length === 0 ? (
          <EmptyState>
            <div className="empty-icon">📝</div>
            <div className="empty-title">No Items Yet</div>
            <div>Add your first to-do item to get started.</div>
          </EmptyState>
        ) : (
          <ItemsList>
            {todoList.items.map((item: any) => (
              <TodoItem key={item.id} completed={item.completed}>
                <ItemCheckbox
                  completed={item.completed}
                  onClick={() => handleToggleItem(item.id)}
                  disabled={toggleItemMutation.isPending}
                >
                  {item.completed && '✓'}
                </ItemCheckbox>
                <ItemContent completed={item.completed}>
                  {item.content}
                </ItemContent>
                <ItemDate>
                  {item.completed && item.completedAt 
                    ? `Completed ${formatDate(item.completedAt)}`
                    : `Added ${formatDate(item.createdAt)}`
                  }
                </ItemDate>
              </TodoItem>
            ))}
          </ItemsList>
        )}
      </LCARSPanel>

      <ActionButtons>
        <DangerButton onClick={handleDeleteList}>
          Delete List
        </DangerButton>
      </ActionButtons>
    </PageContainer>
  )
}