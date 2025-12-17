import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { LCARSHeader } from '../components/lcars/LCARSHeader'
import { LCARSPanel } from '../components/lcars/LCARSPanel'
import { LCARSButton } from '../components/lcars/LCARSButton'
import { useTodoLists, useDeleteTodoList } from '../hooks/useTodos'
import { useBoats } from '../hooks/useBoats'

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
`

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.md};
`

const FiltersSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.lg};
`

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
`

const FilterLabel = styled.label`
  color: ${props => props.theme.colors.primary.orange};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  font-size: ${props => props.theme.typography.fontSize.sm};
  letter-spacing: 1px;
`

const FilterSelect = styled.select`
  background-color: ${props => props.theme.colors.surface.dark};
  border: 2px solid ${props => props.theme.colors.primary.blue};
  color: ${props => props.theme.colors.text.primary};
  padding: ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.md};
  font-family: ${props => props.theme.typography.fontFamily.primary};
  
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

const TodoListsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${props => props.theme.spacing.md};
`

const TodoListCard = styled.div`
  background-color: ${props => props.theme.colors.surface.dark};
  border: 2px solid ${props => props.theme.colors.primary.purple};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.md};
  cursor: pointer;
  transition: all ${props => props.theme.animation.normal} ease;
  
  &:hover {
    border-color: ${props => props.theme.colors.primary.orange};
    box-shadow: ${props => props.theme.shadows.glow};
  }
`

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${props => props.theme.spacing.sm};
`

const ListTitle = styled.h3`
  color: ${props => props.theme.colors.text.primary};
  font-size: ${props => props.theme.typography.fontSize.lg};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  margin: 0;
  flex: 1;
`

const ListType = styled.span<{ type: string }>`
  background-color: ${props => {
    switch (props.type) {
      case 'boat': return props.theme.colors.primary.blue
      default: return props.theme.colors.primary.orange
    }
  }};
  color: ${props => props.theme.colors.text.inverse};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.pill};
  font-size: ${props => props.theme.typography.fontSize.xs};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-left: ${props => props.theme.spacing.sm};
`

const ListActions = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.xs};
  margin-left: ${props => props.theme.spacing.sm};
`

const ActionButton = styled.button`
  background: none;
  border: 1px solid ${props => props.theme.colors.primary.blue};
  color: ${props => props.theme.colors.primary.blue};
  padding: ${props => props.theme.spacing.xs};
  border-radius: ${props => props.theme.borderRadius.sm};
  cursor: pointer;
  font-size: ${props => props.theme.typography.fontSize.xs};
  transition: all ${props => props.theme.animation.fast} ease;
  
  &:hover {
    border-color: ${props => props.theme.colors.primary.orange};
    color: ${props => props.theme.colors.primary.orange};
  }
  
  &.danger:hover {
    border-color: ${props => props.theme.colors.status.error};
    color: ${props => props.theme.colors.status.error};
  }
`

const ListStats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.text.secondary};
  font-size: ${props => props.theme.typography.fontSize.sm};
`

const ProgressBar = styled.div`
  background-color: ${props => props.theme.colors.surface.medium};
  border-radius: ${props => props.theme.borderRadius.pill};
  height: 8px;
  overflow: hidden;
  margin-bottom: ${props => props.theme.spacing.sm};
`

const ProgressFill = styled.div<{ percentage: number }>`
  background-color: ${props => props.theme.colors.primary.orange};
  height: 100%;
  width: ${props => props.percentage}%;
  transition: width ${props => props.theme.animation.normal} ease;
`

const RecentItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.xs};
`

const RecentItem = styled.div<{ completed: boolean }>`
  color: ${props => props.completed 
    ? props.theme.colors.text.muted 
    : props.theme.colors.text.secondary};
  font-size: ${props => props.theme.typography.fontSize.sm};
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  
  &::before {
    content: '${props => props.completed ? '✓' : '○'}';
    margin-right: ${props => props.theme.spacing.xs};
    color: ${props => props.completed 
      ? props.theme.colors.status.success 
      : props.theme.colors.primary.blue};
  }
`

const ListDate = styled.div`
  color: ${props => props.theme.colors.text.muted};
  font-size: ${props => props.theme.typography.fontSize.xs};
  text-align: right;
  margin-top: ${props => props.theme.spacing.sm};
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
    color: ${props => props.theme.colors.primary.orange};
  }
`

export const TodoLists: React.FC = () => {
  const navigate = useNavigate()
  const [typeFilter, setTypeFilter] = useState<string>('')
  const [boatFilter, setBoatFilter] = useState<string>('')

  const { data: boats } = useBoats()
  const { data: todoLists, isLoading } = useTodoLists()
  const deleteListMutation = useDeleteTodoList()

  const filteredLists = useMemo(() => {
    if (!todoLists) return []
    
    return todoLists.filter((list: any) => {
      if (typeFilter && list.type !== typeFilter) return false
      if (boatFilter && list.boatId !== boatFilter) return false
      return true
    })
  }, [todoLists, typeFilter, boatFilter])

  const handleCreateList = () => {
    navigate('/todos/new')
  }

  const handleViewList = (listId: string) => {
    navigate(`/todos/${listId}`)
  }

  const handleDeleteList = async (listId: string, event: React.MouseEvent) => {
    event.stopPropagation()
    if (window.confirm('Are you sure you want to delete this to-do list? All items will be permanently removed.')) {
      try {
        await deleteListMutation.mutateAsync(listId)
      } catch (error) {
        console.error('Failed to delete to-do list:', error)
      }
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  const getBoatName = (boatId?: string) => {
    if (!boatId || !boats) return null
    const boat = boats.find(b => b.id === boatId)
    return boat?.name
  }

  const getListStats = (list: any) => {
    const totalItems = list.items.length
    const completedItems = list.items.filter((item: any) => item.completed).length
    const percentage = totalItems > 0 ? (completedItems / totalItems) * 100 : 0
    
    return { totalItems, completedItems, percentage }
  }

  if (isLoading) {
    return (
      <PageContainer>
        <LCARSHeader level={1}>To-Do Lists</LCARSHeader>
        <LCARSPanel title="Loading">
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            Loading to-do lists...
          </div>
        </LCARSPanel>
      </PageContainer>
    )
  }

  return (
    <PageContainer>
      <HeaderSection>
        <LCARSHeader level={1}>To-Do Lists</LCARSHeader>
        <LCARSButton onClick={handleCreateList}>
          Create New List
        </LCARSButton>
      </HeaderSection>

      <LCARSPanel title="Filters" variant="secondary">
        <FiltersSection>
          <FilterGroup>
            <FilterLabel>List Type</FilterLabel>
            <FilterSelect
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value="">All Types</option>
              <option value="general">General</option>
              <option value="boat">Boat-Specific</option>
            </FilterSelect>
          </FilterGroup>

          <FilterGroup>
            <FilterLabel>Boat</FilterLabel>
            <FilterSelect
              value={boatFilter}
              onChange={(e) => setBoatFilter(e.target.value)}
              disabled={typeFilter === 'general'}
            >
              <option value="">All Boats</option>
              {boats?.map(boat => (
                <option key={boat.id} value={boat.id}>
                  {boat.name}
                </option>
              ))}
            </FilterSelect>
          </FilterGroup>
        </FiltersSection>
      </LCARSPanel>

      {filteredLists.length === 0 ? (
        <LCARSPanel>
          <EmptyState>
            <div className="empty-icon">📋</div>
            <div className="empty-title">No To-Do Lists Found</div>
            <div>
              {todoLists?.length === 0 
                ? "Create your first to-do list to get started."
                : "Try adjusting your filters to find lists."
              }
            </div>
          </EmptyState>
        </LCARSPanel>
      ) : (
        <TodoListsGrid>
          {filteredLists.map((list: any) => {
            const stats = getListStats(list)
            const boatName = getBoatName(list.boatId)
            
            return (
              <TodoListCard key={list.id} onClick={() => handleViewList(list.id)}>
                <ListHeader>
                  <ListTitle>{list.title}</ListTitle>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <ListType type={list.type}>
                      {list.type}
                      {boatName && ` - ${boatName}`}
                    </ListType>
                    <ListActions>
                      <ActionButton 
                        className="danger"
                        onClick={(e) => handleDeleteList(list.id, e)}
                      >
                        Delete
                      </ActionButton>
                    </ListActions>
                  </div>
                </ListHeader>
                
                <ListStats>
                  <span>{stats.completedItems} of {stats.totalItems} completed</span>
                  <span>{Math.round(stats.percentage)}%</span>
                </ListStats>
                
                <ProgressBar>
                  <ProgressFill percentage={stats.percentage} />
                </ProgressBar>
                
                <RecentItems>
                  {list.items.slice(0, 3).map((item: any) => (
                    <RecentItem key={item.id} completed={item.completed}>
                      {item.content}
                    </RecentItem>
                  ))}
                  {list.items.length > 3 && (
                    <RecentItem completed={false}>
                      ... and {list.items.length - 3} more items
                    </RecentItem>
                  )}
                  {list.items.length === 0 && (
                    <RecentItem completed={false}>
                      No items yet
                    </RecentItem>
                  )}
                </RecentItems>
                
                <ListDate>
                  Created {formatDate(list.createdAt)}
                  {list.updatedAt !== list.createdAt && ' (updated)'}
                </ListDate>
              </TodoListCard>
            )
          })}
        </TodoListsGrid>
      )}
    </PageContainer>
  )
}