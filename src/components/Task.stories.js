import React from 'react'
import Task from './Task'

export default {
  component: Task,
  title: 'Task'
}

const Template = args => <Task {...args} />

export const Default = Template.bind({})
Default.args = {
  task: {
    id: '1',
    title: 'learn storybook',
    state: 'TASK_INBOX',
    updatedAt: new Date(2020, 9, 24, 1, 30)
  }
}

export const Pinned = Template.bind({})
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
}

export const Archived = Template.bind({})
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
}